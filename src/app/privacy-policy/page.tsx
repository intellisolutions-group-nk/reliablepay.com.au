import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "ReliablePay privacy policy. Learn how Reliable Pay Solutions Pty Ltd collects, uses, and protects your personal information in accordance with Australian privacy laws.",
  alternates: {
    canonical: "https://reliablepay.com.au/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-white/80">
                Reliable Pay Solutions Pty Ltd (ABN 63 693 215 011)
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              <div className="space-y-12">
                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    1. Introduction
                  </h2>
                  <p className="text-muted leading-relaxed">
                    Reliable Pay Solutions Pty Ltd, trading as ReliablePay, is committed to 
                    protecting your privacy. This Privacy Policy explains how we collect, use, 
                    disclose, and handle your personal information in accordance with the 
                    Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    2. Information We Collect
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    We may collect the following types of personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted">
                    <li>Name and contact details (email address, phone number, address)</li>
                    <li>Business information (company name, ABN, business address)</li>
                    <li>Employee information for payroll processing purposes</li>
                    <li>Financial information required for payment processing</li>
                    <li>Tax file numbers and superannuation details</li>
                    <li>Information provided through our website or contact forms</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    3. How We Collect Information
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    We collect personal information through:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted">
                    <li>Direct communication with you or your business</li>
                    <li>Our website contact forms and enquiry submissions</li>
                    <li>Service agreements and contracts</li>
                    <li>Payroll data provided by your business</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    4. Purpose of Collection
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    We collect and use personal information for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted">
                    <li>To provide payroll and payment services</li>
                    <li>To process salary and wage disbursements</li>
                    <li>To manage superannuation contributions</li>
                    <li>To comply with legal and regulatory requirements</li>
                    <li>To communicate with you about our services</li>
                    <li>To respond to enquiries and provide support</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    5. Disclosure of Information
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    We may disclose personal information to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted">
                    <li>The Australian Taxation Office for tax reporting purposes</li>
                    <li>Superannuation funds for contribution processing</li>
                    <li>Financial institutions for payment processing</li>
                    <li>Professional advisers as required</li>
                    <li>Government authorities as required by law</li>
                  </ul>
                  <p className="text-muted leading-relaxed mt-4">
                    We do not sell or rent personal information to third parties for marketing purposes.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    6. Data Security
                  </h2>
                  <p className="text-muted leading-relaxed">
                    We take reasonable steps to protect personal information from misuse, 
                    interference, loss, unauthorised access, modification, or disclosure. 
                    This includes implementing appropriate security measures for our systems 
                    and processes.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    7. Access and Correction
                  </h2>
                  <p className="text-muted leading-relaxed">
                    You have the right to request access to the personal information we hold 
                    about you and to request corrections if the information is inaccurate, 
                    incomplete, or out of date. To make a request, please contact us using 
                    the details provided below.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    8. Data Retention
                  </h2>
                  <p className="text-muted leading-relaxed">
                    We retain personal information for as long as necessary to fulfil the 
                    purposes for which it was collected, or as required by law. Payroll 
                    records are retained in accordance with Australian legal requirements.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    9. Cookies and Website Analytics
                  </h2>
                  <p className="text-muted leading-relaxed">
                    Our website may use cookies and similar technologies to improve your 
                    browsing experience. You can adjust your browser settings to refuse 
                    cookies, though this may affect website functionality.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    10. Changes to This Policy
                  </h2>
                  <p className="text-muted leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will 
                    be posted on our website. We encourage you to review this policy 
                    periodically.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    11. Contact Us
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or wish to make a 
                    complaint about our handling of your personal information, please 
                    contact us:
                  </p>
                  <div className="bg-card-bg rounded-xl p-6 border border-border">
                    <p className="text-foreground font-medium">Reliable Pay Solutions Pty Ltd</p>
                    <p className="text-muted">ABN: 63 693 215 011</p>
                    <p className="text-muted">Email: info@reliablepay.com.au</p>
                    <p className="text-muted">Location: New South Wales, Australia</p>
                  </div>
                </section>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
