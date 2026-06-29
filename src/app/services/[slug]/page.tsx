import Link from "next/link";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { services } from "@/lib/site-data";
import ServiceDetailClient from "@/components/ServiceDetailClient";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <>
        <Header />
        <main className="flex-grow bg-white pt-24 pb-16">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <h1 className="text-3xl font-black text-slate-900">Service not found</h1>
            <p className="mt-4 text-slate-600">The requested service page is unavailable.</p>
            <Link href="/services" className="mt-6 inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white">
              Back to services
            </Link>
          </div>
        </main>
        <Footer />
        <FloatingButtons />
      </>
    );
  }

  return <ServiceDetailClient service={service} />;
}
