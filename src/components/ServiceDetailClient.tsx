"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import QuoteDialog from "@/components/QuoteDialog";
import type { ServiceItem } from "@/lib/site-data";

export default function ServiceDetailClient({ service }: { service: ServiceItem }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <Header onOpenQuote={() => setIsQuoteOpen(true)} />
      <main className="flex-grow bg-white pt-24 pb-16">
        <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
              <ArrowLeft className="h-4 w-4" /> Back to all services
            </Link>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                  <Sparkles className="mr-2 h-4 w-4" /> {service.title}
                </div>
                <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                  {service.title}
                </h1>
                <p className="text-lg leading-8 text-slate-600">{service.description}</p>
                <p className="text-sm leading-8 text-slate-600">{service.overview}</p>
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  {service.cta}
                </button>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
                <h2 className="text-xl font-bold text-slate-900">Service details</h2>
                <div className="mt-5 space-y-4 text-sm text-slate-600">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-900">Why it helps</h3>
                    <ul className="mt-2 space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-900">Best suited for</h3>
                    <p className="mt-2">{service.idealFor.join(" | ")}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-900">Our process</h3>
                    <p className="mt-2">{service.process.join(" | ")}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-900">Deliverables</h3>
                    <ul className="mt-2 space-y-2">
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-900">Technical scope</h3>
                    <p className="mt-2">{service.tools.join(" | ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
      <QuoteDialog isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
