import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive payroll services for Australian businesses: payroll processing, salary disbursement, superannuation, STP compliance, and complete payroll outsourcing.",
  alternates: {
    canonical: "https://reliablepay.com.au/services",
  },
  openGraph: {
    title: "Payroll Services - ReliablePay",
    description:
      "Comprehensive payroll services for Australian businesses: payroll processing, salary disbursement, superannuation, STP compliance, and complete payroll outsourcing.",
    url: "https://reliablepay.com.au/services",
  },
};

const services = [
  {
    id: "payroll-processing",
    href: "/services/payroll-processing",
    title: "Payroll Processing",
    description:
      "Our payroll processing service handles all aspects of calculating and processing employee payments. We ensure accurate calculations for wages, overtime, bonuses, and deductions, giving you confidence that your team is paid correctly.",
    features: [
      "Accurate salary and wage calculations",
      "Overtime and allowance processing",
      "Tax withholding calculations",
      "Leave entitlement tracking",
      "Pay slip generation",
      "Payment scheduling and processing",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "salary-disbursement",
    href: "/services/salary-disbursement",
    title: "Salary & Wage Disbursement",
    description:
      "Secure and timely disbursement of salaries and wages to your employees. We handle the entire payment process, ensuring funds reach your team on schedule through reliable and secure payment channels.",
    features: [
      "Direct bank transfers",
      "Scheduled payment processing",
      "Multi-account disbursements",
      "Payment confirmation tracking",
      "Secure transaction processing",
      "Reconciliation reporting",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: "superannuation",
    href: "/services/superannuation-processing",
    title: "Superannuation Processing",
    description:
      "Compliant superannuation contributions management. We ensure your employees' retirement funds are processed correctly and on time, meeting all regulatory requirements and contribution deadlines.",
    features: [
      "Superannuation calculation",
      "Fund contribution processing",
      "Multiple fund management",
      "Compliance with super guarantee",
      "Quarterly reporting",
      "Employee fund choice management",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "compliance",
    href: "/services/payroll-compliance",
    title: "Payroll Compliance & Reporting",
    description:
      "Stay compliant with Australian payroll regulations. Our comprehensive reporting and compliance services ensure you meet all legal requirements and deadlines, from Single Touch Payroll to Fair Work obligations.",
    features: [
      "Tax reporting and lodgement",
      "Single Touch Payroll compliance",
      "Award interpretation",
      "Record keeping",
      "End of year processing",
      "Audit support and documentation",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "outsourcing",
    href: "/services/payroll-outsourcing",
    title: "Payroll Outsourcing",
    description:
      "Complete payroll outsourcing solutions that let you focus on your core business. We take full responsibility for all payroll-related tasks, providing end-to-end management and dedicated support.",
    features: [
      "Full payroll management",
      "Employee onboarding support",
      "Dedicated payroll specialists",
      "Custom reporting solutions",
      "Scalable services",
      "Cost-effective solutions",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Accuracy Guaranteed",
    description: "Our meticulous processes ensure every calculation is correct, protecting both your business and employees.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Time Savings",
    description: "Free up valuable hours by letting us handle the complexities of payroll processing.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Compliance Confidence",
    description: "Stay on top of changing regulations with our compliance-focused approach to payroll.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Scalable Solutions",
    description: "Our services grow with your business, adapting to your changing needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    description: "Access experienced payroll professionals who understand your business.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Secure Processing",
    description: "Your data is protected with robust security measures throughout the payroll process.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const industries = [
  "Retail & Hospitality",
  "Professional Services",
  "Healthcare",
  "Construction & Trades",
  "Manufacturing",
  "Not-for-Profit",
  "Education",
  "Technology",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Comprehensive payroll and payment solutions designed to meet the needs 
                of Australian businesses. From processing to compliance, we provide 
                reliable services you can count on.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-card-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.05}>
                <Link
                  href={service.href}
                  className="block p-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group"
                >
                  <div className="text-primary mb-2 flex justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Services
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Every service we offer is designed to deliver real benefits to your business.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Detailed Service Overview
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Explore each of our services in detail to find the right solution for your business.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-16">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <div
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="text-primary mb-6">{service.icon}</div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
                    >
                      Learn More
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
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
                      <h4 className="font-heading text-lg font-semibold text-foreground mb-6">
                        Key Features
                      </h4>
                      <ul className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
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
                            <span className="text-foreground">{feature}</span>
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

      {/* Industries Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Industries We Serve
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Our services are suitable for businesses across a wide range of industries.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <div
                  key={industry}
                  className="px-6 py-3 bg-card-bg rounded-full border border-border text-foreground font-medium"
                >
                  {industry}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-center text-muted mt-8">
              Do not see your industry listed? Contact us to discuss your specific requirements.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Getting Started is Easy
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                We make the transition to ReliablePay simple and straightforward.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Contact Us", description: "Reach out to discuss your payroll needs and requirements." },
              { step: "2", title: "Consultation", description: "We review your current setup and propose a tailored solution." },
              { step: "3", title: "Onboarding", description: "Our team sets up your payroll and imports your data securely." },
              { step: "4", title: "Go Live", description: "We start processing your payroll with ongoing support." },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-heading font-bold text-2xl">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm">{item.description}</p>
                </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your payroll needs and discover how ReliablePay 
              can support your business with reliable, accurate payroll services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white/90 hover:shadow-xl"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white/10 hover:border-white/50"
              >
                About ReliablePay
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
