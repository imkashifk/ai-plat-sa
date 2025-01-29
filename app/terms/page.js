"use client"

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-blue max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using University Insights services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
            <p className="mb-4">
              University Insights provides educational consulting services, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>University application assistance</li>
              <li>Course selection guidance</li>
              <li>Visa application support</li>
              <li>Educational counseling</li>
              <li>Document verification services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Notify us of any unauthorized use</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>All fees are non-refundable unless stated otherwise</li>
              <li>Payments must be made in advance of services</li>
              <li>We accept major credit cards and bank transfers</li>
              <li>Prices are subject to change with notice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All content, features, and functionality are owned by University Insights and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              University Insights shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p className="mb-4">
              We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p className="mb-4">
              Questions about the Terms of Service should be sent to us at:
            </p>
            <ul className="list-none mb-4">
              <li>Email: legal@universityinsights.in</li>
              <li>Phone: +91 98182 59770</li>
              <li>Address: 123 Education Street, Academic District, New Delhi, India</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}