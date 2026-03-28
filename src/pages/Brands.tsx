import { Link } from "wouter";
import { motion } from "framer-motion";
import { useBrands } from "@/hooks/use-brands";
import { ArrowRight } from "lucide-react";
import { useLang } from "../lang";

const BASE = import.meta.env.BASE_URL;
const b = (file: string) => `${BASE}images/brands/${file}`;

const brandImages: Record<string, string> = {
  bmw:           b("bmw.jpg"),
  mercedes:      b("mercedes.jpg"),
  audi:          b("audi.jpg"),
  porsche:       b("porsche.jpg"),
  ferrari:       b("ferrari.jpg"),
  lamborghini:   b("lamborghini.jpg"),
  bugatti:       b("bugatti.jpg"),
  bentley:       b("bentley.jpg"),
  "rolls-royce": b("rolls-royce.jpg"),
  mclaren:       b("mclaren.jpg"),
  jaguar:        b("jaguar.jpg"),
  "land-rover":  b("land-rover.jpg"),
  maserati:      b("maserati.jpg"),
  maybach:       b("maybach.jpg"),
  "aston-martin":b("aston-martin.jpg"),
  "mini-cooper": b("mini-cooper.jpg"),
  volkswagen:    b("volkswagen.jpg"),
  jeep:          b("jeep.jpg"),
  dodge:         b("dodge.jpg"),
  lexus:         b("lexus.jpg"),
  infiniti:      b("infiniti.jpg"),
  honda:         b("honda.jpg"),
  toyota:        b("toyota.jpg"),
  nissan:        b("nissan.jpg"),
  volvo:         b("volvo.jpg"),
  geely:         b("geely.jpg"),
  changan:       b("changan.jpg"),
  haval:         b("haval.jpg"),
};

export default function Brands() {
  const { data: brands, isLoading } = useBrands();
  const { lang } = useLang();

  const tiers = ["luxury", "exotic", "premium", "standard"];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* HEADER */}
      <div className="py-20 md:py-24 text-center bg-gradient-to-r from-[#1A609A]/10 via-[#2178BD]/10 to-[#1A609A]/10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {lang === "en" ? (
              <>
                Brands We <span className="text-[#1A609A]">Service</span>
              </>
            ) : (
              <>
                العلامات التي <span className="text-[#1A609A]">نخدمها</span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-black font-semibold max-w-2xl mx-auto"
          >
            {lang === "en"
              ? "We possess the specialized tools, software, and expertise required to service the world's most prestigious automotive brands."
              : "نمتلك الأدوات والخبرة اللازمة لخدمة أفخم العلامات التجارية للسيارات."}
          </motion.p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="h-40 bg-secondary animate-pulse rounded-2xl"
              />
            ))}
          </div>
        ) : (
          <div className="space-y-20">
            {tiers.map((tier) => {
              const tierBrands = brands?.filter((b) => b.tier === tier) || [];
              if (tierBrands.length === 0) return null;

              return (
                <section key={tier}>
                  {/* TITLE */}
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold uppercase tracking-widest text-[#1A609A]">
                      {tier}
                    </h2>
                    <div className="flex-grow h-px bg-border"></div>
                  </div>

                  {/* GRID */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                    {tierBrands.map((brand, idx) => (
                      <motion.div
                        key={brand.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          href={`/brands/${brand.slug}`}
                          className="block h-full"
                        >
                          <div className="relative rounded-2xl overflow-hidden group h-52 shadow-lg">
                            {/* ✅ IMAGE FIXED */}
                            <img
                              src={
                                brandImages[brand.slug] || "/images/hero-bg.png"
                              }
                              alt={brand.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition" />

                            {/* TEXT */}
                            <div className="absolute bottom-4 left-4 text-white">
                              <h3 className="font-bold text-lg">
                                {brand.name}
                              </h3>

                              <span className="text-xs flex items-center gap-1 opacity-80 group-hover:opacity-100">
                                {lang === "en"
                                  ? "View Services"
                                  : "عرض الخدمات"}
                                <ArrowRight size={12} />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
