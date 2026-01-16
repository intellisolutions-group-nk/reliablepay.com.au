import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Payroll Compliance & Reporting - ReliablePay",
  description:
    "Comprehensive payroll compliance and reporting services for Australian businesses. Stay compliant with all regulatory requirements.",
};

const features = [
  {
    title: "Tax Reporting & Lodgement",
    description:
      "Accurate preparation and lodgement of all required tax reports including PAYG withholding, ensuring timely submission to the ATO.",
  },
  {
    title: "Single Touch Payroll",
    description:
      "Full STP compliance with real-time reporting of payroll information to the ATO each pay cycle, meeting all Phase 2 requirements.",
  },
  {
    title: "Award Interpretation",
    description:
      "Understanding and application of relevant modern awards to ensure correct pay rates, allowances, and conditions are applied.",
  },
  {
    title: "Record Keeping",
    description:
      "Comprehensive payroll record keeping that meets all legal requirements, with records maintained for the required retention periods.",
  },
  {
    title: "End of Year Processing",
    description:
      "Complete end of financial year processing including STP finalisation, payment summaries, and reconciliations.",
  },
  {
    title: "Audit Support",
    description:
      "Documentation and support for payroll audits or compliance reviews, with detailed records readily available.",
  },
];

const complianceAreas = [
  {
    title: "Australian Taxation Office",
    items: [
      "PAYG withholding compliance",
      "Single Touch Payroll reporting",
      "Fringe Benefits Tax considerations",
      "Tax file number declarations",
      "Activity statement reporting",
    ],
  },
  {
    title: "Fair Work Requirements",
    items: [
      "National Employment Standards",
      "Modern Award compliance",
      "Minimum wage requirements",
      "Leave entitlement calculations",
      "Record keeping obligations",
    ],
  },
  {
    title: "Superannuation",
    items: [
      "Super Guarantee compliance",
      "Contribution deadlines",
      "Employee choice of fund",
      "Quarterly reporting requirements",
      "SuperStream compliance",
    ],
  },
];

const reportingCapabilities = [
  {
    title: "Standard Reports",
    description: "Regular payroll reports including pay summaries, deduction summaries, and leave balances.",
  },
  {
    title: "Compliance Reports",
    description: "Reports designed for compliance purposes including STP submissions and superannuation contributions.",
  },
  {
    title: "Management Reports",
    description: "Summary reports for management review including cost analyses and departmental breakdowns.",
  },
  {
    title: "Custom Reports",
    description: "Tailored reports to meet your specific business requirements and reporting needs.",
  },
];

const faqs = [
  {
    question: "How do you handle Single Touch Payroll reporting?",
    answer: "We submit STP reports to the ATO each pay cycle, reporting salary and wage information, PAYG withholding, and superannuation details. We also handle the EOFY finalisation process to close out each financial year.",
  },
  {
    question: "What happens when award rates change?",
    answer: "We monitor changes to relevant awards and update pay rates accordingly. When annual wage reviews occur or awards are varied, we ensure changes are applied from the correct effective date.",
  },
  {
    question: "How long do you keep payroll records?",
    answer: "We maintain payroll records for the legally required period of seven years. Records are stored securely and can be accessed for audit or review purposes as needed.",
  },
  {
    question: "Can you help if we are being audited?",
    answer: "Yes, we can provide documentation and support for payroll audits. Our comprehensive record keeping means we can quickly provide the information auditors require.",
  },
];

export default function PayrollCompliancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <Link
                href="/services"
                className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Services
              </Link>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                Payroll Compliance & Reporting
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Stay compliant with Australian payroll regulations. We provide comprehensive 
                reporting and ensure adherence to all legal requirements.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Navigating Payroll Compliance
                </h2>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  Australian payroll compliance can be complex, with multiple regulatory 
                  bodies and requirements to navigate. Our compliance and reporting service 
                  helps ensure your business meets all its obligations.
                </p>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  From Single Touch Payroll reporting to the ATO through to Fair Work 
                  compliance, we handle the details so you can focus on your business. 
                  Our team stays current with regulatory changes to keep your payroll 
                  compliant.
                </p>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  We provide comprehensive documentation and reporting to support your 
                  record-keeping requirements and assist with any compliance reviews. 
                  When regulations change, we update our processes accordingly.
                </p>
                <p className="text-muted text-lg leading-relaxed">
                  With ReliablePay managing your compliance, you can be confident that 
                  your payroll meets all regulatory requirements and is properly documented.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-card-bg rounded-2xl p-8 border border-border">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
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
                      <div>
                        <span className="text-foreground font-medium">{feature.title}</span>
                        <p className="text-muted text-sm mt-1">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Compliance Areas Section */}
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Compliance Areas We Cover
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Our service addresses compliance requirements across key regulatory areas.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {complianceAreas.map((area, index) => (
              <AnimatedSection key={area.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-border h-full">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                    {area.title}
                  </h3>
                  <ul className="space-y-3">
                    {area.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <svg
                          className="w-4 h-4 text-primary flex-shrink-0 mt-1"
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
                        <span className="text-muted text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Reporting Capabilities
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Comprehensive reporting to meet compliance and business needs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reportingCapabilities.map((capability, index) => (
              <AnimatedSection key={capability.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-muted text-sm">{capability.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* STP Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                  Single Touch Payroll Compliance
                </h2>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  Single Touch Payroll is a key compliance requirement for Australian 
                  employers. We ensure your STP obligations are met with every pay cycle.
                </p>
                <ul className="space-y-4">
                  {[
                    "Real-time reporting each pay cycle",
                    "Salary, wages, and allowances reporting",
                    "PAYG withholding submissions",
                    "Superannuation information",
                    "End of financial year finalisation",
                    "Phase 2 compliance",
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

            <AnimatedSection delay={0.2}>
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-4">
                    Always Compliant
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Our systems are designed to meet STP requirements, ensuring your 
                    business remains compliant with ATO reporting obligations.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Common questions about payroll compliance and reporting.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 0.1}>
                <div className="bg-card-bg rounded-xl p-6 border border-border">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Related Services
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Explore our other payroll and payment services.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Payroll Processing", href: "/services/payroll-processing" },
              { title: "Salary Disbursement", href: "/services/salary-disbursement" },
              { title: "Superannuation Processing", href: "/services/superannuation-processing" },
              { title: "Payroll Outsourcing", href: "/services/payroll-outsourcing" },
            ].map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Link
                  href={service.href}
                  className="block p-6 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <span className="inline-flex items-center text-primary text-sm mt-2">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Stay Compliant with Confidence
            </h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              Contact us to learn how we can help ensure your payroll meets all regulatory requirements.
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
                View All Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
