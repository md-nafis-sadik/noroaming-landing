function PrivacyPolicy() {
  return (
    <section className="containerX mx-auto px-0 lg:px-16 2xl:px-24 py-12 font-inter">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#001C3E' }}>Privacy Policy</h1>
        <p className="text-lg text-gray-600">Effective Date: 2025-07-07</p>
      </div>

      <div className="bg-white rounded-lg">
        <div className="mb-10">
          <p className="mb-6">
            This Privacy Policy describes how Noroaming ("we," "us," or "our") collects, uses, and shares your personal information when you use our mobile application and services. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
          </p>
        </div>

        <div className="space-y-10">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#001C3E' }}>1. Information We Collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">1.1. Personal Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">Account Information:</span> When you create a Noroaming account, we collect your name, email address, and password.</li>
                  <li><span className="font-medium">Family Member Information:</span> If you add a family member to your account, we collect their name and relationship to you. As the parent account holder, you are responsible for providing this information and for the family member's use of the service.</li>
                  <li><span className="font-medium">Purchase Information:</span> To process your purchases of eSIM packages, we collect information necessary to complete the transaction. This may include your name, billing address, and a partial, tokenized version of your payment card information. All payments are processed securely by our third-party payment processor, Stripe. We do not store your full credit card number on our servers.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">1.2. Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">Usage Data:</span> We collect information about how you use the Noroaming app, such as the features you interact with, the packages you view and purchase, and the validity of your active packages.</li>
                  <li><span className="font-medium">Device Information:</span> We may collect information about your mobile device, including the device model, operating system version, and unique device identifiers. This helps us to troubleshoot issues and optimize our service for your device.</li>
                  <li><span className="font-medium">eSIM Information:</span> To provide our core service, we generate and provide you with an eSIM QR code. We track the status of your eSIM (active, inactive) and the data consumption associated with your purchased packages.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#001C3E' }}>2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To Provide and Manage Your Service: To create and manage your account, process your eSIM package purchases, and display your purchased package summary on the home screen.</li>
              <li>To Facilitate Family Accounts: To allow a parent account to purchase and manage eSIM packages for family members and to allow family members to view their eSIM QR code and data usage.</li>
              <li>Payment Processing: To securely process your payments for eSIM packages through our payment processor, Stripe.</li>
              <li>Customer Support: To respond to your inquiries, troubleshoot problems, and provide you with support.</li>
              <li>To Improve Our Services: To understand how our users interact with our app, which allows us to improve the user experience, develop new features, and enhance the overall quality of our service.</li>
              <li>To Communicate With You: To send you important information about your account, transactions, and updates to our services or policies.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#001C3E' }}>3. How We Share Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">With Our Service Providers:</span> We share information with third-party service providers who perform services on our behalf, such as payment processing. Our payment processor, Stripe, has its own privacy policy, and we encourage you to review it. We only share the information necessary for them to perform their services.</li>
              <li><span className="font-medium">For Legal Reasons:</span> We may disclose your information if we are required to do so by law or in response to a valid legal request, such as a court order or government inquiry.</li>
              <li><span className="font-medium">To Protect Our Rights:</span> We may disclose your information to protect the rights, property, or safety of Noroaming, our users, or others.</li>
            </ul>
            <p className="mt-4">We do not sell your personal information to third parties.</p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#001C3E' }}>4. Your Choices and Rights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Access and Correction</h3>
                <p>You can access and update your account information at any time through the app's settings.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Data Deletion</h3>
                <p>You may request the deletion of your account and associated personal information by contacting us at kontakt@egalactic.com. Please note that we may be required to retain certain information for legal or legitimate business purposes.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Communications</h3>
                <p>You can opt-out of receiving promotional emails from us by following the unsubscribe instructions in those emails. However, you will still receive transactional emails related to your account and purchases.</p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#001C3E' }}>5. Data Storage and Security</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use a variety of security technologies and procedures to help protect your information. All data is stored on secure servers, and we use encryption to protect sensitive information transmitted online.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#001C3E' }}>6. Children's Privacy</h2>
            <p>
              Our services are not directed to children under the age of 13 without the consent and supervision of a parent or guardian. The family member feature is intended for a parent or legal guardian to manage eSIM access for their dependents. We do not knowingly collect personal information from children under 13 without parental consent. If you believe we have collected information from a child under 13 without proper consent, please contact us immediately at kontakt@egalactic.com.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#001C3E' }}>7. International Data Transfers</h2>
            <p>
              Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction. By using our service, you consent to the transfer of your information to these jurisdictions.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#001C3E' }}>8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          {/* Contact Section */}
          <div className="">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#001C3E' }}>9. Contact Us</h2>
            <p className="mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="font-semibold text-blue-600">kontakt@egalactic.com</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default PrivacyPolicy;