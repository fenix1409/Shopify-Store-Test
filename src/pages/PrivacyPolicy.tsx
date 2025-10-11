import { Shield, Eye, Lock, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  const secureDatas = [
    { icon: Shield, title: "Secure Data", description: "SSL Encryption" },
    { icon: Lock, title: "Protected", description: "Your data is safe" },
    { icon: Eye, title: "Transparent", description: "Clear policies" },
    { icon: Users, title: "Control", description: "Manage your data" }
  ]
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {secureDatas.map((data) => (
              <div className="text-center">
                <div className="h-12 w-12 text-primary mx-auto mb-3">{<data.icon />}</div>
                <h3 className="font-semibold mb-1">{data.title}</h3>
                <p className="text-xs text-muted-foreground">{data.description}</p>
              </div>
            ))}
          </div>

          {/* Policy Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Personal Information</h3>
                  <p>
                    When you create an account or make a purchase, we collect personal information such as:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Name and contact information (email, phone number, shipping address)</li>
                    <li>Payment information (processed securely through our payment processors)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Purchase history and preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                  <p>
                    We automatically collect certain information when you visit our website:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, clicks)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders, account, and customer service inquiries</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website, products, and services</li>
                  <li>Detect and prevent fraud and security issues</li>
                  <li>Comply with legal obligations</li>
                  <li>Analyze website usage and trends</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>We may share your information with:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (payment processors, shipping carriers, email services)</li>
                  <li><strong>Business Partners:</strong> Companies we partner with to offer joint products or services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
                <p className="mt-3">
                  We do not sell your personal information to third parties for their marketing purposes.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Cookies and Tracking Technologies</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We use cookies and similar technologies to enhance your browsing experience, analyze site traffic,
                  and personalize content. You can control cookies through your browser settings, but some features
                  of our website may not function properly if you disable cookies.
                </p>
                <p>Types of cookies we use:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Essential cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. This includes:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits</li>
                  <li>Employee training on data protection</li>
                  <li>Limited access to personal information</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request your data in a structured, machine-readable format</li>
                  <li><strong>Object:</strong> Object to processing of your personal information</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, please contact us at privacy@elitestore.com.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Our website is not intended for children under 13 years of age. We do not knowingly collect
                  personal information from children under 13. If you are a parent or guardian and believe we
                  have collected information about your child, please contact us immediately.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Your information may be transferred to and processed in countries other than your country of
                  residence. These countries may have different data protection laws. We ensure appropriate
                  safeguards are in place to protect your information.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes
                  by posting the new policy on this page and updating the "Last updated" date. We encourage you
                  to review this policy periodically.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-secondary/30 rounded-lg p-4 mt-4">
                  <p><strong>Email:</strong> privacy@elitestore.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Commerce Street, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;