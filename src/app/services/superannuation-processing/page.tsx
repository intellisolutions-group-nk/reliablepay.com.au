import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Superannuation Processing",
  description:
    "Compliant superannuation processing for Australian businesses. Super guarantee calculations, fund contribution management, and quarterly reporting to meet ATO requirements.",
  alternates: {
    canonical: "https://reliablepay.com.au/services/superannuation-processing",
  },
  openGraph: {
    title: "Superannuation Processing - ReliablePay",
    description:
      "Compliant superannuation processing for Australian businesses. Super guarantee calculations, fund contribution management, and quarterly reporting to meet ATO requirements.",
    url: "https://reliablepay.com.au/services/superannuation-processing",
  },
};

const features = [
  {
    title: "Superannuation Calculation",
    description:
      "Accurate calculation of superannuation guarantee contributions based on current rates and employee ordinary time earnings.",
  },
  {
    title: "Fund Contribution Processing",
    description:
      "Timely processing and remittance of contributions to employee superannuation funds through compliant payment channels.",
  },
  {
    title: "Multiple Fund Management",
    description:
      "Management of contributions to various superannuation funds based on employee choices and default fund arrangements.",
  },
  {
    title: "Super Guarantee Compliance",
    description:
      "Ensuring all contributions meet super guarantee requirements and are paid within quarterly deadlines.",
  },
  {
    title: "Quarterly Reporting",
    description:
      "Comprehensive reporting to help you track and verify all superannuation contributions and deadlines.",
  },
  {
    title: "Employee Fund Choice",
    description:
      "Administration of employee fund choice requirements, ensuring compliance with choice of fund legislation.",
  },
];

const compliancePoints = [
  {
    title: "Super Guarantee Rate",
    description: "We apply the current superannuation guarantee rate to eligible earnings, updating our calculations when rates change.",
  },
  {
    title: "Quarterly Deadlines",
    description: "Contributions are processed to meet quarterly super guarantee deadlines, avoiding late payment charges and penalties.",
  },
  {
    title: "SuperStream Compliance",
    description: "All contributions are processed through SuperStream-compliant channels for electronic payments and data transmission.",
  },
  {
    title: "Employee Choice of Fund",
    description: "We manage the administrative requirements of employee choice of fund, ensuring contributions go to the correct fund.",
  },
];

const benefits = [
  "Meet all superannuation guarantee obligations",
  "Avoid penalties for late or incorrect contributions",
  "Simplified management of multiple funds",
  "Accurate record keeping for compliance",
  "Stay current with changing super rates",
  "Peace of mind knowing contributions are handled correctly",
  "Quarterly deadline monitoring",
  "Complete audit trail for all contributions",
];

const faqs = [
  {
    question: "How do you calculate superannuation contributions?",
    answer: "We calculate super on ordinary time earnings at the current super guarantee rate. This includes base salary, some allowances, and other earnings as defined by the ATO. We ensure calculations align with current legislation.",
  },
  {
    question: "What if an employee changes their super fund?",
    answer: "When an employee submits a valid choice of fund form, we update their records and direct future contributions to their chosen fund. We handle the administrative process of switching funds.",
  },
  {
    question: "How do you ensure contributions are paid on time?",
    answer: "We monitor quarterly deadlines and process contributions with sufficient time for payments to clear before the due date. You will receive reminders about upcoming deadlines and confirmation when payments are made.",
  },
  {
    question: "Can you help if we have overdue super contributions?",
    answer: "We can advise on addressing overdue contributions and help ensure future payments are compliant. Historical super issues may require specific steps to rectify, and we can guide you through the process.",
  },
];

export default function SuperannuationProcessingPage() {
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
                Superannuation Processing
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Compliant superannuation contributions management, ensuring your 
                employees&apos; retirement funds are processed correctly and on time.
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
                  Compliant Superannuation Management
                </h2>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  Superannuation is a critical component of Australian employment law. Our 
                  superannuation processing service ensures that your business meets all 
                  legal obligations while your employees&apos; retirement funds are handled 
                  correctly.
                </p>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  We calculate contributions accurately based on the current superannuation 
                  guarantee rate and each employee&apos;s ordinary time earnings. Contributions 
                  are processed and remitted to the appropriate funds within required timeframes.
                </p>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  Our team stays informed about changes to superannuation legislation and 
                  rates, ensuring your contributions remain compliant as regulations evolve. 
                  When the super guarantee rate changes, we update our calculations automatically.
                </p>
                <p className="text-muted text-lg leading-relaxed">
                  With ReliablePay managing your superannuation, you can be confident that 
                  contributions are calculated correctly, paid on time, and properly documented.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-card-bg rounded-2xl p-8 border border-border">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Why Choose Our Service
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
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
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Compliance Covered
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                We handle the complexities of superannuation compliance so you do not have to worry.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {compliancePoints.map((point, index) => (
              <AnimatedSection key={point.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-border h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                        {point.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What We Handle
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Complete superannuation processing to meet your compliance obligations.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="bg-card-bg rounded-xl p-6 border border-border h-full hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-primary"
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
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
                Quarterly Deadlines We Monitor
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Super guarantee contributions must be paid by these dates each year.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { quarter: "Q1", period: "July - September", deadline: "28 October" },
              { quarter: "Q2", period: "October - December", deadline: "28 January" },
              { quarter: "Q3", period: "January - March", deadline: "28 April" },
              { quarter: "Q4", period: "April - June", deadline: "28 July" },
            ].map((item, index) => (
              <AnimatedSection key={item.quarter} delay={index * 0.1}>
                <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="text-3xl font-heading font-bold text-white mb-2">
                    {item.quarter}
                  </div>
                  <div className="text-white/70 text-sm mb-3">{item.period}</div>
                  <div className="text-white font-medium">Due: {item.deadline}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <p className="text-center text-white/60 text-sm mt-8">
              We process contributions ahead of these deadlines to ensure timely payment.
            </p>
          </AnimatedSection>
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
                Common questions about superannuation processing.
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
              { title: "Compliance & Reporting", href: "/services/payroll-compliance" },
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
              Ensure Compliant Super Contributions
            </h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              Contact us to discuss how we can help manage your superannuation obligations 
              accurately and on time.
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
