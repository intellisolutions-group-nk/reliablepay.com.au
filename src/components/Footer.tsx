import Link from "next/link";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Security & Compliance", href: "/security-compliance" },
    { name: "About ReliablePay", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
  ],
  services: [
    { name: "Payroll Processing", href: "/services/payroll-processing" },
    { name: "Salary & Wage Disbursement", href: "/services/salary-disbursement" },
    { name: "Superannuation Processing", href: "/services/superannuation-processing" },
    { name: "Payroll Compliance & Reporting", href: "/services/payroll-compliance" },
    { name: "Payroll Outsourcing", href: "/services/payroll-outsourcing" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-heading font-bold">ReliablePay</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Professional payroll and payment-related services for Australian businesses.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p>Reliable Pay Solutions Pty Ltd</p>
              <p>ABN: 63 693 215 011</p>
              <p>ACN: 693 215 011</p>
              <p>New South Wales, Australia</p>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Email</p>
                <a
                  href="mailto:info@reliablepay.com.au"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  info@reliablepay.com.au
                </a>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-white/70 text-sm">New South Wales, Australia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {currentYear} ReliablePay. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
