'use client';

import { useState, FormEvent } from 'react';
import { Mail, Globe, Send, MessageSquare, HelpCircle, Bug, Lightbulb, Clock } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Open mailto with form data as a fallback (stateless, no backend)
    const mailtoSubject = encodeURIComponent(formState.subject || 'BuildWithRiz Contact');
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:contact@buildwithriz.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Contact Us</h1>
      <p className="text-gray-600 mb-8 text-base leading-relaxed max-w-2xl">
        Have a question about the invoice generator, want to report a bug, or have a feature
        idea? We would love to hear from you. Fill out the form below and we will get back
        to you as soon as possible — typically within 24–48 hours.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-3">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <Send size={28} className="text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-green-900 mb-1">Email Client Opened!</h3>
              <p className="text-green-700 text-sm">
                Your default email client should have opened with your message pre-filled.
                If it didn&apos;t, you can email us directly at{' '}
                <a href="mailto:contact@buildwithriz.com" className="underline font-medium">
                  contact@buildwithriz.com
                </a>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm text-green-700 hover:text-green-900 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-400">*</span>
                </label>
                <select
                  id="contact-subject"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                >
                  <option value="">Select a topic...</option>
                  <option value="General Question">General Question</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="Invoice Help">Invoice Help</option>
                  <option value="Business Inquiry">Business Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell us what's on your mind..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition flex items-center justify-center gap-2"
              >
                <Send size={14} />
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2 space-y-4">
          {/* Direct Email */}
          <a
            href="mailto:contact@buildwithriz.com"
            className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition group"
          >
            <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition">
              <Mail size={16} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">Email Directly</h3>
              <p className="text-blue-600 text-sm">contact@buildwithriz.com</p>
            </div>
          </a>

          {/* Response Time */}
          <div className="bg-blue-50 rounded-xl border border-blue-100 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={14} className="text-blue-600" />
              <span className="font-semibold text-gray-900 text-sm">Response Time</span>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed">
              We aim to respond to all messages within <strong>24–48 hours</strong> during
              business days. Bug reports and critical issues are prioritized.
            </p>
          </div>

          {/* Common Topics */}
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <h3 className="font-semibold text-gray-900 text-sm mb-3">Common Support Topics</h3>
            <ul className="space-y-2.5">
              {[
                { icon: HelpCircle, text: 'How to add or change currencies on invoices' },
                { icon: Bug, text: 'PDF download not working on my device' },
                { icon: Lightbulb, text: 'Requesting a new feature or tool' },
                { icon: MessageSquare, text: 'Questions about privacy and data handling' },
                { icon: Globe, text: 'Partnership or business inquiries' },
              ].map((topic) => (
                <li key={topic.text} className="flex items-start gap-2">
                  <topic.icon size={13} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-xs leading-relaxed">{topic.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
