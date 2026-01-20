import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Salary & Wage Disbursement",
  description:
    "Secure salary and wage disbursement services for Australian businesses. Direct bank transfers, scheduled payments, and reliable payment processing for employees.",
  alternates: {
    canonical: "https://reliablepay.com.au/services/salary-disbursement",
  },
  openGraph: {
    title: "Salary & Wage Disbursement - ReliablePay",
    description:
      "Secure salary and wage disbursement services for Australian businesses. Direct bank transfers, scheduled payments, and reliable payment processing for employees.",
    url: "https://reliablepay.com.au/services/salary-disbursement",
  },
};

const features = [
  {
    title: "Direct Bank Transfers",
    description:
      "Secure electronic funds transfer directly to employee bank accounts across all major Australian banks, ensuring reliable payment delivery.",
  },
  {
    title: "Scheduled Payments",
    description:
      "Automated payment scheduling aligned with your pay cycle to ensure timely disbursement every time, with flexibility for your business needs.",
  },
  {
    title: "Multi-Account Disbursements",
    description:
      "Support for split payments across multiple accounts as requested by employees, accommodating various payment preferences.",
  },
  {
    title: "Payment Confirmation",
    description:
      "Tracking and confirmation of all payments with detailed reporting for your records, providing complete visibility of payment status.",
  },
  {
    title: "Secure Processing",
    description:
      "Bank-grade security protocols to protect all financial transactions and employee data throughout the payment process.",
  },
  {
    title: "Reconciliation Support",
    description:
      "Detailed reconciliation reports to help you track and verify all salary disbursements against your payroll records.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Payroll Finalisation",
    description: "Once payroll is processed and approved, payment files are prepared for disbursement.",
  },
  {
    step: "2",
    title: "Payment Scheduling",
    description: "Payments are scheduled according to your pay date, with funds transferred securely.",
  },
  {
    step: "3",
    title: "Bank Processing",
    description: "Electronic transfers are processed through secure banking channels to employee accounts.",
  },
  {
    step: "4",
    title: "Confirmation",
    description: "Payment confirmations are tracked, and you receive detailed reports of all disbursements.",
  },
];

const benefits = [
  "Employees receive payments on time, every time",
  "Secure handling of all financial transactions",
  "Reduced administrative workload for your team",
  "Complete audit trail for all payments",
  "Flexibility to accommodate various payment requirements",
  "Professional handling of payment exceptions",
  "Support for all major Australian banks",
  "Detailed reporting and reconciliation",
];

const faqs = [
  {
    question: "How do you ensure payments arrive on time?",
    answer: "We schedule payments to align with your designated pay date, processing transfers with sufficient lead time to ensure funds arrive when expected. We monitor payment processing and can advise on any banking system delays that may affect timing.",
  },
  {
    question: "Can employees split payments across multiple accounts?",
    answer: "Yes, we can accommodate split payments where employees want a portion of their salary paid to different bank accounts, such as a savings account and everyday account.",
  },
  {
    question: "What security measures protect payment data?",
    answer: "We use encrypted connections for all payment processing, strict access controls, and secure banking channels. Payment data is handled with the same level of security as the banking industry requires.",
  },
  {
    question: "How are failed payments handled?",
    answer: "If a payment fails due to incorrect bank details or other issues, we are notified promptly and work with you to resolve the issue. We can reprocess payments once correct details are provided.",
  },
];

export default function SalaryDisbursementPage() {
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
                Salary & Wage Disbursement
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Secure and efficient salary disbursement services ensuring your team 
                receives their wages on time through reliable payment channels.
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
                  Timely and Secure Payment Processing
                </h2>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  Our salary and wage disbursement service ensures that your employees 
                  receive their payments accurately and on schedule. We handle the entire 
                  payment process from calculation to disbursement, so you can focus on 
                  running your business.
                </p>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  With secure electronic funds transfer capabilities, we process payments 
                  to employee bank accounts efficiently and reliably. Our systems are 
                  designed to handle various payment scenarios, from standard salary 
                  payments to more complex arrangements.
                </p>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  Every payment is tracked and confirmed, providing you with complete 
                  visibility and a clear audit trail for your records. You will always 
                  know the status of your payroll disbursements.
                </p>
                <p className="text-muted text-lg leading-relaxed">
                  Our team ensures that payments are processed on time, every time, 
                  giving your employees confidence that they can rely on receiving 
                  their wages when expected.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-card-bg rounded-2xl p-8 border border-border">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Benefits of Our Service
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
                The Disbursement Process
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                From payroll approval to payment confirmation, every step is handled with care.
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
                Service Features
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Comprehensive payment disbursement capabilities to meet your business needs.
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

      {/* Security Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                  Security You Can Trust
                </h2>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  We understand that salary payments involve sensitive financial data. 
                  That is why we implement comprehensive security measures at every 
                  stage of the disbursement process.
                </p>
                <ul className="space-y-4">
                  {[
                    "Encrypted payment processing",
                    "Secure banking integrations",
                    "Strict access controls",
                    "Complete audit trails",
                    "Data protection compliance",
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-4">
                    Secure by Design
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Our payment systems are built with security as a foundation, 
                    not an afterthought. Your employees payment data is protected 
                    at every step.
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
                Common questions about our salary disbursement service.
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
              { title: "Superannuation Processing", href: "/services/superannuation-processing" },
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
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ensure Timely Payments for Your Team
            </h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our salary and wage disbursement services.
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
