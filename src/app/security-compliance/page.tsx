import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Security & Compliance",
  description:
    "ReliablePay prioritises data security and regulatory compliance. Learn about our data protection measures, STP compliance, and Australian payroll regulations adherence.",
  alternates: {
    canonical: "https://reliablepay.com.au/security-compliance",
  },
  openGraph: {
    title: "Security & Compliance - ReliablePay",
    description:
      "ReliablePay prioritises data security and regulatory compliance. Learn about our data protection measures, STP compliance, and Australian payroll regulations adherence.",
    url: "https://reliablepay.com.au/security-compliance",
  },
};

const securityFeatures = [
  {
    title: "Data Protection",
    description:
      "We employ robust data protection measures to safeguard all sensitive employee and business information throughout the payroll process. Your data is treated with the utmost care and protected using industry-standard security protocols.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Secure Processing",
    description:
      "All payroll transactions and data transfers are processed through secure channels with encryption to protect against unauthorised access. We use secure connections for all data transmission and storage.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Access Control",
    description:
      "Strict access control protocols ensure that only authorised personnel can access sensitive payroll data and systems. We implement role-based access controls and maintain detailed access logs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    title: "Regular Audits",
    description:
      "We conduct regular internal reviews of our processes and systems to ensure ongoing security and identify potential improvements. Continuous monitoring helps us maintain the highest security standards.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const complianceAreas = [
  {
    title: "Single Touch Payroll",
    description:
      "Full compliance with Australian Tax Office Single Touch Payroll (STP) requirements, ensuring accurate and timely reporting of payroll information directly to the ATO.",
    details: [
      "Real-time reporting of salary and wages",
      "PAYG withholding reporting",
      "Superannuation information submission",
      "End of financial year finalisation",
    ],
  },
  {
    title: "Tax Obligations",
    description:
      "Adherence to all tax withholding and reporting obligations, including PAYG withholding and accurate tax calculations based on current ATO requirements.",
    details: [
      "Correct PAYG withholding calculations",
      "Tax table updates and application",
      "Tax file number declarations",
      "Tax reporting and lodgement",
    ],
  },
  {
    title: "Superannuation Guarantee",
    description:
      "Compliance with superannuation guarantee requirements, ensuring correct contribution rates and timely payments to employee funds.",
    details: [
      "Current super guarantee rate application",
      "Quarterly contribution deadlines",
      "Employee choice of fund compliance",
      "SuperStream compliance",
    ],
  },
  {
    title: "Fair Work Compliance",
    description:
      "Adherence to Fair Work requirements including minimum wage rates, leave entitlements, and other employment conditions.",
    details: [
      "National Employment Standards",
      "Modern Award interpretation",
      "Minimum wage compliance",
      "Leave entitlement calculations",
    ],
  },
  {
    title: "Record Keeping",
    description:
      "Comprehensive record keeping practices that meet legal requirements for employee records and payroll documentation.",
    details: [
      "Employee record maintenance",
      "Pay slip generation and retention",
      "Seven-year record retention",
      "Audit-ready documentation",
    ],
  },
  {
    title: "Privacy Obligations",
    description:
      "Compliance with Australian privacy legislation in the handling of personal and sensitive employee information.",
    details: [
      "Privacy Act 1988 compliance",
      "Australian Privacy Principles adherence",
      "Data collection and use transparency",
      "Privacy breach protocols",
    ],
  },
];

const dataHandlingPrinciples = [
  {
    title: "Collection",
    description: "We only collect personal information that is necessary for providing our payroll services. All data collection is transparent and purposeful.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Storage",
    description: "All data is stored securely within Australia using encrypted storage solutions. We implement multiple layers of protection for stored data.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: "Access",
    description: "Strict protocols govern who can access data and for what purpose. All access is logged and monitored for security purposes.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    title: "Retention",
    description: "We retain records in accordance with legal requirements and dispose of data securely when no longer needed.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Backup",
    description: "Regular backups protect against data loss. Backup data is encrypted and stored securely with the same protection as primary data.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
  {
    title: "Disposal",
    description: "When data is no longer required, it is disposed of securely using appropriate methods to ensure it cannot be recovered.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
];

export default function SecurityCompliancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                Security & Compliance
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                At ReliablePay, we take security and compliance seriously. Your data 
                is protected with robust security measures, and our processes are designed 
                to meet Australian regulatory requirements.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Your Security is Our Priority
                </h2>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  We understand that payroll data is among the most sensitive information 
                  your business handles. That is why we have implemented comprehensive 
                  security measures at every level of our operations.
                </p>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  From the moment data enters our systems to its secure storage and 
                  eventual disposal, we apply rigorous security protocols to protect 
                  your information from unauthorised access, loss, or misuse.
                </p>
                <p className="text-muted text-lg leading-relaxed">
                  Our security approach is not static. We continuously monitor for 
                  threats, update our systems, and improve our processes to stay ahead 
                  of emerging security challenges.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-primary rounded-2xl p-8 lg:p-10 text-white">
                <h3 className="font-heading text-2xl font-semibold mb-6">
                  Our Security Promise
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  We treat your payroll data with the same level of care and protection 
                  that you would expect from a financial institution.
                </p>
                <ul className="space-y-3">
                  {[
                    "End-to-end data encryption",
                    "Role-based access controls",
                    "Australian-based data storage",
                    "Regular security audits",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Security Measures
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                We implement comprehensive security measures to protect your business 
                and employee data at every stage of the payroll process.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Data Handling Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How We Handle Your Data
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Our data handling practices are designed to protect your information 
                throughout its lifecycle.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataHandlingPrinciples.map((principle, index) => (
              <AnimatedSection key={principle.title} delay={index * 0.1}>
                <div className="bg-card-bg rounded-xl p-6 border border-border h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {principle.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{principle.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Regulatory Compliance
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Our payroll services are designed to meet Australian regulatory requirements, 
                helping your business stay compliant across all key areas.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {complianceAreas.map((area, index) => (
              <AnimatedSection key={area.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-border">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                        {area.title}
                      </h3>
                      <p className="text-muted leading-relaxed">{area.description}</p>
                    </div>
                    <div>
                      <ul className="space-y-3">
                        {area.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-foreground text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Commitment to You
                </h2>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  We are committed to maintaining the highest standards of security and 
                  compliance in all our operations. Your trust is important to us, and 
                  we work diligently to protect your business interests.
                </p>
                <ul className="space-y-4">
                  {[
                    "Transparent communication about our security practices",
                    "Prompt notification of any security concerns",
                    "Regular updates on compliance requirements",
                    "Dedicated support for security-related queries",
                    "Continuous improvement of our security measures",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-primary rounded-2xl p-8 lg:p-10 text-white">
                <h3 className="font-heading text-2xl font-semibold mb-6">
                  Security Questions?
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  If you have any questions about our security practices, data handling 
                  procedures, or compliance measures, we are happy to discuss them with you.
                </p>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Our team can provide detailed information about how we protect your 
                  data and ensure compliance with Australian regulations.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-primary px-6 py-3 rounded-lg font-semibold transition-all hover:bg-white/90"
                >
                  Contact Us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Secure Payroll Processing
            </h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              Partner with a payroll provider that takes security and compliance as 
              seriously as you do. Contact us to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold transition-all hover:bg-primary/5"
              >
                Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
