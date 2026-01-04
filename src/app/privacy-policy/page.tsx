import Image from "next/image";
import React from "react";
import privacy_image from "@images/About/about.png";
function PrivaryPolicyPage() {
  return (
    <section className="container_main grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl font-bold text-custom-darkBlue mb-1 leading-tight">
          Privacy Policy
        </h1>

        <p className="text-custom-lightBlue text-base mb-4">
          Here is all the information related to our privacy policy.
        </p>

        <div>
          <p className="text-[#333333] text-lg font-semibold mb-6">
            Your privacy is important to us. This privacy policy explains how we
            collect, use, and protect your personal information when you use our
            services.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-custom-darkBlue mb-3">
              Information We Collect
            </h2>
            <p className="text-gray-700">
              We collect information that you provide directly to us, including
              name, email address, and any other information you choose to
              provide when using our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-custom-darkBlue mb-3">
              How We Use Your Information
            </h2>
            <p className="text-gray-700">
              We use the information we collect to provide, maintain, and
              improve our services, communicate with you, and ensure the
              security of our platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-custom-darkBlue mb-3">
              Data Security
            </h2>
            <p className="text-gray-700">
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-custom-darkBlue mb-3">
              Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please
              contact us at privacy@example.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivaryPolicyPage;
