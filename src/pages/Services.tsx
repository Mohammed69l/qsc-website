import { Link } from "wouter";
import { motion } from "framer-motion";
import { useServices } from "@/hooks/use-services";
import { Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import { useLang } from "../lang";
import { PageHero } from "@/components/PageHero";

export default function Services() {
  const { data: services, isLoading } = useServices();
  const { lang } = useLang();

  const categories = Array.from(
    new Set(services?.map((s) => s.category) || []),
  );

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHero
        image={`${import.meta.env.BASE_URL}images/hero-bg.jpg`}
        title={lang === "en" ? "Our" : "خدماتنا"}
        titleAccent={lang === "en" ? "Services" : "المميزة"}
        subtitle={
          lang === "en"
            ? "Comprehensive auto repair and maintenance solutions utilizing cutting-edge diagnostic equipment and highly trained technicians."
            : "حلول شاملة لصيانة وإصلاح السيارات باستخدام أحدث الأجهزة وفنيين محترفين."
        }
        overlay="bg-gradient-to-r from-black/70 via-black/50 to-[#2178BD]/40"
        breadcrumbs={[{ label: lang === "en" ? "Services" : "الخدمات" }]}
      />

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="h-64 bg-secondary animate-pulse rounded-2xl"
              />
            ))}
          </div>
        ) : (
          <div className="space-y-24">
            {categories.map((category) => {
              const categoryServices =
                services?.filter((s) => s.category === category) || [];

              return (
                <div key={category}>
                  {/* CATEGORY TITLE */}
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-3xl font-bold capitalize text-[#1A609A]">
                      {category.replace(/-/g, " ")}
                    </h2>
                    <div className="flex-grow h-px bg-border"></div>
                  </div>

                  {/* CARDS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryServices.map((service, idx) => (
                      <motion.div
                        key={service.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          href={`/services/${service.slug}`}
                          className="block h-full"
                        >
                          <div
                            className="h-full rounded-2xl p-6 border border-blue-100 
                                          bg-gradient-to-br from-[#1A609A]/5 via-white to-[#2178BD]/5
                                          hover:shadow-xl hover:border-[#1A609A]/30 transition-all duration-300 group"
                          >
                            {/* ICON */}
                            <div className="flex justify-between items-start mb-6">
                              <div className="w-12 h-12 rounded-lg bg-[#1A609A]/10 flex items-center justify-center text-[#1A609A]">
                                <Wrench size={24} />
                              </div>

                              <ArrowRight
                                size={20}
                                className="text-black group-hover:text-[#1A609A] group-hover:translate-x-1 transition-all"
                              />
                            </div>

                            {/* TITLE */}
                            <h3 className="text-xl font-bold text-foreground mb-3">
                              {service.name}
                            </h3>

                            {/* DESC */}
                            <p className="text-sm text-black font-semibold mb-6 line-clamp-3">
                              {service.description}
                            </p>

                            {/* FEATURES */}
                            {service.features &&
                              service.features.length > 0 && (
                                <ul className="space-y-2 mt-auto">
                                  {service.features
                                    .slice(0, 2)
                                    .map((feature, i) => (
                                      <li
                                        key={i}
                                        className="flex items-start gap-2 text-xs text-black font-semibold"
                                      >
                                        <CheckCircle2
                                          size={14}
                                          className="text-[#1A609A] shrink-0 mt-0.5"
                                        />
                                        <span className="truncate">
                                          {feature}
                                        </span>
                                      </li>
                                    ))}
                                </ul>
                              )}
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
