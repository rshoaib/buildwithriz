import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — BuildWithRiz',
  description: 'Privacy Policy for BuildWithRiz free invoice generator. No data is collected or stored.',
  alternates: { canonical: 'https://buildwithriz.com/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy — BuildWithRiz',
    description: 'Privacy Policy for BuildWithRiz free invoice generator.',
    url: 'https://buildwithriz.com/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

      <div className="prose prose-gray prose-sm max-w-none space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
          <p>
            BuildWithRiz (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy.
            Our free invoice generator is designed as a 100% client-side application. This means all
            your data is processed entirely in your web browser and is never sent to our servers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Data We Do NOT Collect</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>We do not collect your invoice data</li>
            <li>We do not collect personal information</li>
            <li>We do not require user accounts or login</li>
            <li>We do not store any data on our servers</li>
            <li>We do not use cookies for tracking purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">How the Invoice Generator Works</h2>
          <p>
            When you use our invoice generator, all data is processed locally in your web browser using
            JavaScript. The PDF is generated on your device, and no information is transmitted to any server.
            When you close or refresh the page, all entered data is lost permanently.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Third-Party Services</h2>
          <p>
            We use Google AdSense to display advertisements. Google may use cookies to serve ads based on
            your prior visits to our website or other websites. You can opt out of personalized advertising
            by visiting{' '}
            <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Analytics</h2>
          <p>
            We may use basic analytics to understand website traffic and improve our services.
            This data is anonymized and does not include any personal information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:contact@buildwithriz.com" className="text-blue-600 hover:underline">
              contact@buildwithriz.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
