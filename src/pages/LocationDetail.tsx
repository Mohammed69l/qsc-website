import { useRoute, Link } from "wouter";
import { useLocation } from "@/hooks/use-locations";
import { AlertCircle, MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function LocationDetail() {
  const [, params] = useRoute("/locations/:slug");
  const slug = params?.slug || "";
  
  const { data: location, isLoading, isError } = useLocation(slug);

  if (isLoading) return <div className="min-h-[60vh] flex justify-center items-center"><div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>;
  if (isError || !location) return <div className="min-h-[60vh] flex flex-col justify-center items-center"><AlertCircle size={48} className="text-destructive mb-4"/><h2>Location not found</h2></div>;

  return (
    <div className="pb-24">
      <div className="bg-card py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">SwissAuto <span className="text-primary">{location.city}</span></h1>
          <p className="text-black font-semibold max-w-2xl mx-auto">{location.name}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="glass-panel p-8 rounded-2xl h-fit">
          <h2 className="text-2xl font-bold mb-6 border-b border-border pb-4">Branch Details</h2>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-primary shrink-0"><MapPin size={20}/></div>
              <div><p className="font-semibold">Address</p><p className="text-black font-semibold">{location.address}</p></div>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-primary shrink-0"><Phone size={20}/></div>
              <div><p className="font-semibold">Phone</p><p className="text-black font-semibold">{location.phone}</p></div>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-primary shrink-0"><Clock size={20}/></div>
              <div><p className="font-semibold">Working Hours</p><p className="text-black font-semibold whitespace-pre-line">{location.workingHours || "Mon - Sat: 8:00 AM - 7:00 PM\nSunday: Closed"}</p></div>
            </li>
          </ul>

          <div className="mt-8 flex gap-4">
            <Link href={`/contact?location=${location.slug}`} className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-bold text-center">Book Service</Link>
            {location.mapUrl && <a href={location.mapUrl} target="_blank" rel="noreferrer" className="flex-1 border border-border py-3 rounded-lg font-bold text-center flex justify-center items-center gap-2"><Navigation size={18}/> Get Directions</a>}
          </div>
        </div>

        <div className="h-[400px] lg:h-full min-h-[400px] bg-secondary rounded-2xl border border-border flex items-center justify-center text-black font-semibold overflow-hidden relative">
          {/* Mock map placeholder - would use iframe in reality */}
          <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
          <MapPin size={48} className="text-primary relative z-10 mb-4" />
          <span className="relative z-10 block mt-12 font-bold text-lg">Map View</span>
        </div>
      </div>
    </div>
  );
}
