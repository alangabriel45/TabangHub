"use client";

import * as React from 'react';

export default function OrganizationProfile() {
  return (
    <div className="bg-gray-100 font-sans min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white p-8 shadow-lg rounded-3xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Helping Hands Foundation</h1>
          <p className="text-xl text-gray-600 mb-4">Non-Profit Organization</p>
        </header>

        {/* Organization Details Section */}
        <section className="flex items-center mb-8 rounded-lg overflow-hidden bg-gray-50 p-6">
          <div className="w-40 h-40 flex-shrink-0">
            {/* Organization Logo */}
            <img
              src="/images/logo.png" // Replace with your actual organization logo image path
              alt="Organization Logo"
              className="w-full h-full rounded-full object-cover border-4 border-gray-200"
            />
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Us</h2>
            <p className="text-gray-700">
              Helping Hands Foundation is dedicated to supporting underprivileged communities through a variety of programs, including educational initiatives, food distribution, and healthcare assistance. We are committed to making a meaningful impact and empowering individuals in need.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-8 rounded-lg bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ongoing Projects</h2>
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Education Program</h3>
              <p className="text-gray-700 mb-2">Providing free education and resources to underprivileged children in rural areas.</p>
              <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Food Distribution Initiative</h3>
              <p className="text-gray-700 mb-2">Distributing essential food supplies to families affected by the pandemic.</p>
              <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-8 rounded-lg bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Testimonials</h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 rounded-lg bg-white p-4 shadow-sm">
              <p>"Helping Hands Foundation has been an incredible partner in organizing community outreach programs. Their dedication and commitment to the cause are unmatched."</p>
              <footer className="mt-2 text-gray-600">- Partner Organization</footer>
            </blockquote>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 rounded-lg bg-white p-4 shadow-sm">
              <p>"Our family received much-needed support from Helping Hands during a difficult time. Their food distribution initiative was a blessing."</p>
              <footer className="mt-2 text-gray-600">- Beneficiary</footer>
            </blockquote>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="mb-8 rounded-lg bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              Email: <a href="mailto:info@helpinghands.org" className="text-blue-500 hover:underline">info@helpinghands.org</a>
            </li>
            <li>Phone: (123) 456-7890</li>
            <li>
              Website: <a href="https://www.helpinghands.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">helpinghands.org</a>
            </li>
            <li>
              Address: 1234 Charity Ave, Cityville, USA
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 mt-8">
          <p>&copy; 2024 Helping Hands Foundation. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
