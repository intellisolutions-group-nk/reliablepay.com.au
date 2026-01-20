import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Payroll Processing Services",
  description:
    "Professional payroll processing for Australian businesses. Accurate salary calculations, tax withholding, leave management, and timely payments every pay cycle.",
  alternates: {
    canonical: "https://reliablepay.com.au/services/payroll-processing",
  },
  openGraph: {
    title: "Payroll Processing Services - ReliablePay",
    description:
      "Professional payroll processing for Australian businesses. Accurate salary calculations, tax withholding, leave management, and timely payments every pay cycle.",
    url: "https://reliablepay.com.au/services/payroll-processing",
  },
};

const features = [
  {
    title: "Accurate Salary & Wage Calculations",
    description:
      "Precise calculations for all employee payments including base wages, overtime, allowances, and penalty rates. We ensure every dollar is calculated correctly.",
  },
  {
    title: "Tax Withholding Management",
    description:
      "Correct PAYG withholding calculations based on current tax tables and employee tax declarations. We stay updated with ATO requirements.",
  },
  {
    title: "Leave Entitlement Tracking",
    description:
      "Accurate tracking and calculation of annual leave, personal leave, long service leave, and other leave entitlements as per Fair Work requirements.",
  },
  {
    title: "Deduction Processing",
    description:
      "Management of salary sacrificing, union fees, child support, and other authorised payroll deductions with complete accuracy.",
  },
  {
    title: "Pay Slip Generation",
    description:
      "Detailed, compliant pay slips provided to employees with every pay cycle, meeting all legal requirements for payroll documentation.",
  },
  {
    title: "Payment Scheduling",
    description:
      "Flexible payment scheduling to match your pay cycle requirements, whether weekly, fortnightly, or monthly processing.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Data Collection",
    description: "We receive your timesheet data, leave requests, and any changes to employee details for the pay period.",
  },
  {
    step: "2",
    title: "Processing",
    description: "Our team calculates wages, applies tax withholding, processes deductions, and calculates leave accruals.",
  },
  {
    step: "3",
    title: "Review & Approval",
    description: "You receive a summary for review before we finalise the pay run and schedule payments.",
  },
  {
    step: "4",
    title: "Payment & Reporting",
    description: "Payments are disbursed to employees, pay slips are generated, and compliance reporting is completed.",
  },
];

const benefits = [
  "Reduce administrative burden on your team",
  "Minimise payroll errors and discrepancies",
  "Ensure employees are paid correctly and on time",
  "Stay compliant with Australian payroll regulations",
  "Access professional payroll expertise",
  "Scalable solutions as your business grows",
  "Detailed reporting for your records",
  "Dedicated support when you need it",
];

const faqs = [
  {
    question: "What information do you need from us each pay cycle?",
    answer: "Typically, we need timesheet data, any leave taken or requested, new employee details, and any changes to existing employee information such as pay rate changes or bank details.",
  },
  {
    question: "How do you handle different pay rates and allowances?",
    answer: "Our systems can accommodate multiple pay rates, shift loadings, allowances, and penalty rates. We configure these during onboarding based on your specific award or enterprise agreement requirements.",
  },
  {
    question: "What happens if there is an error in payroll?",
    answer: "While our processes are designed to minimise errors, if one occurs, we work quickly to rectify it. We can process correction payments as needed and ensure records are updated accurately.",
  },
  {
    question: "Can you handle payroll for employees in different states?",
    answer: "Yes, we can process payroll for employees across all Australian states and territories, applying the correct state-based requirements where applicable.",
  },
];

export default function PayrollProcessingPage() {
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
                Payroll Processing
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Comprehensive payroll processing services that handle all aspects of 
                calculating and processing employee payments accurately and on time.
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
                  Accurate and Reliable Payroll Processing
                </h2>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  Our payroll processing service takes the complexity out of paying your 
                  employees. We handle everything from calculating wages and deductions to 
                  ensuring compliance with Australian tax and employment regulations.
                </p>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  Whether you have a small team or a larger workforce, our payroll processing 
                  solutions are designed to deliver accurate results every pay cycle, giving 
                  you peace of mind and freeing up your time to focus on your core business.
                </p>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  We stay up to date with changes to tax rates, superannuation requirements, 
                  and employment legislation to ensure your payroll remains compliant. Our 
                  team monitors regulatory updates so you do not have to.
                </p>
                <p className="text-muted text-lg leading-relaxed">
                  With ReliablePay handling your payroll processing, you can trust that your 
                  employees will be paid correctly and on time, every single pay period.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-card-bg rounded-2xl p-8 border border-border">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Why Choose Our Payroll Processing
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

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How Our Processing Works
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                A streamlined process designed for accuracy and efficiency.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-heading font-bold text-2xl">{step.step}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
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
                Our payroll processing service covers all essential aspects of paying your employees.
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

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Common questions about our payroll processing service.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-border">
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
      <section className="py-20 lg:py-28">
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
              { title: "Salary Disbursement", href: "/services/salary-disbursement" },
              { title: "Superannuation Processing", href: "/services/superannuation-processing" },
              { title: "Compliance & Reporting", href: "/services/payroll-compliance" },
              { title: "Payroll Outsourcing", href: "/services/payroll-outsourcing" },
            ].map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Link
                  href={service.href}
                  className="block p-6 bg-card-bg rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
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
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Simplify Your Payroll?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our payroll processing services can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white/90 hover:shadow-xl"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white/10 hover:border-white/50"
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
