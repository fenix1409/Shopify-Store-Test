import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our support team to initiate a return, and we'll provide you with a prepaid shipping label."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 5-7 business days. Express shipping is available for 2-3 business day delivery. International orders may take 10-15 business days depending on the destination."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship to over 50 countries worldwide. International shipping rates are calculated at checkout based on your location and order weight."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order using our Track Order page by entering your order number and email address."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are secured with SSL encryption."
    },
    {
      question: "Are your products authentic?",
      answer: "Absolutely! We source all our products directly from authorized distributors and manufacturers. Every product comes with a certificate of authenticity and our quality guarantee."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "You can cancel or modify your order within 1 hour of placing it. After that, orders are processed immediately and cannot be modified. Please contact our support team as soon as possible if you need to make changes."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes! Gift wrapping is available for $5 per item at checkout. We'll include a personalized gift message and package your items in premium gift wrap."
    },
    {
      question: "What if my item arrives damaged?",
      answer: "We're sorry if your item arrives damaged! Please contact us within 48 hours of delivery with photos of the damage, and we'll send you a replacement or issue a full refund immediately."
    },
    {
      question: "Do you have a customer loyalty program?",
      answer: "Yes! Our Elite Rewards program gives you points for every purchase, which can be redeemed for discounts on future orders. Sign up is free and you'll start earning points immediately."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Find answers to common questions about our products, shipping, and policies
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-lg px-6 border shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 bg-primary text-primary-foreground rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="mb-6 opacity-90">
                Can't find the answer you're looking for? Our customer support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-md font-medium hover:bg-white/90 transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="mailto:support@shopifystore.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-md font-medium hover:bg-white/20 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
