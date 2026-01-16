import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Payroll Outsourcing - ReliablePay",
  description:
    "Complete payroll outsourcing solutions for Australian businesses. Let us handle your entire payroll process professionally.",
};

const features = [
  {
    title: "Full Payroll Management",
    description:
      "End-to-end management of your entire payroll process, from data collection to payment disbursement and everything in between.",
  },
  {
    title: "Employee Onboarding Support",
    description:
      "Assistance with payroll-related aspects of bringing new employees into your organisation, including tax declarations and super fund setup.",
  },
  {
    title: "Dedicated Payroll Specialists",
    description:
      "Access to experienced payroll professionals who understand your business needs and provide personalised support.",
  },
  {
    title: "Custom Reporting Solutions",
    description:
      "Tailored payroll reports designed to give you the insights your business needs for management and planning.",
  },
  {
    title: "Scalable Services",
    description:
      "Flexible solutions that grow with your business, easily adapting to changing employee numbers and requirements.",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "Reduce the overhead of managing payroll in-house with our efficient outsourcing services and transparent pricing.",
  },
];

const inclusions = [
  "Complete payroll processing each pay cycle",
  "Salary and wage calculations",
  "Tax withholding and deduction management",
  "Superannuation contribution processing",
  "Single Touch Payroll compliance",
  "Pay slip generation and distribution",
  "Payment disbursement to employees",
  "Leave management and tracking",
  "End of financial year processing",
  "Payroll reporting and documentation",
  "Ongoing compliance monitoring",
  "Dedicated support contact",
];

const benefits = [
  {
    title: "Focus on Core Business",
    description: "Free up time and resources to concentrate on what your business does best.",
  },
  {
    title: "Reduce Errors",
    description: "Professional processing reduces the risk of costly payroll mistakes.",
  },
  {
    title: "Access Expertise",
    description: "Benefit from payroll specialists without hiring in-house.",
  },
  {
    title: "Stay Compliant",
    description: "Ongoing compliance monitoring keeps you on the right side of regulations.",
  },
  {
    title: "Save Costs",
    description: "Eliminate software, training, and staffing costs associated with in-house payroll.",
  },
  {
    title: "Scale Easily",
    description: "Your payroll service grows with your business without additional investment.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Discovery",
    description: "We learn about your business, current payroll setup, and specific requirements.",
  },
  {
    step: "2",
    title: "Setup",
    description: "Our team configures your payroll, imports data, and establishes processes.",
  },
  {
    step: "3",
    title: "Transition",
    description: "We handle the transition smoothly, ensuring continuity for your employees.",
  },
  {
    step: "4",
    title: "Ongoing Service",
    description: "Regular payroll processing with dedicated support and continuous improvement.",
  },
];

const faqs = [
  {
    question: "What size businesses benefit from payroll outsourcing?",
    answer: "Businesses of all sizes can benefit from outsourcing. Small businesses gain access to professional expertise they might not otherwise afford, while larger businesses can reduce administrative overhead and focus on strategic priorities.",
  },
  {
    question: "How do we communicate each pay cycle?",
    answer: "We establish a clear process for receiving your payroll data each cycle. This might include timesheets, leave notifications, and any changes to employee details. We can adapt to your preferred communication methods.",
  },
  {
    question: "What happens to our existing payroll data?",
    answer: "We securely import your existing payroll data during the setup process. This includes employee details, year-to-date figures, and leave balances to ensure continuity.",
  },
  {
    question: "Can we still access payroll information?",
    answer: "Absolutely. You retain full visibility of your payroll data. We provide regular reports and can give you access to information whenever you need it.",
  },
  {
    question: "What if we want to bring payroll back in-house later?",
    answer: "If your circumstances change, we can assist with transitioning payroll back to your in-house management, ensuring a smooth handover of data and processes.",
  },
];

export default function PayrollOutsourcingPage() {
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
                Payroll Outsourcing
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Complete payroll outsourcing solutions that let you focus on your core 
                business while we handle all payroll-related tasks professionally.
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
                  Let Us Handle Your Payroll
                </h2>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  Running payroll in-house can be time-consuming and complex. Our payroll 
                  outsourcing service takes the entire burden off your shoulders, allowing 
                  you to focus on what you do best, running your business.
                </p>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  When you outsource your payroll to ReliablePay, you get a comprehensive 
                  service that covers everything from calculating pay to ensuring compliance. 
                  We become an extension of your team, handling payroll with the same care 
                  and attention as if it were our own.
                </p>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  Our solutions are designed to be flexible and scalable, making them 
                  suitable for businesses of various sizes and industries. Whether you have 
                  five employees or fifty, we can handle your payroll professionally.
                </p>
                <p className="text-muted text-lg leading-relaxed">
                  With ReliablePay as your payroll partner, you gain peace of mind knowing 
                  that your employees will be paid correctly, on time, and in compliance 
                  with all Australian regulations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-card-bg rounded-2xl p-8 border border-border">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Service Features
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

      {/* What's Included Section */}
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What&apos;s Included
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Our comprehensive payroll outsourcing service covers all aspects of payroll management.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-2xl p-8 lg:p-12 border border-border">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inclusions.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
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
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Benefits of Outsourcing
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Discover why businesses choose to outsource their payroll to ReliablePay.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
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
                    {benefit.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
                The Transition Process
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Moving your payroll to ReliablePay is straightforward and stress-free.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-heading font-bold text-2xl">{step.step}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Is Outsourcing Right Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Is Outsourcing Right for You?
                </h2>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  Payroll outsourcing can benefit businesses in many situations. Consider 
                  outsourcing if you:
                </p>
                <ul className="space-y-4">
                  {[
                    "Spend too much time on payroll administration",
                    "Worry about keeping up with regulatory changes",
                    "Want to reduce payroll errors and risks",
                    "Need to focus resources on core business activities",
                    "Are growing and need scalable solutions",
                    "Want access to payroll expertise without hiring",
                    "Find in-house payroll software costly to maintain",
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
                  Ready to Make the Switch?
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Many businesses are surprised by how easy the transition to outsourced 
                  payroll can be. We handle the heavy lifting, ensuring a smooth changeover 
                  with minimal disruption to your operations.
                </p>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Contact us to discuss your specific needs and how our payroll outsourcing 
                  service can support your business.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full bg-white text-primary py-4 rounded-lg font-semibold transition-all hover:bg-white/90"
                >
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>
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
                Common questions about payroll outsourcing.
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
              { title: "Payroll Processing", href: "/services/payroll-processing" },
              { title: "Salary Disbursement", href: "/services/salary-disbursement" },
              { title: "Superannuation Processing", href: "/services/superannuation-processing" },
              { title: "Compliance & Reporting", href: "/services/payroll-compliance" },
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
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Outsource Your Payroll?
            </h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our payroll outsourcing service can help your business 
              save time, reduce risk, and focus on growth.
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
