import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'

const root = path.resolve(import.meta.dirname, '..')

test('publishes the supplied TCF and voluntary VoC with their factual metadata and readable assets', async () => {
  const manifest = JSON.parse(await readFile(path.join(root, 'data', 'qualifications.json'), 'utf8'))

  assert.deepEqual(
    manifest.map(({ id, documentNumber, issueDate, expiryDate = null }) => ({ id, documentNumber, issueDate, expiryDate })),
    [
      {
        id: 'injection-molding-robot-tcf',
        documentNumber: 'XMT0202601020W/MR',
        issueDate: '2026-10-20',
        expiryDate: null,
      },
      {
        id: 'injection-molding-robot-voc',
        documentNumber: 'ICR/VC/HTT261031',
        issueDate: '2026-10-21',
        expiryDate: '2031-10-20',
      },
    ],
  )

  assert.equal(manifest[1].verificationBasis, 'Voluntary verification; not a complete CE certification')

  for (const qualification of manifest) {
    for (const key of ['title', 'documentType', 'summary', 'previewImage', 'pdfUrl']) {
      assert.equal(typeof qualification[key], 'string', `${qualification.id}.${key} must be a string`)
      assert.ok(qualification[key].trim(), `${qualification.id}.${key} must not be empty`)
    }

    const preview = await readFile(path.join(root, 'public', qualification.previewImage.replace(/^\//, '')))
    assert.ok(preview.length > 10_000, `${qualification.id} preview must be a real rendered page`)

    const pdf = await readFile(path.join(root, 'public', qualification.pdfUrl.replace(/^\//, '')))
    assert.equal(pdf.subarray(0, 5).toString('ascii'), '%PDF-', `${qualification.id} must link to a readable PDF`)
  }
})
