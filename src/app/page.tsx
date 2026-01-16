import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Payroll Processing",
    description:
      "Accurate and timely payroll processing that ensures your employees are paid correctly, every time. We handle all calculations, deductions, and payments.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Salary & Wage Disbursement",
    description:
      "Secure and efficient salary disbursement services ensuring your team receives their wages on time through reliable payment channels.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Superannuation Processing",
    description:
      "Compliant superannuation processing and contributions management, ensuring your employees' retirement funds are handled properly.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Payroll Compliance & Reporting",
    description:
      "Stay compliant with Australian payroll regulations. We provide comprehensive reporting and ensure adherence to all legal requirements.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Payroll Outsourcing",
    description:
      "Complete payroll outsourcing solutions that let you focus on your core business while we handle all payroll-related tasks professionally.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Australian-Based",
    description: "Locally operated, understanding Australian business needs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Accurate Processing",
    description: "Precise calculations ensuring error-free payroll every time",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Timely Delivery",
    description: "On-time processing and payments, every pay cycle",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    description: "Responsive team ready to assist with your payroll needs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We begin by understanding your business, payroll requirements, and specific needs to tailor our services accordingly.",
  },
  {
    step: "02",
    title: "Setup & Onboarding",
    description: "Our team sets up your payroll system, imports employee data, and configures all necessary parameters for accurate processing.",
  },
  {
    step: "03",
    title: "Regular Processing",
    description: "Each pay cycle, we process your payroll accurately, handling all calculations, deductions, and compliance requirements.",
  },
  {
    step: "04",
    title: "Payment & Reporting",
    description: "Salaries are disbursed on time, and you receive comprehensive reports for your records and compliance needs.",
  },
];

const testimonials = [
  {
    quote: "ReliablePay has transformed how we handle payroll. The accuracy and timeliness have been exceptional, and their team is always responsive to our needs.",
    author: "Sarah Mitchell",
    role: "Finance Manager",
  },
  {
    quote: "Switching to ReliablePay was one of the best decisions we made. Their understanding of Australian payroll regulations gives us peace of mind.",
    author: "James Chen",
    role: "Business Owner",
  },
  {
    quote: "The level of service and attention to detail is outstanding. Our employees are paid correctly every time, and compliance is never an issue.",
    author: "Emma Thompson",
    role: "HR Director",
  },
];

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We work with Australian businesses of all sizes, from small enterprises to larger organisations. Our solutions are scalable to meet your specific needs.",
  },
  {
    question: "How do you ensure payroll accuracy?",
    answer: "We use robust systems and processes with multiple verification steps. Our team stays updated on tax rates, superannuation requirements, and employment regulations to ensure every calculation is correct.",
  },
  {
    question: "What is your turnaround time for payroll processing?",
    answer: "We work to your pay cycle schedule, whether weekly, fortnightly, or monthly. Payroll is processed and payments are scheduled to ensure employees are paid on time.",
  },
  {
    question: "How do you handle compliance requirements?",
    answer: "We manage Single Touch Payroll reporting, tax obligations, superannuation contributions, and other compliance requirements as part of our standard service.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <AnimatedSection>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Reliable Payroll Solutions for Australian Businesses
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Streamline your payroll operations with our comprehensive payment and payroll services. 
                We ensure accurate, timely, and compliant payroll processing for businesses across Australia.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white/90 hover:shadow-xl hover:shadow-black/10"
                >
                  Get Started
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white/10 hover:border-white/50"
                >
                  Our Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-card-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="text-primary flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-medium text-foreground text-sm lg:text-base">
                      {feature.title}
                    </h3>
                    <p className="text-muted text-xs lg:text-sm mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Comprehensive payroll and payment solutions tailored for Australian businesses of all sizes.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                Learn more about our services
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How We Work
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Our streamlined process ensures a smooth transition and ongoing excellence in payroll management.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <div className="relative">
                  <div className="text-6xl font-heading font-bold text-primary/10 mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Australian Businesses Choose ReliablePay
                </h2>
                <p className="text-muted text-lg mb-8 leading-relaxed">
                  We understand the unique challenges of Australian payroll. Our team brings expertise 
                  in local regulations, superannuation requirements, and compliance standards to ensure 
                  your payroll runs smoothly.
                </p>
                <ul className="space-y-4">
                  {[
                    "Accurate payroll calculations every time",
                    "Compliant with Australian payroll regulations",
                    "Secure handling of sensitive employee data",
                    "Dedicated support from experienced professionals",
                    "Scalable solutions for growing businesses",
                    "Transparent pricing with no hidden fees",
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
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-border">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Ready to streamline your payroll?
                </h3>
                <p className="text-muted mb-8">
                  Contact us today to discuss how ReliablePay can help your business with 
                  professional payroll and payment solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@reliablepay.com.au" className="text-foreground hover:text-primary transition-colors">
                      info@reliablepay.com.au
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-foreground">New South Wales, Australia</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 mt-8"
                >
                  Contact Us
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What Our Clients Say
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Hear from businesses who have experienced the ReliablePay difference.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.author} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border h-full flex flex-col">
                  <div className="text-primary mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-foreground leading-relaxed flex-grow mb-6">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-muted text-sm">{testimonial.role}</p>
                  </div>
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
                Find answers to common questions about our payroll services.
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

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <p className="text-muted mb-4">Have more questions?</p>
              <Link
                href="/contact"
                className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                Contact us for more information
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
              Let Us Handle Your Payroll
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Focus on what you do best while we take care of your payroll needs. 
              Get in touch to learn how we can support your business.
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
                View Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
