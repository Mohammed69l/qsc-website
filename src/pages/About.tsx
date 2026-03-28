import { PageHero } from "@/components/PageHero";

export default function About() {
  return (
    <div className="pb-24">
      <PageHero
        image={`${import.meta.env.BASE_URL}images/about-bg.png`}
        title="About"
        titleAccent="QSC"
        subtitle="Riyadh's most trusted independent European and exotic car specialists — setting the standard for premium automotive care."
        overlay="bg-black/60"
        breadcrumbs={[{ label: "About Us" }]}
        cta={{ label: "Book a Service", href: "/contact" }}
      />

      <div className="max-w-4xl mx-auto px-4 mt-16 prose prose-invert prose-lg text-black font-semibold">
        <p>
          Founded on a passion for automotive excellence, Qsc Automotive was
          established to provide a genuine dealership alternative for luxury car
          owners across the Saudi Arabia. We recognized a gap in the market for
          high-end, transparent, and technically advanced auto repair that
          treats every vehicle with the respect it deserves.
        </p>

        <h2 className="text-foreground font-display">Our Mission</h2>
        <p>
          To deliver unparalleled automotive service, combining state-of-the-art
          diagnostic technology with masterful craftsmanship. We ensure your
          luxury vehicle maintains its peak performance, safety, and value
          without the inflated dealership costs.
        </p>

        <h2 className="text-foreground font-display">The QSC Standard</h2>
        <ul>
          <li>
            <strong>Expertise:</strong> Our technicians are factory-trained and
            specialize in European and exotic brands.
          </li>
          <li>
            <strong>Technology:</strong> We invest heavily in original
            manufacturer diagnostic tools.
          </li>
          <li>
            <strong>Transparency:</strong> No hidden fees. We explain every
            repair before touching your vehicle.
          </li>
          <li>
            <strong>Quality:</strong> We use only genuine OEM parts, backing our
            work with comprehensive warranties.
          </li>
        </ul>

        <div className="my-12 p-8 border border-border rounded-2xl bg-card text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4 mt-0">
            Experience the Difference
          </h3>
          <p className="mb-0">
            Join thousands of satisfied customers who trust us with their most
            prized possessions.
          </p>
        </div>
      </div>
    </div>
  );
}
