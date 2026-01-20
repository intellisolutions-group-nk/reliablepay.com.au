import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using ReliablePay services and website. Read before engaging Reliable Pay Solutions Pty Ltd for payroll services.",
  alternates: {
    canonical: "https://reliablepay.com.au/terms-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
                Terms & Conditions
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
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-muted leading-relaxed">
                    By accessing our website or using our services, you agree to be bound 
                    by these Terms and Conditions. If you do not agree with any part of 
                    these terms, please do not use our website or services.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    2. About Us
                  </h2>
                  <p className="text-muted leading-relaxed">
                    These terms apply to services provided by Reliable Pay Solutions Pty Ltd, 
                    trading as ReliablePay (ABN 63 693 215 011, ACN 693 215 011), a company 
                    registered in New South Wales, Australia.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    3. Services
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    We provide payroll and payment-related services including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted">
                    <li>Payroll Processing</li>
                    <li>Salary and Wage Disbursement</li>
                    <li>Superannuation Processing</li>
                    <li>Payroll Compliance and Reporting</li>
                    <li>Payroll Outsourcing</li>
                  </ul>
                  <p className="text-muted leading-relaxed mt-4">
                    Specific service terms may be outlined in individual service agreements.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    4. Client Responsibilities
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    Clients are responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted">
                    <li>Providing accurate and timely payroll information</li>
                    <li>Ensuring sufficient funds are available for payroll processing</li>
                    <li>Notifying us of any changes to employee details or payroll requirements</li>
                    <li>Maintaining appropriate authorisation for payroll deductions</li>
                    <li>Complying with applicable employment and tax laws</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    5. Accuracy of Information
                  </h2>
                  <p className="text-muted leading-relaxed">
                    While we take care to process payroll accurately, we rely on the 
                    information provided by clients. We are not responsible for errors 
                    resulting from incorrect or incomplete information provided to us.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    6. Confidentiality
                  </h2>
                  <p className="text-muted leading-relaxed">
                    We treat all client information as confidential and will not disclose 
                    it to third parties except as required to provide our services, as 
                    required by law, or with your consent.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    7. Fees and Payment
                  </h2>
                  <p className="text-muted leading-relaxed">
                    Service fees will be outlined in your service agreement. Payment terms 
                    and conditions will be specified in the relevant agreement or invoice. 
                    We reserve the right to suspend services for overdue accounts.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    8. Limitation of Liability
                  </h2>
                  <p className="text-muted leading-relaxed">
                    To the maximum extent permitted by law, our liability for any claim 
                    arising from our services is limited to the fees paid for the relevant 
                    service. We are not liable for any indirect, incidental, or consequential 
                    damages.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    9. Website Use
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    When using our website, you agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted">
                    <li>Use the website for any unlawful purpose</li>
                    <li>Attempt to gain unauthorised access to our systems</li>
                    <li>Transmit any harmful code or content</li>
                    <li>Interfere with the proper functioning of the website</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    10. Intellectual Property
                  </h2>
                  <p className="text-muted leading-relaxed">
                    All content on our website, including text, graphics, logos, and images, 
                    is the property of Reliable Pay Solutions Pty Ltd and is protected by 
                    applicable intellectual property laws. You may not reproduce, distribute, 
                    or use our content without written permission.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    11. Termination
                  </h2>
                  <p className="text-muted leading-relaxed">
                    Either party may terminate the service agreement in accordance with the 
                    terms specified in the relevant agreement. Upon termination, outstanding 
                    fees remain payable, and we will provide reasonable assistance for 
                    transition of services.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    12. Governing Law
                  </h2>
                  <p className="text-muted leading-relaxed">
                    These Terms and Conditions are governed by the laws of New South Wales, 
                    Australia. Any disputes will be subject to the exclusive jurisdiction 
                    of the courts of New South Wales.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    13. Changes to Terms
                  </h2>
                  <p className="text-muted leading-relaxed">
                    We reserve the right to update these Terms and Conditions at any time. 
                    Changes will be effective when posted on our website. Continued use of 
                    our services constitutes acceptance of the updated terms.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    14. Contact
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    For questions about these Terms and Conditions, please contact us:
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
