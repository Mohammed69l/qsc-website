import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { useService } from "@/hooks/use-services";
import { CheckCircle2, AlertCircle, Wrench, ShieldCheck, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug || "";
  
  const { data: service, isLoading, isError } = useService(slug);

  if (isLoading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <p className="mt-4 text-black font-semibold">Loading service details...</p>
      </div>
    );
  }

  if (isError || !service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <AlertCircle size={64} className="text-destructive mb-6" />
        <h1 className="text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
        <p className="text-black font-semibold mb-8 max-w-md">The service you are looking for does not exist or has been moved.</p>
        <Link href="/services" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* Hero Header */}
      <div className="relative py-20 md:py-32 bg-card border-b border-border overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-black font-semibold mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-primary font-medium">{service.name}</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              {service.category.replace(/-/g, ' ')}
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              {service.name}
            </h1>
            <p className="text-xl text-black font-semibold max-w-3xl leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Details */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <Wrench className="text-primary" /> Service Overview
              </h2>
              <div className="prose prose-invert max-w-none text-black font-semibold">
                <p className="text-lg">
                  At SwissAuto, our {service.name.toLowerCase()} is performed by highly trained specialists using state-of-the-art diagnostic equipment. We adhere strictly to manufacturer guidelines to ensure your vehicle performs at its absolute best.
                </p>
                <p>
                  Whether you drive a daily commuter or a high-performance exotic, maintaining your vehicle's systems is crucial for longevity, safety, and performance. Our transparent process means you are informed at every step, with zero hidden costs.
                </p>
              </div>
            </section>

            {service.features && service.features.length > 0 && (
              <section>
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary" /> What's Included
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50"
                    >
                      <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="glass-panel p-8 rounded-2xl sticky top-28">
              <h3 className="text-xl font-bold mb-4">Book this service</h3>
              <p className="text-sm text-black font-semibold mb-6">
                Schedule your {service.name.toLowerCase()} today. Our experts are ready to help.
              </p>
              <Link 
                href={`/contact?service=${service.slug}`}
                className="block w-full py-4 bg-primary text-primary-foreground text-center rounded-xl font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-transform mb-4"
              >
                Request a Quote
              </Link>
              <a 
                href="tel:80079477"
                className="block w-full py-4 bg-secondary text-secondary-foreground border border-border text-center rounded-xl font-bold hover:bg-secondary/80 transition-colors"
              >
                Call 800 79477
              </a>
              
              <hr className="my-8 border-border" />
              
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Why SwissAuto?</h4>
              <ul className="space-y-3 text-sm text-black font-semibold">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary"/> Dealer alternative</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary"/> Genuine OEM parts</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary"/> Certified mechanics</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary"/> Warranty on parts & labor</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
