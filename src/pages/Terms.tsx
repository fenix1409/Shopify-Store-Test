import Footer from "../components/Footer";
import Header from "../components/Header";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  By accessing or using Shopify Store's website and services, you agree to be bound by these Terms of Service
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
                  from using or accessing this site.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Permission is granted to temporarily access the materials on Shopify Store's website for personal,
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
                  under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  To access certain features of our service, you may be required to create an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and accept all risks of unauthorized access</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Be responsible for all activities that occur under your account</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Product Information and Pricing</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We strive to provide accurate product descriptions and pricing. However, we do not warrant that product
                  descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free.
                </p>
                <p>
                  We reserve the right to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Limit the quantities of items available for purchase</li>
                  <li>Refuse or cancel orders at our discretion</li>
                  <li>Correct pricing errors</li>
                  <li>Change or discontinue products without notice</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Orders and Payment</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  By placing an order, you represent that you are authorized to use the payment method provided. All payments
                  are processed securely through our payment processors. We accept major credit cards, PayPal, and other
                  payment methods as indicated on our site.
                </p>
                <p>
                  You agree to pay all charges incurred by you or any users of your account at the prices in effect when
                  such charges are incurred, including applicable taxes and shipping fees.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Shipping and Delivery</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We will arrange for shipment of ordered products to you. Please review our Shipping Policy for detailed
                  information about shipping methods, costs, and delivery times. Risk of loss and title for items pass to
                  you upon delivery to the carrier.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Returns and Refunds</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Our Return Policy governs the return of products purchased through our website. Please review our Return
                  Policy for complete details on eligibility, procedures, and timelines for returns and refunds.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Prohibited Activities</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  You may not access or use the site for any purpose other than that for which we make it available.
                  Prohibited activities include, but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Violating any applicable laws or regulations</li>
                  <li>Infringing upon intellectual property rights</li>
                  <li>Transmitting viruses, malware, or other malicious code</li>
                  <li>Engaging in unauthorized framing or linking</li>
                  <li>Interfering with or disrupting the site's operation</li>
                  <li>Attempting to gain unauthorized access to any portion of the site</li>
                  <li>Using automated systems to access the site without permission</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Intellectual Property</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  All content on this website, including but not limited to text, graphics, logos, images, audio clips,
                  digital downloads, and software, is the property of Shopify Store or its content suppliers and is protected
                  by international copyright laws.
                </p>
                <p>
                  The compilation of all content on this site is the exclusive property of Shopify Store and is protected by
                  international copyright laws.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Disclaimer of Warranties</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  The materials on Shopify Store's website are provided on an 'as is' basis. Shopify Store makes no warranties,
                  expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
                  implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
                  of intellectual property or other violation of rights.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Limitation of Liability</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  In no event shall Shopify Store or its suppliers be liable for any damages (including, without limitation,
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                  to use the materials on Shopify Store's website, even if Shopify Store or an authorized representative has been
                  notified orally or in writing of the possibility of such damage.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">12. Indemnification</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  You agree to indemnify, defend, and hold harmless Shopify Store and its officers, directors, employees,
                  agents, and third parties from and against any claims, liabilities, damages, judgments, awards, losses,
                  costs, expenses, or fees arising out of or relating to your violation of these Terms of Service or your
                  use of the website.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the State of
                  New York, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">14. Changes to Terms</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We reserve the right to revise these terms of service at any time without notice. By using this website,
                  you are agreeing to be bound by the current version of these terms of service.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-secondary/30 rounded-lg p-4 mt-4">
                  <p><strong>Email:</strong> legal@shopifystore.com</p>
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

export default Terms;