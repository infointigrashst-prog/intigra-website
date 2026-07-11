import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";
import CustomLayout from "@/components/layout/layout";
import { COMPANY_DETAILS } from "@/lib/staticData";
import BubbleBackground from "@/components/comman/BubbleBackground";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || COMPANY_DETAILS.siteUrl;

/* --- Production-Grade Search Engine Optimization Metadata --- */
export const metadata: Metadata = {
  title: "Contact INTIGRA Coatings | Get a Powder Coating Quote in Rajkot",
  description:
    "Get in touch with INTIGRA, Rajkot's leading automated powder coating plant. Request a free industrial metal finishing quote, book sample processing, or consult our technical coating team.",
  keywords: [
    "contact intigra coatings",
    "powder coating quote rajkot",
    "industrial coating plant contact",
    "metal finishing services gujarat phone number",
    "intigra coatings address gujarat",
  ],
  alternates: {
    // FIXED: Upgraded from a relative path to an absolute URL string for precise indexing
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact INTIGRA Coatings | Request Free Quote & Consultation",
    description:
      "Connect with our automated surface protection facility in Gujarat. Submit your industrial production blueprints for transparent, competitive batch processing estimations.",
    url: `${siteUrl}/contact`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-home.png`, // Replaced placeholder domain with production URL assets structure
        width: 1200,
        height: 630,
        alt: "Contact INTIGRA Powder Coating Facilities in Rajkot",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact INTIGRA | Industrial Surface Treatment Experts",
    description:
      "Reach out today via phone, email, or our built-in contact module to schedule a project assessment or request coating layer density testing.",
    images: [`${siteUrl}/images/og-home.png`],
  },
};

const contactDetails = [
  {
    icon: <MapPin className="h-6 w-6" />,
    label: "Address",
    value: COMPANY_DETAILS.address.formatted,
  },
  {
    icon: <Phone className="h-6 w-6" />,
    label: "Phone",
    value: (
      <a
        href={`tel:${COMPANY_DETAILS.telephone}`}
        className="text-gray-700 hover:text-orange-600 transition-colors"
      >
        {COMPANY_DETAILS.telephoneFormatted}
      </a>
    ),
  },
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    value: (
      <a
        href={`mailto:${COMPANY_DETAILS.email}`}
        className="text-gray-700 hover:text-orange-600 transition-colors font-break"
      >
        {COMPANY_DETAILS.email}
      </a>
    ),
  },
  {
    icon: <Clock className="h-6 w-6" />,
    label: "Business Hours",
    value: COMPANY_DETAILS.businessHours,
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

        <section
          className="py-10 relative overflow-hidden"
          style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}
          aria-label="Contact Information and Inquiries Form"
        >
          {/* Reusable Background bubbles canvas */}
          <BubbleBackground opacity={0.65} theme="light" />
          {/* Subtle glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-orange-500 opacity-[0.03] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500 opacity-[0.03] blur-[100px] pointer-events-none" />

          <div className="container max-w-screen-xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Info & Map Column */}
              <div className="space-y-8">
                {/* Contact Information Card */}
                <div className="bg-white border border-slate-200 p-6 md:p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-none reveal">
                  <h2 className="font-display text-3xl text-[#1E3A8A] tracking-[1px] uppercase mb-6">
                    Our Information
                  </h2>
                  <div className="space-y-6">
                    {contactDetails.map((detail) => (
                      <div
                        key={detail.label}
                        className="flex items-start gap-4"
                      >
                        <div className="flex-shrink-0 text-orange-500 mt-1">
                          {detail.icon}
                        </div>
                        <div>
                          <p className="font-ui font-bold text-slate-500 text-xs tracking-wider uppercase">
                            {detail.label}
                          </p>
                          <div className="text-[#1E3A8A] mt-1 text-sm sm:text-base font-medium leading-relaxed">
                            {detail.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Section Card */}
                <div className="bg-white border border-slate-200 p-2 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-none reveal" style={{ transitionDelay: "80ms" }}>
                  <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] rounded-none overflow-hidden">
                    <iframe
                      title="INTIGRA Powder Coating Plant Location Map in Rajkot"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.964458162869!2d70.80483645311745!3d22.1691199272777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958356a0e8a57ef%3A0x9524add0ba5f6cb6!2sIntigra%20Coatings!5e0!3m2!1sen!2sin!4v1765630632650!5m2!1sen!2sin"
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="mt-2 text-xs text-slate-500 text-center py-2 italic font-medium">
                    Our coating facility is located in Rajkot's primary engineering hub for convenient logistical access.
                  </p>
                </div>
              </div>

              {/* Contact Form Column */}
              <div className="bg-white border border-slate-200 p-6 md:p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 rounded-none h-fit reveal" style={{ transitionDelay: "120ms" }}>
                <h2 className="font-display text-3xl text-[#1E3A8A] tracking-[1px] uppercase mb-2">
                  Send Us a Message
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mb-6 leading-relaxed">
                  Fill out the form below and an applications engineer will review your coating specifications shortly.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </CustomLayout>
  );
}
