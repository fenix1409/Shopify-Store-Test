import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import Footer from "../components/Footer";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" size="lg" variant="accent" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">support@elitestore.com</p>
                    <p className="text-muted-foreground">sales@elitestore.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">123 Commerce Street</p>
                    <p className="text-muted-foreground">New York, NY 10001</p>
                    <p className="text-muted-foreground">United States</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
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

export default Contact;
