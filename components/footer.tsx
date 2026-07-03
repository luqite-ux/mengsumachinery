import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Custom Automation", href: "#contact" },
    { label: "Assembly Systems", href: "#products" },
    { label: "Material Handling", href: "#products" },
    { label: "Quality Inspection", href: "#products" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BB%BF-oD3L0baEE93CPlhSQWURA9OIFSCnRW.png"
              alt="MEROBOT Logo"
              width={140}
              height={32}
              className="h-8 w-auto brightness-0 invert mb-4"
            />
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Shanghai Mengsu Automation Machinery Co., Ltd — Professional automation solutions 
              for global industries.
            </p>
            <div className="text-background/70 text-sm">
              <div>3000㎡ Factory</div>
              <div>300-400 Units/Month</div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>Shanghai, China</li>
              <li>
                <a
                  href="http://msrobot-sh.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  msrobot-sh.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mengsumachinery.com"
                  className="hover:text-background transition-colors"
                >
                  info@mengsumachinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Shanghai Mengsu Automation Machinery Co., Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="text-sm text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-background/60 hover:text-background transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
