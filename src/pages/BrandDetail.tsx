import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { useBrand } from "@/hooks/use-brands";
import { useServices } from "@/hooks/use-services";
import { AlertCircle, ChevronRight, Wrench, ShieldCheck, MapPin } from "lucide-react";

export default function BrandDetail() {
  const [, params] = useRoute("/brands/:slug");
  const slug = params?.slug || "";
  
  const { data: brand, isLoading: brandLoading, isError } = useBrand(slug);
  const { data: allServices, isLoading: servicesLoading } = useServices();

  if (brandLoading) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isError || !brand) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <AlertCircle size={64} className="text-destructive mb-6" />
        <h1 className="text-3xl font-bold mb-4">Brand Not Found</h1>
        <Link href="/brands" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg">Back to Brands</Link>
      </div>
    );
  }

  // Filter services related to this brand if they exist, else show popular ones
  const brandServices = brand.services 
    ? allServices?.filter(s => brand.services?.includes(s.slug)) 
    : allServices?.slice(0, 6);

  return (
    <div className="pb-24">
      {/* Brand Hero */}
      <div className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-black font-semibold mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/brands" className="hover:text-primary transition-colors">Brands</Link>
            <ChevronRight size={14} />
            <span className="text-primary font-medium">{brand.name}</span>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-card border border-border shadow-2xl flex items-center justify-center shrink-0">
               <span className="text-5xl font-display font-bold text-foreground opacity-50">{brand.name.charAt(0)}</span>
            </div>
            <div className="text-center md:text-left">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                {brand.tier} Class
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
                {brand.name} <span className="text-black font-semibold font-light">Service</span>
              </h1>
              <p className="text-lg text-black font-semibold max-w-2xl">
                {brand.description || `Specialized repair and maintenance services for ${brand.name} vehicles in the UAE. Our certified technicians ensure dealer-level quality.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-display font-bold mb-6">Expert {brand.name} Mechanics</h2>
              <div className="prose prose-invert text-black font-semibold">
                <p>Your {brand.name} is a marvel of modern engineering, and it requires specialized care. We utilize original factory diagnostic equipment specifically designed for {brand.name} to accurately identify issues and resolve them efficiently.</p>
                <p>From routine minor services to complex engine rebuilds, our facility is fully equipped to handle every aspect of {brand.name} maintenance.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-6">Popular {brand.name} Services</h2>
              {servicesLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[1,2,3,4].map(i => <div key={i} className="h-24 bg-secondary animate-pulse rounded-xl" />)}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {brandServices?.map(service => (
                    <Link key={service.slug} href={`/services/${service.slug}`}>
                      <div className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Wrench size={18} />
                        </div>
                        <span className="font-semibold">{service.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          </div>

          <div>
            <div className="glass-panel p-8 rounded-2xl sticky top-28">
              <h3 className="text-xl font-bold mb-4 border-b border-border pb-4">Service Your {brand.name}</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <ShieldCheck size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-black font-semibold">100% genuine parts used for all replacements</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wrench size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-black font-semibold">Factory-approved diagnostic tools</span>
                </li>
              </ul>
              <Link 
                href={`/contact?brand=${brand.slug}`}
                className="block w-full py-4 bg-primary text-primary-foreground text-center rounded-xl font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-transform"
              >
                Book {brand.name} Service
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
