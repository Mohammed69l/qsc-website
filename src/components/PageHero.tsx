import { motion } from "framer-motion";
import { Link } from "wouter";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  image: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  overlay?: string;
  height?: string;
  cta?: { label: string; href: string };
  breadcrumbs?: Breadcrumb[];
  align?: "left" | "center";
}

export function PageHero({
  image,
  title,
  titleAccent,
  subtitle,
  overlay = "bg-black/55",
  height = "h-[58vh] min-h-[420px]",
  cta,
  breadcrumbs,
  align = "center",
}: PageHeroProps) {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        style={{ transform: "scale(1.05)" }}
      />

      {/* Dark overlay */}
      <div className={`absolute inset-0 ${overlay}`} />

      {/* Bottom QSC blue accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary z-20" />

      {/* Content */}
      <div className={`relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col ${alignClass} gap-4`}>

        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-white/60 text-sm font-medium mb-2"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/90">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-bold text-white leading-tight"
        >
          {title}
          {titleAccent && (
            <> <span className="text-primary">{titleAccent}</span></>
          )}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTA button */}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href={cta.href}
              className="inline-block mt-2 px-8 py-3.5 bg-primary text-white font-bold rounded-xl
                         shadow-lg hover:bg-[#1A609A] hover:-translate-y-0.5 active:scale-[0.98] transition-all"
            >
              {cta.label}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
