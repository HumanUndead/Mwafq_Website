import Image from "next/image";
import React from "react";
import privacy_image from "@images/About/about.png";

function PrivacyPolicyPage() {
  return (
    <section className="container_main grid gap-12 items-center py-12">
      <div className="">
        <h1 className="text-5xl font-bold text-custom-darkBlue mb-1 leading-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          Last Updated: January 06, 2026
        </p>

        <p className="text-custom-lightBlue text-base mb-6">
          We are committed to protecting your privacy and ensuring the security
          of your personal information across Mwafq delivery services and Mwafq
          Academy educational platform.
        </p>

        <div className="space-y-8">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-custom-darkBlue mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-700 mb-3">
              Welcome to Mwafq. We respect your privacy and are committed to
              protecting your personal data. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              use our services, including our mobile application for delivery
              services and our educational platform, Mwafq Academy
              (collectively, the "System").
            </p>
            <p className="text-gray-700 mb-3">
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              System. By using our services, you acknowledge that you have read
              and understood this Privacy Policy and agree to its terms.
            </p>
            <p className="text-gray-700">
              This policy applies to all users of Mwafq services, including
              customers placing orders, drivers providing delivery services,
              students enrolled in Mwafq Academy courses, instructors teaching
              on our platform, and any other visitors to our System. We are
              committed to transparency in our data practices and ensuring
              compliance with applicable data protection laws and regulations.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-semibold text-custom-darkBlue mb-3">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We may collect information about you in a variety of ways to
              provide you with optimal service delivery, educational
              experiences, and platform functionality. The information we may
              collect via the System includes:
            </p>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              2.1 Personal Data
            </h3>
            <p className="text-gray-700 mb-3">
              We collect personally identifiable information that you
              voluntarily provide to us when registering, placing orders,
              enrolling in courses, or using our services. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <span className="font-semibold">Identity Information:</span>{" "}
                Your full name, Identity Number (National ID/Iqama), date of
                birth, and profile photograph. This information is essential for
                account verification, ensuring service authenticity, and
                complying with regional regulations.
              </li>
              <li>
                <span className="font-semibold">Contact Data:</span> Shipping
                addresses (including multiple delivery locations), email
                addresses, and telephone numbers (including Saudi phone numbers
                starting with 5). We use this information to facilitate
                deliveries, send order confirmations, provide customer support,
                and communicate important updates about your account or courses.
              </li>
              <li>
                <span className="font-semibold">Registration Data:</span>{" "}
                Information you voluntarily provide when creating an account,
                including username, password (stored in encrypted format),
                preferred language, notification preferences, and profile
                settings. This also includes information provided when signing
                up as a driver, which may require additional documentation such
                as driver's license details, vehicle information, and insurance
                documentation.
              </li>
              <li>
                <span className="font-semibold">Payment Information:</span>{" "}
                Credit card details, billing addresses, transaction history, and
                payment preferences. All payment data is processed through
                secure, PCI-DSS compliant payment gateways to ensure the highest
                level of financial data protection.
              </li>
              <li>
                <span className="font-semibold">
                  Government-Issued Documentation:
                </span>{" "}
                Copies of identification documents, driver's licenses, vehicle
                registration, and other regulatory documents required for driver
                verification and compliance with local transportation laws.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              2.2 Educational and Academic Data (Mwafq Academy)
            </h3>
            <p className="text-gray-700 mb-3">
              Specific to our Mwafq Academy educational platform, we collect
              comprehensive learning-related information to provide personalized
              education experiences, track your progress, and issue valid
              certifications:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <span className="font-semibold">
                  Course Enrollment and Progress:
                </span>{" "}
                Detailed information about courses you are enrolled in, lessons
                and modules completed, time spent on each learning activity,
                video watch completion rates, and overall course progress
                percentages. This data helps us understand your learning journey
                and provide targeted support.
              </li>
              <li>
                <span className="font-semibold">Performance Data:</span>{" "}
                Comprehensive records of quiz scores, exam results, assignment
                submissions, homework completion, project evaluations, peer
                review participation, and overall academic performance metrics.
                This information is used to assess your understanding, provide
                feedback, and determine certificate eligibility.
              </li>
              <li>
                <span className="font-semibold">Notes and Interactions:</span>{" "}
                Personal notes you take during video lectures, bookmarked
                content, questions asked in discussion forums, comments on
                course materials, and contributions to collaborative learning
                activities. This data remains private to you unless you choose
                to share it publicly in forums.
              </li>
              <li>
                <span className="font-semibold">Learning Preferences:</span>{" "}
                Information about your preferred learning style, course
                categories of interest, study schedule, and accessibility
                requirements to help us recommend relevant courses and optimize
                your learning experience.
              </li>
              <li>
                <span className="font-semibold">
                  Certificates and Credentials:
                </span>{" "}
                Records of completed courses, earned certificates, digital
                badges, skill achievements, and accreditation information that
                form your academic portfolio on our platform.
              </li>
              <li>
                <span className="font-semibold">Instructor Interactions:</span>{" "}
                Communications with instructors, feedback provided on courses,
                ratings and reviews you submit, and any mentorship or guidance
                sessions you participate in.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              2.3 In-App Communications
            </h3>
            <p className="text-gray-700 mb-3">
              We collect information from various communication channels within
              our System to ensure service quality, safety, and compliance:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <span className="font-semibold">Chat Messages:</span> Content of
                messages exchanged through our in-app chat feature between
                customers and drivers, students and instructors, or users and
                support staff. This includes text content, timestamps, read
                receipts, and delivery status.
              </li>
              <li>
                <span className="font-semibold">Discussion Forum Content:</span>{" "}
                Posts, comments, replies, and interactions in Mwafq Academy
                discussion forums and community spaces, including your
                participation history and engagement metrics.
              </li>
              <li>
                <span className="font-semibold">
                  Customer Support Communications:
                </span>{" "}
                All correspondence with our support team, including help desk
                tickets, email exchanges, live chat transcripts, phone call
                recordings (with your consent), and resolution history.
              </li>
              <li>
                <span className="font-semibold">Feedback and Reviews:</span>{" "}
                Ratings, reviews, comments, and feedback you provide about
                delivery services, drivers, courses, instructors, or platform
                features.
              </li>
            </ul>
            <p className="text-gray-700 mt-3">
              We monitor these communications to ensure safety, maintain service
              quality, prevent fraud, resolve disputes, ensure academic
              integrity, and improve our services. All communications are stored
              securely and accessed only when necessary for legitimate business
              purposes.
            </p>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              2.4 Derivative Data and Usage Information
            </h3>
            <p className="text-gray-700 mb-3">
              Our servers automatically collect certain information when you
              access and use the System. This technical data helps us understand
              how you interact with our platform and improve user experience:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <span className="font-semibold">Device Information:</span> IP
                address, unique device identifiers, browser type and version,
                operating system and version, screen resolution, device
                manufacturer and model, mobile network information, and device
                settings.
              </li>
              <li>
                <span className="font-semibold">Usage Analytics:</span> Pages or
                screens viewed, time spent on pages, navigation paths through
                the System, click patterns, scroll depth, features used, buttons
                clicked, and search queries entered.
              </li>
              <li>
                <span className="font-semibold">Performance Data:</span>{" "}
                Application performance metrics, crash reports, error logs,
                loading times, and technical diagnostics that help us identify
                and fix issues.
              </li>
              <li>
                <span className="font-semibold">Session Information:</span>{" "}
                Login times, logout times, session duration, frequency of
                visits, and patterns of system usage.
              </li>
              <li>
                <span className="font-semibold">Referral Data:</span>{" "}
                Information about how you arrived at our System, including
                referral sources, marketing campaigns, and external links that
                directed you to our platform.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              2.5 Geo-Location Information
            </h3>
            <p className="text-gray-700 mb-3">
              Location data is critical for providing efficient delivery
              services and location-based features. We collect:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <span className="font-semibold">Real-Time Location:</span>{" "}
                Continuous GPS coordinates when you are actively using delivery
                services, either as a customer tracking an order or as a driver
                providing delivery services. This enables accurate tracking,
                optimal route planning, and estimated time of arrival
                calculations.
              </li>
              <li>
                <span className="font-semibold">Delivery Locations:</span>{" "}
                Addresses where orders are picked up and delivered, including
                saved favorite locations and frequently used delivery addresses.
              </li>
              <li>
                <span className="font-semibold">Route Information:</span> The
                paths drivers take during deliveries, including waypoints,
                stops, and deviations from suggested routes. This data helps us
                verify service delivery and improve route optimization.
              </li>
              <li>
                <span className="font-semibold">
                  Background Location (Drivers Only):
                </span>{" "}
                For drivers who are actively working, we may collect location
                data even when the app is running in the background to maintain
                continuous tracking during deliveries and ensure customer
                visibility.
              </li>
              <li>
                <span className="font-semibold">Approximate Location:</span> For
                non-delivery features, we may use your approximate location
                based on IP address or Wi-Fi networks to customize content,
                suggest relevant services, or provide localized course
                offerings.
              </li>
            </ul>
            <p className="text-gray-700 mt-3">
              You can control location permissions through your device settings.
              However, disabling location services may limit or prevent you from
              using certain features, particularly delivery tracking and driver
              services. We request location access only when necessary and
              clearly communicate why location data is needed.
            </p>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              2.6 Mobile Device Access and Permissions
            </h3>
            <p className="text-gray-700 mb-3">
              To provide full functionality of our mobile application, we may
              request access to various device features. Each permission serves
              specific purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <span className="font-semibold">Camera:</span> To capture and
                upload profile photos, scan QR codes for quick order access,
                take photos of delivered items for proof of delivery, or record
                video assignments for Academy courses.
              </li>
              <li>
                <span className="font-semibold">Photo Gallery/Storage:</span> To
                select images from your device for profile pictures, upload
                assignment files, or attach documents for verification purposes.
                We also need storage access to cache course videos for offline
                viewing.
              </li>
              <li>
                <span className="font-semibold">Microphone:</span> For voice
                messages in chat, audio assignments in Academy courses, or
                voice-based customer support interactions.
              </li>
              <li>
                <span className="font-semibold">Contacts:</span> To help you
                invite friends to use Mwafq, share referral codes, or easily
                select delivery recipients from your contact list (only with
                your explicit permission).
              </li>
              <li>
                <span className="font-semibold">Calendar:</span> To add delivery
                time windows or scheduled course events to your device calendar
                for convenient reminders.
              </li>
              <li>
                <span className="font-semibold">Bluetooth:</span> For
                proximity-based features, such as verifying driver presence
                during pickup or enabling contactless delivery confirmations.
              </li>
              <li>
                <span className="font-semibold">SMS Messages:</span> To
                auto-fill verification codes sent via SMS during account
                registration or password reset processes, streamlining
                authentication.
              </li>
              <li>
                <span className="font-semibold">Notifications:</span> To send
                alerts about order status, driver location, course updates, new
                messages, promotional offers, and important account information.
              </li>
            </ul>
            <p className="text-gray-700 mt-3">
              All permissions are requested at the time they are needed, with
              clear explanations of their purpose. You can manage or revoke
              these permissions at any time through your device settings.
              Denying certain permissions may limit specific features but will
              not prevent you from using the core functionality of the System.
            </p>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              2.7 Push Notifications and Communication Preferences
            </h3>
            <p className="text-gray-700 mb-3">
              We use push notifications to keep you informed about important
              updates and activities:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Order confirmations, driver assignments, and real-time delivery
                status updates
              </li>
              <li>
                New course enrollments, lesson availability, and upcoming
                assignment deadlines
              </li>
              <li>Messages from drivers, instructors, or support staff</li>
              <li>Account security alerts and verification requirements</li>
              <li>Special offers, promotions, and new feature announcements</li>
              <li>Payment confirmations and transaction receipts</li>
              <li>Certificate issuance and achievement notifications</li>
            </ul>
            <p className="text-gray-700 mt-3">
              You have complete control over notification preferences. You can
              customize which types of notifications you receive through the app
              settings or turn off push notifications entirely in your device
              settings. Note that disabling essential notifications (such as
              delivery updates or security alerts) may impact your service
              experience.
            </p>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              2.8 Cookies and Tracking Technologies
            </h3>
            <p className="text-gray-700 mb-3">
              We use cookies, web beacons, pixel tags, and similar technologies
              to enhance your experience:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <span className="font-semibold">Essential Cookies:</span>{" "}
                Necessary for the System to function, including session
                management, authentication, and security features.
              </li>
              <li>
                <span className="font-semibold">Performance Cookies:</span>{" "}
                Collect anonymous information about how you use the System to
                help us improve functionality and user experience.
              </li>
              <li>
                <span className="font-semibold">Functional Cookies:</span>{" "}
                Remember your preferences, settings, and choices to provide a
                more personalized experience.
              </li>
              <li>
                <span className="font-semibold">Analytics Cookies:</span> Help
                us understand user behavior, popular features, and areas for
                improvement through aggregated data analysis.
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-semibold text-custom-darkBlue mb-3">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. We are
              committed to using your data responsibly and only for purposes
              that directly benefit your use of our services. Specifically, we
              use information collected about you to:
            </p>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              3.1 Account Management and Authentication
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Create, maintain, and secure your user account across Mwafq
                delivery and Academy platforms
              </li>
              <li>
                Verify your identity during registration and login to prevent
                unauthorized access
              </li>
              <li>
                Authenticate driver credentials and validate service provider
                qualifications
              </li>
              <li>
                Enable single sign-on functionality across our integrated
                services
              </li>
              <li>
                Manage your profile settings, preferences, and account
                information
              </li>
              <li>
                Implement two-factor authentication and enhanced security
                measures
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              3.2 Educational Services (Mwafq Academy)
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Track your learning progress across all enrolled courses and
                display completion percentages
              </li>
              <li>
                Automatically grade quizzes, exams, and assignments based on
                predefined criteria
              </li>
              <li>
                Generate personalized learning recommendations based on your
                interests and performance
              </li>
              <li>
                Issue digital certificates upon successful course completion
                with verifiable credentials
              </li>
              <li>
                Provide instructors with aggregate class performance data while
                maintaining individual student privacy
              </li>
              <li>
                Enable collaborative learning through discussion forums and peer
                interactions
              </li>
              <li>
                Customize course content delivery based on your learning pace
                and preferences
              </li>
              <li>
                Track skill development and create comprehensive learning
                portfolios
              </li>
              <li>
                Facilitate instructor-student communication for academic support
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              3.3 Service Delivery and Order Management
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Process and fulfill delivery orders efficiently from placement
                to completion
              </li>
              <li>
                Match orders with available drivers based on location, capacity,
                and efficiency
              </li>
              <li>
                Provide real-time tracking of driver location and estimated
                delivery times
              </li>
              <li>
                Optimize delivery routes to reduce wait times and improve
                service quality
              </li>
              <li>
                Send automated notifications about order status changes and
                delivery updates
              </li>
              <li>
                Verify successful deliveries and collect proof of delivery when
                required
              </li>
              <li>
                Handle special delivery instructions and customer preferences
              </li>
              <li>
                Manage order modifications, cancellations, and rescheduling
                requests
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              3.4 Financial Transactions and Payment Processing
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Process payments securely for delivery orders and course
                enrollments
              </li>
              <li>Manage billing, invoicing, and transaction records</li>
              <li>
                Handle refunds, disputes, and chargebacks in accordance with our
                policies
              </li>
              <li>
                Calculate and distribute driver earnings and instructor
                compensation
              </li>
              <li>
                Generate financial reports and maintain tax-related
                documentation
              </li>
              <li>
                Detect and prevent fraudulent transactions and payment abuse
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              3.5 Communication and Customer Support
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Send order confirmations, delivery updates, and course
                enrollment notifications via email and SMS
              </li>
              <li>
                Provide responsive customer support through multiple channels
                (chat, email, phone)
              </li>
              <li>
                Respond to inquiries, complaints, and feedback in a timely
                manner
              </li>
              <li>
                Send account-related information, security alerts, and policy
                updates
              </li>
              <li>
                Notify you about new features, services, and platform
                improvements
              </li>
              <li>
                Deliver marketing communications about promotions and special
                offers (with opt-out options)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              3.6 Personalization and User Experience
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Generate personalized user profiles based on preferences and
                behavior
              </li>
              <li>
                Recommend relevant courses based on your learning history and
                interests
              </li>
              <li>
                Suggest frequently ordered items and preferred delivery
                locations
              </li>
              <li>
                Customize the interface and content display based on your
                settings
              </li>
              <li>Remember your choices to streamline future interactions</li>
              <li>
                Provide tailored notifications based on your activity patterns
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              3.7 Platform Improvement and Analytics
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Monitor and analyze usage patterns to identify popular features
                and pain points
              </li>
              <li>
                Conduct A/B testing to optimize user interface and functionality
              </li>
              <li>
                Gather feedback through surveys and ratings to guide product
                development
              </li>
              <li>
                Measure system performance, loading times, and identify
                technical issues
              </li>
              <li>
                Analyze course completion rates and student engagement metrics
              </li>
              <li>Track driver efficiency and delivery success rates</li>
              <li>
                Generate aggregate reports and statistics for business
                intelligence
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              3.8 Safety, Security, and Fraud Prevention
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Prevent fraudulent transactions and detect suspicious account
                activity
              </li>
              <li>
                Monitor for theft, abuse, and violations of our terms of service
              </li>
              <li>
                Protect against unauthorized access and cyber security threats
              </li>
              <li>
                Verify driver identity and conduct background checks for safety
                assurance
              </li>
              <li>
                Investigate reported incidents, disputes, and policy violations
              </li>
              <li>
                Maintain academic integrity by detecting plagiarism and exam
                cheating
              </li>
              <li>Implement anti-spam measures and content moderation</li>
            </ul>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              3.9 Legal Compliance and Business Operations
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Comply with applicable laws, regulations, and legal obligations
              </li>
              <li>Respond to lawful requests from government authorities</li>
              <li>Enforce our terms of service and user agreements</li>
              <li>Maintain records required for tax and accounting purposes</li>
              <li>
                Resolve disputes through arbitration or legal proceedings when
                necessary
              </li>
              <li>Conduct internal audits and quality assurance reviews</li>
            </ul>
          </div>

          {/* Disclosure of Information */}
          <div>
            <h2 className="text-2xl font-semibold text-custom-darkBlue mb-3">
              4. Disclosure of Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows, and we
              ensure all third parties who receive your data are bound by
              appropriate confidentiality and data protection obligations:
            </p>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              4.1 By Law or to Protect Rights
            </h3>
            <p className="text-gray-700 mb-3">
              If we believe the release of information about you is necessary to
              respond to legal process, to investigate or remedy potential
              violations of our policies, or to protect the rights, property,
              and safety of others, we may share your information as permitted
              or required by any applicable law, rule, or regulation. This
              includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Complying with court orders, subpoenas, and legal proceedings
              </li>
              <li>
                Responding to lawful requests from law enforcement and
                government agencies
              </li>
              <li>
                Enforcing our terms of service and investigating violations
              </li>
              <li>
                Protecting against fraud, security breaches, and illegal
                activities
              </li>
              <li>Defending our legal rights in disputes or litigation</li>
              <li>Complying with tax authorities and financial regulators</li>
            </ul>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              4.2 Third-Party Service Providers
            </h3>
            <p className="text-gray-700 mb-3">
              We may share your information with carefully selected third-party
              vendors who perform services for us or on our behalf. These
              service providers are contractually obligated to use your
              information only for the purposes we specify and maintain
              appropriate security measures. Categories of service providers
              include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <span className="font-semibold">Payment Processors:</span>{" "}
                Secure handling of financial transactions and payment card data
              </li>
              <li>
                <span className="font-semibold">Cloud Hosting Services:</span>{" "}
                Storage and processing of data on secure servers
              </li>
              <li>
                <span className="font-semibold">Email and SMS Providers:</span>{" "}
                Delivery of transactional and marketing communications
              </li>
              <li>
                <span className="font-semibold">Analytics Platforms:</span>{" "}
                Analysis of user behavior and system performance
              </li>
              <li>
                <span className="font-semibold">Customer Support Tools:</span>{" "}
                Management of support tickets and live chat functionality
              </li>
              <li>
                <span className="font-semibold">
                  Identity Verification Services:
                </span>{" "}
                Validation of driver credentials and user identities
              </li>
              <li>
                <span className="font-semibold">Marketing Platforms:</span>{" "}
                Campaign management and targeted advertising
              </li>
              <li>
                <span className="font-semibold">
                  Content Delivery Networks:
                </span>{" "}
                Fast and reliable delivery of course videos and media
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              4.3 Educational Partners (Mwafq Academy)
            </h3>
            <p className="text-gray-700 mb-3">
              For Mwafq Academy users, we may share relevant progress or
              completion data with instructors, educational institutions, or
              corporate partners in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                When your enrollment is sponsored by an employer or organization
                for professional development
              </li>
              <li>
                When you are part of a corporate training program or
                institutional partnership
              </li>
              <li>
                When sharing aggregate, anonymized class performance data with
                instructors for course improvement
              </li>
              <li>
                When issuing co-branded certificates or credentials requiring
                partner verification
              </li>
              <li>
                When required for accreditation, continuing education credits,
                or professional licensing requirements
              </li>
            </ul>
            <p className="text-gray-700 mt-3">
              In these cases, we share only the minimum necessary information
              and ensure partners comply with appropriate data protection
              standards. You will always be informed when your data will be
              shared with educational partners.
            </p>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              4.4 Drivers and Service Providers
            </h3>
            <p className="text-gray-700 mb-3">
              To facilitate delivery services, we share limited information
              between customers and drivers:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Customer name, delivery address, and contact information with
                assigned drivers
              </li>
              <li>
                Driver name, photo, vehicle details, and real-time location with
                customers who have active orders
              </li>
              <li>Order details necessary to complete the delivery</li>
              <li>
                In-app messaging between customers and drivers for coordination
                purposes
              </li>
            </ul>
            <p className="text-gray-700 mt-3">
              Contact information is shared only for the duration of active
              orders and is not used for marketing or unrelated purposes.
            </p>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              4.5 Business Transfers
            </h3>
            <p className="text-gray-700 mb-3">
              In the event of a merger, acquisition, reorganization, bankruptcy,
              or sale of company assets, your information may be transferred as
              part of that transaction. We will provide notice before your
              information is transferred and becomes subject to a different
              privacy policy. Your rights regarding your data will be preserved
              during any such transfer.
            </p>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              4.6 Marketing and Analytics Partners
            </h3>
            <p className="text-gray-700 mb-3">
              We may share aggregated, de-identified, or anonymized information
              with advertisers, investors, and business partners for the purpose
              of:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Conducting general business analysis and market research</li>
              <li>Understanding industry trends and user demographics</li>
              <li>Improving our marketing strategies and user acquisition</li>
              <li>
                Demonstrating platform growth and engagement metrics to
                investors
              </li>
            </ul>
            <p className="text-gray-700 mt-3">
              This aggregated data cannot be used to identify you personally. We
              may also share your information with marketing partners for
              promotional purposes where permitted by law and your preferences,
              always providing clear opt-out mechanisms.
            </p>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              4.7 With Your Consent
            </h3>
            <p className="text-gray-700">
              We may share your information for any other purpose with your
              explicit consent. You will always be informed about who will
              receive your data and for what purpose, and you can withdraw
              consent at any time where legally permissible.
            </p>
          </div>

          {/* Security */}
          <div>
            <h2 className="text-2xl font-semibold text-custom-darkBlue mb-3">
              5. Security of Your Information
            </h2>
            <p className="text-gray-700 mb-3">
              We use administrative, technical, and physical security measures
              to help protect your personal information. The security of your
              data is of paramount importance to us, and we continuously invest
              in protecting the information you entrust to us.
            </p>
            <p className="text-gray-700 mb-3">
              While we have taken reasonable steps to secure the personal
              information you provide to us, please be aware that despite our
              efforts, no security measures are perfect or impenetrable, and no
              method of data transmission can be guaranteed against any
              interception or other type of misuse. We cannot guarantee absolute
              security, but we employ industry best practices to minimize risks.
            </p>

            <h3 className="text-xl font-semibold text-custom-darkBlue mt-4 mb-2">
              Our Security Measures Include:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <span className="font-semibold">Encryption:</span> All data
                transmitted between your device and our servers is encrypted
                using SSL/TLS protocols. Sensitive data such as passwords and
                payment information is encrypted both in transit and at rest.
              </li>
              <li>
                <span className="font-semibold">Access Controls:</span> Strict
                employee access controls ensure only authorized personnel can
                access personal information, and only when necessary for
                legitimate business purposes. All access is logged and
                monitored.
              </li>
              <li>
                <span className="font-semibold">Regular Security Audits:</span>{" "}
                We conduct periodic security assessments, vulnerability scans,
                and penetration testing to identify and address potential
                security risks.
              </li>
              <li>
                <span className="font-semibold">Secure Infrastructure:</span>{" "}
                Our systems are hosted on secure servers with firewalls,
                intrusion detection systems, and 24/7 monitoring.
              </li>
              <li>
                <span className="font-semibold">Data Backup:</span> Regular
                automated backups ensure data can be restored in case of system
                failure or disaster.
              </li>
              <li>
                <span className="font-semibold">Incident Response:</span> We
                maintain a comprehensive incident response plan to quickly
                address any security breaches and notify affected users as
                required by law.
              </li>
              <li>
                <span className="font-semibold">Employee Training:</span> All
                employees receive regular training on data protection, privacy
                practices, and security protocols.
              </li>
            </ul>

            <p className="text-gray-700 mt-3">
              If we learn of a security breach that compromises your personal
              information, we will notify you in accordance with applicable laws
              and regulations, providing information about the breach and steps
              you can take to protect yourself.
            </p>
          </div>

          {/* Policy for Children */}
          <div>
            <h2 className="text-2xl font-semibold text-custom-darkBlue mb-3">
              6. Policy for Children
            </h2>
            <p className="text-gray-700 mb-3">
              We do not knowingly solicit information from or market to children
              under the age of 13. Our services are intended for users who are
              at least 13 years old. If you are under 13, please do not use the
              System or provide any information about yourself to us.
            </p>
            <p className="text-gray-700 mb-3">
              If you become aware of any data we have collected from children
              under age 13, or if you are a parent or guardian who believes your
              child has provided us with personal information without your
              consent, please contact us immediately using the contact
              information provided below. Upon verification, we will take prompt
              steps to delete such information from our records.
            </p>
            <p className="text-gray-700">
              For users between 13 and 18 years of age, we encourage parental
              involvement and supervision. Parents or guardians should review
              this Privacy Policy with their children and monitor their online
              activities to ensure appropriate use of our services.
            </p>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="text-2xl font-semibold text-custom-darkBlue mb-3">
              7. Data Retention
            </h2>
            <p className="text-gray-700 mb-3">
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy and comply
              with legal obligations. Retention periods vary based on the type
              of data and applicable requirements:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <span className="font-semibold">Account Information:</span>{" "}
                Retained as long as your account remains active, plus a
                reasonable period afterward to comply with legal obligations and
                resolve disputes.
              </li>
              <li>
                <span className="font-semibold">Transaction Records:</span>{" "}
                Maintained for 7 years or as required by applicable tax and
                financial regulations.
              </li>
              <li>
                <span className="font-semibold">
                  Course Progress and Certificates:
                </span>{" "}
                Academic records are retained indefinitely to verify certificate
                authenticity and provide transcript services.
              </li>
              <li>
                <span className="font-semibold">Communications:</span> Support
                tickets and messages are retained for 3 years for quality
                assurance and dispute resolution.
              </li>
              <li>
                <span className="font-semibold">Usage Analytics:</span>{" "}
                Aggregated and anonymized data may be retained indefinitely for
                statistical analysis.
              </li>
            </ul>
            <p className="text-gray-700 mt-3">
              When information is no longer needed, we securely delete or
              anonymize it using industry-standard data destruction methods. You
              can request deletion of your account and associated data at any
              time, subject to legal retention requirements.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-custom-darkBlue mb-3">
              8. Your Privacy Rights
            </h2>
            <p className="text-gray-700 mb-3">
              Depending on your location, you have certain rights regarding your
              personal information. We respect these rights and provide
              mechanisms for you to exercise them:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <span className="font-semibold">Right to Access:</span> You can
                request a copy of the personal data we hold about you, including
                delivery history, course progress, and account information.
              </li>
              <li>
                <span className="font-semibold">Right to Rectification:</span>{" "}
                You can update or correct inaccurate or incomplete information
                through your account settings or by contacting us.
              </li>
              <li>
                <span className="font-semibold">Right to Erasure:</span> You can
                request deletion of your personal data, subject to legal
                retention requirements and legitimate business needs.
              </li>
              <li>
                <span className="font-semibold">Right to Restriction:</span> You
                can request that we limit the processing of your data in certain
                circumstances.
              </li>
              <li>
                <span className="font-semibold">
                  Right to Data Portability:
                </span>{" "}
                You can request to receive your data in a structured,
                machine-readable format to transfer to another service provider.
              </li>
              <li>
                <span className="font-semibold">Right to Object:</span> You can
                object to processing based on legitimate interests or for direct
                marketing purposes.
              </li>
              <li>
                <span className="font-semibold">
                  Right to Withdraw Consent:
                </span>{" "}
                Where we process data based on your consent, you can withdraw
                that consent at any time.
              </li>
            </ul>
            <p className="text-gray-700 mt-3">
              To exercise these rights, please contact us using the information
              provided in the Contact Us section. We will respond to your
              request within 30 days and may require verification of your
              identity to protect your privacy.
            </p>
          </div>

          {/* International Transfers */}
          <div>
            <h2 className="text-2xl font-semibold text-custom-darkBlue mb-3">
              9. International Data Transfers
            </h2>
            <p className="text-gray-700">
              Your information may be transferred to and processed in countries
              other than your country of residence, including servers located
              outside Saudi Arabia. When we transfer data internationally, we
              ensure appropriate safeguards are in place through standard
              contractual clauses, adequacy decisions, or other lawful transfer
              mechanisms to protect your information in accordance with
              applicable data protection laws.
            </p>
          </div>

          {/* Changes to Policy */}
          <div>
            <h2 className="text-2xl font-semibold text-custom-darkBlue mb-3">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-3">
              Mwafq reserves the right to modify or change the terms of this
              privacy policy at any time. When we make material changes to this
              policy, we will update the "Last Updated" date at the top of this
              page and notify you through:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Push notifications or in-app alerts for significant changes
              </li>
              <li>Email notifications to your registered email address</li>
              <li>
                Prominent banner notices on our website and mobile application
              </li>
            </ul>
            <p className="text-gray-700 mt-3">
              We encourage you to review this Privacy Policy frequently to stay
              informed about how we protect your information and your privacy
              rights. Your continued use of the System after changes are posted
              constitutes your acceptance of the revised policy. If you do not
              agree with the changes, please discontinue use of our services.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-2xl font-semibold text-custom-darkBlue mb-3">
              11. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions, concerns, or requests regarding this
              Privacy Policy or our data practices, we are here to help. Please
              contact us through any of the following methods:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-custom-darkBlue">
              <p className="text-gray-700 mb-3">
                <span className="font-semibold text-custom-darkBlue">
                  Mwafq Team
                </span>
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Privacy Inquiries:</span>{" "}
                Info@mwafq.com
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">General Support:</span>{" "}
                Info@mwafq.com
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Phone:</span> 00966 555 98 30 70
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Address:</span> Riyadh, Saudi
                Arabia
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">Response Time:</span> We aim to
                respond to all privacy-related inquiries within 5 business days
              </p>
              <p className="text-gray-700 text-sm italic">
                For faster assistance, you can also reach us through the in-app
                help center or customer support chat available 24/7 in the Mwafq
                application.
              </p>
            </div>
          </div>

          {/* Consent */}
          <div className="bg-custom-lightBlue/10 p-6 rounded-lg border-l-4 border-custom-darkBlue">
            <h2 className="text-2xl font-semibold text-custom-darkBlue mb-3">
              Your Consent and Acknowledgment
            </h2>
            <p className="text-gray-700 mb-3">
              By creating an account, using Mwafq delivery services, enrolling
              in Mwafq Academy courses, or otherwise accessing our System, you
              acknowledge that you have read, understood, and agree to be bound
              by this Privacy Policy.
            </p>
            <p className="text-gray-700">
              If you do not agree with any part of this policy, please do not
              use our services. Your continued use of the System constitutes
              your ongoing consent to our privacy practices as described herein.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicyPage;
