import { Link } from "wouter";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Wrench,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { useServices } from "@/hooks/use-services";
import { useBrands } from "@/hooks/use-brands";
import { useLang } from "../lang";

export default function Home() {
  const { lang } = useLang();

  const { data: services } = useServices();
  const { data: brands } = useBrands();

  const featuredServices = services?.slice(0, 6) || [];
  const topBrands = brands?.slice(0, 8) || [];

  return (
    <div className="w-full">
      {/* 🔥 HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden text-white">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Luxury Car"
            className="w-full h-full object-cover"
          />

          {/* PERFECT OVERLAY */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-sm font-semibold mb-6 backdrop-blur">
              <Star size={14} className="fill-white" />
              {lang === "en"
                ? "Saudi Arabia’s #1 Premium Auto Service"
                : "أفضل خدمة سيارات فاخرة في السعودية"}
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              {lang === "en" ? (
                <>
                  Excellence in <br />
                  <span className="text-white/80">Automotive Care</span>
                </>
              ) : (
                <>
                  التميز في <br />
                  <span className="text-white/80">خدمة السيارات</span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-lg text-white/90 mb-8 max-w-xl">
              {lang === "en"
                ? "Dealership-quality service for luxury and exotic vehicles without the dealership price tag."
                : "خدمة بجودة الوكالة للسيارات الفاخرة دون تكلفة الوكالة."}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-[#1A609A] rounded-xl font-bold shadow-lg hover:scale-105 transition"
              >
                {lang === "en" ? "Book Appointment" : "احجز موعد"}
              </Link>

              <Link
                href="/services"
                className="px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-[#1A609A] transition"
              >
                {lang === "en" ? "Explore Services" : "استعرض الخدمات"}
              </Link>
            </div>

            {/* Contact */}
            <div className="mt-8 text-sm text-white/80 space-y-1">
              <p>
                📍{" "}
                {lang === "en"
                  ? "Exit 18, Al Kharj Road, Riyadh"
                  : "مخرج 18، طريق الخرج، الرياض"}
              </p>
              <p>📞 +966 50 818 1801</p>
              <p>✉ info@qscco.sa</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: ShieldCheck,
              value: "100%",
              label: { en: "Warranty Safe", ar: "ضمان آمن" },
            },
            {
              icon: Wrench,
              value: "15,000+",
              label: { en: "Cars Serviced", ar: "سيارة تم خدمتها" },
            },
            {
              icon: Clock,
              value: "15+",
              label: { en: "Years Experience", ar: "سنوات خبرة" },
            },
            {
              icon: Star,
              value: "4.9/5",
              label: { en: "Google Rating", ar: "تقييم جوجل" },
            },
          ].map((item, i) => (
            <div key={i}>
              <item.icon className="mx-auto text-blue-600" size={28} />
              <h3 className="text-2xl font-bold">{item.value}</h3>

              {/* ✅ FIXED LINE */}
              <p className="text-sm text-gray-500">
                {item.label[lang as "en" | "ar"]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-blue-600 font-semibold uppercase text-sm">
                {lang === "en" ? "Services" : "الخدمات"}
              </p>
              <h2 className="text-4xl font-bold">
                {lang === "en" ? "Our Premium Services" : "خدماتنا المميزة"}
              </h2>
            </div>

            <Link
              href="/services"
              className="flex items-center gap-2 text-blue-600 font-semibold"
            >
              {lang === "en" ? "View All" : "عرض الكل"} <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.slug}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <CheckCircle2 className="text-blue-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">
          {lang === "en" ? "Trusted Brands" : "العلامات الموثوقة"}
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-gray-500 font-semibold">
          {topBrands.map((brand) => (
            <span key={brand.slug}>{brand.name}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1A609A] to-[#2178BD] text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          {lang === "en" ? "Ready to Book Your Service?" : "جاهز لحجز خدمتك؟"}
        </h2>

        <Link
          href="/contact"
          className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold"
        >
          {lang === "en" ? "Book Now" : "احجز الآن"}
        </Link>
      </section>
    </div>
  );
}
