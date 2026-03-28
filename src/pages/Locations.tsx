import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Locations() {
  const location = {
    city: "Riyadh",
    name: "Saudi Arabia",
    slug: "riyadh",
    address: "Exit 18, Al Kharj Road, An Noor, Riyadh 14321, Saudi Arabia",
    phone: "+966 50 818 1801",
    email: "contact@qscco.sa",
    workingHours: "Monday - Saturday: 8:00 AM - 7:00 PM\nFriday: Closed",
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* HEADER */}
      <div className="bg-card border-b border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-primary">Location</span>
          </motion.h1>

          <p className="text-lg text-black font-semibold max-w-2xl mx-auto">
            Premium luxury car service center in Riyadh, Saudi Arabia.
          </p>
        </div>
      </div>

      {/* CARD */}
      <div className="max-w-4xl mx-auto px-4 pt-16">
        {/* 🔥 PREMIUM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-10 flex flex-col shadow-xl border border-blue-100 bg-gradient-to-br from-[#1A609A]/10 via-white to-[#2178BD]/10 hover:shadow-2xl transition-all duration-300"
        >
          {/* TITLE */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-1">{location.city}</h2>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {location.name}
              </span>
            </div>

            {/* ICON */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1A609A] to-[#2178BD] flex items-center justify-center shadow-md">
              <MapPin size={26} className="text-white" />
            </div>
          </div>

          {/* DETAILS */}
          <div className="space-y-5 mb-10">
            <div className="flex items-start gap-3 font-semibold text-black">
              <MapPin size={20} className="text-primary mt-1" />
              <span>{location.address}</span>
            </div>

            <div className="flex items-center gap-3 font-semibold text-black">
              <Phone size={20} className="text-primary" />
              <span>{location.phone}</span>
            </div>

            <div className="flex items-center gap-3 font-semibold text-black">
              <Mail size={20} className="text-primary" />
              <span>{location.email}</span>
            </div>

            <div className="flex items-start gap-3 font-semibold text-black pt-4 border-t border-blue-100">
              <Clock size={20} className="text-primary mt-1" />
              <span className="whitespace-pre-line">
                {location.workingHours}
              </span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <Link
              href={`/contact?location=${location.slug}`}
              className="flex-1 bg-gradient-to-r from-[#1A609A] to-[#2178BD] text-white py-4 rounded-xl font-bold text-center shadow-md hover:scale-[1.02] transition"
            >
              Book Here
            </Link>

            <a
              href="https://wa.me/966508181801"
              target="_blank"
              className="flex-1 bg-white py-4 rounded-xl font-bold text-center border border-blue-200 hover:bg-blue-50 transition"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
