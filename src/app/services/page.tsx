"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, CheckCircle2, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import QuoteDialog from "@/components/QuoteDialog";
import { useState } from "react";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <Header onOpenQuote={() => setIsQuoteOpen(true)} />
      <main className="flex-grow bg-white pt-24 pb-16">
        <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                <Briefcase className="mr-2 h-4 w-4" /> Business IT services
              </div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Services that keep your business moving
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                From everyday support to network design and AMC maintenance, Digital Network helps your team stay productive with dependable service.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Request a service visit
                </button>
                <Link
                  href="/about"
                  className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                >
                  Learn about us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {services.map((service) => (
              <div key={service.slug} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                      <Sparkles className="mr-2 h-4 w-4" /> {service.title}
                    </div>
                    <p className="mt-4 text-lg font-semibold text-slate-700">{service.short}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.overview}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 lg:min-w-[280px]">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Highlights</h3>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600">
                      {service.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-600" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 rounded-2xl bg-slate-50 p-5 lg:grid-cols-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Ideal for</h4>
                    <p className="mt-2 text-sm text-slate-600">{service.idealFor.join(" | ")}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Process</h4>
                    <p className="mt-2 text-sm text-slate-600">{service.process.join(" | ")}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Deliverables</h4>
                    <p className="mt-2 text-sm text-slate-600">{service.deliverables.join(" | ")}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Technical scope</h4>
                    <p className="mt-2 text-sm text-slate-600">{service.tools.join(" | ")}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-white p-5 sm:flex-row sm:items-center sm:justify-between border border-slate-200">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">What you gain</h4>
                    <p className="mt-1 text-sm text-slate-600">{service.benefits.join(" | ")}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                    >
                      View details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <button
                      onClick={() => setIsQuoteOpen(true)}
                      className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                    >
                      {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
      <QuoteDialog isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
