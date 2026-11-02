import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const port = 32191
const origin = `http://127.0.0.1:${port}`

async function waitForPage(pathname, timeoutMs = 45_000) {
  const deadline = Date.now() + timeoutMs
  let lastError
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${origin}${pathname}`)
      if (response.ok) return response
      lastError = new Error(`HTTP ${response.status}`)
    } catch (error) {
      lastError = error
    }
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
  throw lastError ?? new Error(`Timed out waiting for ${pathname}`)
}

test('homepage exposes both supplied qualification documents with accurate public copy', { timeout: 60_000 }, async () => {
  const projectRoot = fileURLToPath(new URL('..', import.meta.url))
  const nextBin = fileURLToPath(new URL('../node_modules/next/dist/bin/next', import.meta.url))
  const server = spawn(process.execPath, [nextBin, 'dev', '--hostname', '127.0.0.1', '--port', String(port)], {
    cwd: projectRoot,
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  try {
    const response = await waitForPage('/')
    const html = await response.text()
    assert.match(html, /id="certifications"/)
    assert.match(html, /Compliance Documents/)
    assert.match(html, /XMT0202601020W\/MR/)
    assert.match(html, /ICR\/VC\/HTT261031/)
    assert.match(html, /Voluntary verification; not a complete CE certification/)
    assert.match(html, /href="\/documents\/injection-molding-robot-technical-construction-file\.pdf"/)
    assert.match(html, /href="\/documents\/injection-molding-robot-verification-of-conformity\.pdf"/)
  } finally {
    if (process.platform === 'win32' && server.pid) {
      spawnSync('taskkill.exe', ['/PID', String(server.pid), '/T', '/F'], { stdio: 'ignore' })
    } else {
      server.kill('SIGTERM')
    }
  }
})
