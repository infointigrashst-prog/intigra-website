import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";
import CustomLayout from "@/components/layout/layout";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: "Contact INTIGRA - Get a Powder Coating Quote",
  description:
    "Get in touch with INTIGRA for your powder coating needs. Find our contact information, address, and send us a message to receive a free quote or consultation.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact INTIGRA for Expert Powder Coating Services",
    description:
      "Reach out to INTIGRA for quotes, consultations, or any questions about our powder coating solutions.",
    url: "/contact",
    images: [
      {
        url: "https://placehold.co/1200x630.png", // Placeholder, replace with actual URL
        width: 1200,
        height: 630,
        alt: "Contact INTIGRA for Powder Coating",
        type: "image/png",
      },
    ],
  },
  twitter: {
    title: "Contact INTIGRA - Your Powder Coating Experts",
    description:
      "Connect with INTIGRA today to discuss your powder coating project and get a personalized quote.",
    images: ["https://placehold.co/1200x630.png"], // Placeholder, replace with actual URL
  },
};

const contactDetails = [
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    label: "Address",
    value: "Intigra Coatings Rajkot, Gujarat, India",
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    label: "Phone",
    value: (
      <a
        href="tel:+918128228778"
        className="text-gray-700 hover:text-orange-600 transition-colors"
      >
        +91 81282 28778
      </a>
    ),
  },
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    label: "Email",
    value: (
      <a
        href="mailto:info.intigra.shst@gmail.com"
        className="text-gray-700 hover:text-orange-600 transition-colors"
      >
        info.intigra.shst@gmail.com
      </a>
    ),
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    label: "Business Hours",
    value: "Thu - Thu: 9 AM - 7 PM",
  },
];

export default function ContactPage() {
  return (
    <CustomLayout>
      <div>
        <PageHeader
          title="Get in Touch with INTIGRA"
          description="We're here to help with all your powder coating needs. Reach out to us for quotes, consultations, or any questions you may have."
        />

        <section className="py-10 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
          {/* Decorative Powder Spray Circles */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-200 opacity-15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-gray-300 opacity-10 rounded-full blur-3xl animate-pulse"></div>

          <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
            {/* <h2 className="text-4xl md:text-5xl font-bold font-headline text-gray-900 text-center mb-12">
      Get in Touch with <span className="text-orange-600">INTIGRA</span>
    </h2> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {/* Contact Info & Map */}
              <div className="space-y-6 md:space-y-10">
                {/* Contact Information */}
                <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 hover:shadow-xl transition-all duration-500 border-l-4 border-orange-500">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Our Information
                  </h3>
                  <div className="space-y-4">
                    {contactDetails.map((detail) => (
                      <div
                        key={detail.label}
                        className="flex items-start gap-4"
                      >
                        <div className="flex-shrink-0 text-orange-500 mt-0.5">
                          {detail.icon}
                        </div>
                        <div>
                          <h2 className="font-semibold text-gray-900">
                            {detail.label}
                          </h2>
                          <h3 className="text-gray-700">{detail.value}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-orange-500 hover:shadow-xl transition-all duration-500">
                  {/* <h3 className="text-2xl font-bold text-primary text-center py-4">
                    Find Us Here
                  </h3> */}
                  <div className="relative w-full h-[260px] sm:h-[320px] md:h-[450px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.964458162869!2d70.80483645311745!3d22.1691199272777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958356a0e8a57ef%3A0x9524add0ba5f6cb6!2sIntigra%20Coatings!5e0!3m2!1sen!2sin!4v1765630632650!5m2!1sen!2sin"
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                    ></iframe>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 text-center py-2">
                    Our facility is conveniently located and easily accessible.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white shadow-2xl rounded-xl p-6 md:p-8 transition-all duration-500 md:hover:shadow-3xl md:hover:scale-105 border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Send Us a Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </CustomLayout>
  );
}
