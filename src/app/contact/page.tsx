import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - ReliablePay",
  description:
    "Get in touch with ReliablePay for professional payroll and payment solutions. We are here to help your business.",
};

const contactInfo = [
  {
    title: "Email",
    value: "info@reliablepay.com.au",
    href: "mailto:info@reliablepay.com.au",
    description: "Send us an email anytime",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Location",
    value: "New South Wales, Australia",
    href: null,
    description: "Australian-based services",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const reasons = [
  {
    title: "Quick Response",
    description: "We aim to respond to all enquiries within one business day.",
  },
  {
    title: "No Obligation",
    description: "Initial consultations are completely free with no commitment required.",
  },
  {
    title: "Tailored Solutions",
    description: "We take time to understand your specific needs before proposing solutions.",
  },
  {
    title: "Expert Advice",
    description: "Get insights from experienced payroll professionals who understand Australian requirements.",
  },
];

const faqs = [
  {
    question: "What information should I prepare before contacting you?",
    answer: "It helps to have an idea of your employee count, current pay cycle frequency, and any specific payroll challenges you are facing. However, you can reach out at any stage, and we will guide you through the process.",
  },
  {
    question: "How quickly can you set up our payroll?",
    answer: "Setup time depends on the complexity of your payroll requirements. For straightforward setups, we can typically be processing your payroll within one to two weeks. More complex arrangements may take longer to ensure everything is configured correctly.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, ongoing support is included with all our services. You will have a dedicated point of contact for any questions or issues that arise during regular payroll processing.",
  },
  {
    question: "Can you help with historical payroll issues?",
    answer: "We can certainly discuss historical payroll matters and advise on how to address them. Contact us with the details, and we will let you know how we can assist.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Have questions about our payroll services? We are here to help. 
                Reach out to us and our team will get back to you promptly to discuss 
                how we can support your business.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <AnimatedSection>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-6 mb-12">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted uppercase tracking-wider mb-1">
                          {info.title}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                        <p className="text-muted text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-card-bg rounded-xl border border-border mb-8">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted">Monday - Friday</span>
                      <span className="text-foreground font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Saturday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted mt-4">
                    Australian Eastern Standard Time (AEST)
                  </p>
                </div>

                <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    Prefer Email?
                  </h3>
                  <p className="text-muted text-sm mb-4">
                    Send us a direct email at any time and we will respond as soon as possible.
                  </p>
                  <a
                    href="mailto:info@reliablepay.com.au"
                    className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors text-sm"
                  >
                    info@reliablepay.com.au
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-border">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted mb-8">
                    Fill out the form below and we will get back to you as soon as possible. 
                    All enquiries are treated confidentially.
                  </p>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-20 lg:py-28 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Reach Out?
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Whether you are exploring options or ready to get started, we are here to help.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <AnimatedSection key={reason.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted text-sm">{reason.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  What to Expect
                </h2>
                <p className="text-muted text-lg mb-8 leading-relaxed">
                  When you contact us, here is what happens next:
                </p>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "We Receive Your Enquiry",
                      description: "Your message comes directly to our team for review.",
                    },
                    {
                      step: "2",
                      title: "We Review Your Needs",
                      description: "We take time to understand your situation before responding.",
                    },
                    {
                      step: "3",
                      title: "We Respond Promptly",
                      description: "You will hear back from us within one business day.",
                    },
                    {
                      step: "4",
                      title: "We Discuss Options",
                      description: "We can arrange a call to discuss your requirements in detail.",
                    },
                  ].map((item, index) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-heading font-bold">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-primary rounded-2xl p-8 lg:p-10 text-white">
                <h3 className="font-heading text-2xl font-semibold mb-6">
                  Ready to Simplify Your Payroll?
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Join businesses across Australia who trust ReliablePay for their 
                  payroll needs. We are ready to help you streamline your payroll 
                  operations and ensure compliance.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Free initial consultation",
                    "Tailored service recommendations",
                    "Clear pricing with no hidden fees",
                    "Smooth transition process",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:info@reliablepay.com.au"
                  className="inline-flex items-center justify-center w-full bg-white text-primary py-4 rounded-lg font-semibold transition-all hover:bg-white/90"
                >
                  Email Us Now
                </a>
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
                Common Questions
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Answers to questions we often receive from new enquiries.
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

      {/* Company Info Section */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                Company Information
              </h3>
              <p className="text-muted">
                <strong className="text-foreground">Reliable Pay Solutions Pty Ltd</strong>
              </p>
              <p className="text-muted mt-2">
                ABN: 63 693 215 011 | ACN: 693 215 011
              </p>
              <p className="text-muted mt-1">
                New South Wales, Australia
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
