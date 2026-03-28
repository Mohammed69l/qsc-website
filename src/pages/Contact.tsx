import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearch } from "wouter";
import { PageHero } from "@/components/PageHero";
import { useContactForm } from "@/hooks/use-contact";
import { useServices } from "@/hooks/use-services";
import { useBrands } from "@/hooks/use-brands";
import { useLocations } from "@/hooks/use-locations";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required").optional().or(z.literal("")),
  phone: z.string().min(8, "Valid phone required"),
  service: z.string().optional(),
  brand: z.string().optional(),
  location: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const search = useSearch();
  const searchParams = new URLSearchParams(search);
  
  const { mutate: submitForm, isPending } = useContactForm();
  const { data: services } = useServices();
  const { data: brands } = useBrands();
  const { data: locations } = useLocations();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: searchParams.get("service") || "",
      brand: searchParams.get("brand") || "",
      location: searchParams.get("location") || "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    submitForm({ data }, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen relative pb-24">
      <PageHero
        image={`${import.meta.env.BASE_URL}images/contact-bg.png`}
        title="Book Your"
        titleAccent="Service"
        subtitle="Schedule your appointment today and experience dealership-quality care for your vehicle."
        overlay="bg-black/55"
        height="h-[52vh] min-h-[380px]"
        breadcrumbs={[{ label: "Contact" }]}
      />

      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
        <div className="glass-panel p-8 md:p-12 rounded-2xl shadow-2xl">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Full Name *</label>
                <input 
                  {...form.register("name")}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
                {form.formState.errors.name && <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Phone Number *</label>
                <input 
                  {...form.register("phone")}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="+971 50 123 4567"
                />
                {form.formState.errors.phone && <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Email Address</label>
              <input 
                {...form.register("email")}
                type="email"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Vehicle Brand</label>
                <select 
                  {...form.register("brand")}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="">Select Brand</option>
                  {brands?.map(b => <option key={b.slug} value={b.slug}>{b.name}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Service Required</label>
                <select 
                  {...form.register("service")}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="">Select Service</option>
                  {services?.map(s => <option key={s.slug} value={s.slug}>{s.name}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Preferred Location</label>
                <select 
                  {...form.register("location")}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="">Select Location</option>
                  {locations?.map(l => <option key={l.slug} value={l.slug}>{l.city}</option>)}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Additional Details (Optional)</label>
              <textarea 
                {...form.register("message")}
                rows={4}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Please describe any specific issues or requirements..."
              />
            </div>

            <button 
              type="submit" 
              disabled={isPending}
              className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isPending ? "Submitting..." : "Submit Booking Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
