import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About ReliablePay - Professional Payroll Solutions",
  description:
    "Learn about ReliablePay and our commitment to providing reliable payroll and payment solutions for Australian businesses.",
};

const values = [
  {
    title: "Reliability",
    description:
      "We deliver consistent, dependable payroll services that you can count on. Every pay run, every time. Our commitment to reliability means your employees are always paid correctly and on schedule.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Accuracy",
    description:
      "Precision in every calculation. We ensure your payroll is processed correctly, reducing errors and issues. Our meticulous attention to detail protects both your business and your employees.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Professionalism",
    description:
      "We maintain the highest standards of professional conduct in all our interactions and services. Our team approaches every client relationship with integrity and expertise.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Client Focus",
    description:
      "Your business needs are our priority. We tailor our services to meet your specific requirements, ensuring solutions that work for your unique situation and goals.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const milestones = [
  {
    title: "Company Founded",
    description: "Reliable Pay Solutions Pty Ltd was established in New South Wales with a mission to provide dependable payroll services to Australian businesses.",
  },
  {
    title: "Service Expansion",
    description: "Expanded our service offering to include comprehensive superannuation processing and compliance reporting services.",
  },
  {
    title: "Technology Investment",
    description: "Invested in robust payroll systems and security infrastructure to ensure accurate, secure, and efficient processing.",
  },
  {
    title: "Continued Growth",
    description: "Continuing to grow and serve businesses across Australia with our full suite of payroll and payment solutions.",
  },
];

const teamApproach = [
  {
    title: "Expertise",
    description: "Our team brings deep knowledge of Australian payroll regulations, tax requirements, and compliance standards.",
  },
  {
    title: "Dedication",
    description: "We are committed to providing exceptional service and support to every client, regardless of size.",
  },
  {
    title: "Responsiveness",
    description: "Quick and helpful responses to your queries and concerns, ensuring you always have the support you need.",
  },
  {
    title: "Continuous Learning",
    description: "We stay updated on changes to legislation, tax rates, and best practices to serve you better.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                About ReliablePay
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Your trusted partner for payroll and payment solutions in Australia. 
                We are committed to delivering reliable, accurate, and compliant services 
                that help businesses focus on what they do best.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Who We Are
                </h2>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  Reliable Pay Solutions Pty Ltd, trading as ReliablePay, is an Australian 
                  company providing professional payroll and payment services to businesses 
                  across Australia. We were founded with a simple goal: to make payroll 
                  simpler, more accurate, and completely reliable.
                </p>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  We understand the complexities of Australian payroll, from tax obligations 
                  and superannuation requirements to compliance with workplace regulations. 
                  Our team is dedicated to helping businesses manage their payroll efficiently 
                  and accurately, giving business owners and managers peace of mind.
                </p>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  Based in New South Wales, we serve businesses of all sizes, providing 
                  scalable solutions that grow with your organisation. Whether you have a 
                  small team or a larger workforce, we have the expertise and systems to 
                  handle your payroll needs.
                </p>
                <p className="text-muted text-lg leading-relaxed">
                  Our approach is built on strong relationships with our clients. We take 
                  the time to understand your business, your industry, and your specific 
                  requirements to deliver a service that truly meets your needs.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card-bg rounded-2xl p-8 lg:p-10 border border-border">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Company Details
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted uppercase tracking-wider mb-1">
                      Legal Name
                    </p>
                    <p className="text-foreground font-medium text-lg">
                      Reliable Pay Solutions Pty Ltd
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted uppercase tracking-wider mb-1">ABN</p>
                    <p className="text-foreground font-medium text-lg">63 693 215 011</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted uppercase tracking-wider mb-1">ACN</p>
                    <p className="text-foreground font-medium text-lg">693 215 011</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted uppercase tracking-wider mb-1">
                      State of Registration
                    </p>
                    <p className="text-foreground font-medium text-lg">New South Wales</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted uppercase tracking-wider mb-1">
                      Country
                    </p>
                    <p className="text-foreground font-medium text-lg">Australia</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a 
                      href="mailto:info@reliablepay.com.au"
                      className="text-primary hover:text-primary-dark font-medium text-lg transition-colors"
                    >
                      info@reliablepay.com.au
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                To provide Australian businesses with payroll and payment services they can 
                rely on completely. We aim to remove the complexity and stress from payroll 
                management, allowing our clients to focus their energy on growing their 
                businesses and serving their customers.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Every day, we work towards this mission by delivering accurate, timely, and 
                compliant payroll services backed by genuine care for our clients and their 
                employees.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                The principles that guide everything we do at ReliablePay.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Key milestones in our development as a trusted payroll partner.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <AnimatedSection key={milestone.title} delay={index * 0.1}>
                    <div className="relative flex gap-8">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 z-10">
                        <span className="text-white font-heading font-bold text-lg">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="pt-3">
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Approach Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Approach
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                What sets our team apart in delivering exceptional payroll services.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamApproach.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-primary font-heading font-bold text-2xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What We Do
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                We provide comprehensive payroll and payment solutions to support 
                Australian businesses.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Payroll Processing",
                description: "Complete payroll calculation and processing services for accurate employee payments",
                href: "/services/payroll-processing",
              },
              {
                title: "Salary & Wage Disbursement",
                description: "Secure and timely payment of employee wages through reliable channels",
                href: "/services/salary-disbursement",
              },
              {
                title: "Superannuation Processing",
                description: "Compliant super contribution management and fund payments",
                href: "/services/superannuation-processing",
              },
              {
                title: "Payroll Compliance & Reporting",
                description: "Ensuring adherence to Australian regulations and accurate reporting",
                href: "/services/payroll-compliance",
              },
              {
                title: "Payroll Outsourcing",
                description: "Full-service payroll management solutions for complete peace of mind",
                href: "/services/payroll-outsourcing",
              },
            ].map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Link href={service.href} className="block group">
                  <div className="bg-white rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg
                          className="w-5 h-5 text-white"
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
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                View all our services
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
              Partner with ReliablePay
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let us help you simplify your payroll operations. Contact us today to 
              discuss how we can support your business with reliable, accurate payroll services.
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
                Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
