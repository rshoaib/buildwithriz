import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — BuildWithRiz',
  description: 'Terms of Service for BuildWithRiz free invoice generator.',
};

export default function TermsOfService() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

      <div className="prose prose-gray prose-sm max-w-none space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">Acceptance of Terms</h2>
          <p>
            By using BuildWithRiz (&quot;the Service&quot;), you agree to these Terms of Service.
            If you do not agree, please do not use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Description of Service</h2>
          <p>
            BuildWithRiz provides a free, client-side invoice generator that allows users to create
            and download professional PDF invoices. The service is provided &quot;as is&quot; without any
            warranties of any kind.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">User Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>You are responsible for the accuracy of the information you enter</li>
            <li>You must comply with all applicable laws regarding invoicing and taxation</li>
            <li>Generated invoices are for informational purposes — consult a professional for legal compliance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Limitation of Liability</h2>
          <p>
            BuildWithRiz is not liable for any damages arising from the use of this service, including
            but not limited to errors in calculations, formatting issues, or data loss. Since all
            processing is client-side, we have no control over or access to the data you enter.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Intellectual Property</h2>
          <p>
            The invoices you generate are yours. We claim no ownership over the content you create.
            The BuildWithRiz brand, design, and code are owned by BuildWithRiz.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the service constitutes
            acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
          <p>
            For questions about these terms, email us at{' '}
            <a href="mailto:contact@buildwithriz.com" className="text-blue-600 hover:underline">
              contact@buildwithriz.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
