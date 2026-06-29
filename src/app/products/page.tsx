"use client";

import Link from "next/link";
import { Boxes, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import QuoteDialog from "@/components/QuoteDialog";
import { useState } from "react";
import { products } from "@/lib/site-data";

export default function ProductsPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <Header onOpenQuote={() => setIsQuoteOpen(true)} />
      <main className="flex-grow bg-white pt-24 pb-16">
        <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                <Boxes className="mr-2 h-4 w-4" /> Multi-brand product range
              </div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Products built for business growth
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                Choose from reliable laptops, dependable desktops, secure networking gear and essential accessories tailored for modern workspaces.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Request product quote
                </button>
                <Link
                  href="/services"
                  className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                >
                  View services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid auto-rows-fr gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div key={product.title} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                    {product.category}
                  </span>
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="mt-5 min-h-[56px] text-xl font-bold leading-7 text-slate-900">{product.title}</h3>
                <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-600">{product.description}</p>
                <p className="mt-4 min-h-[112px] text-sm leading-7 text-slate-600">{product.fullDetails}</p>
                <div className="mt-5">
                  <h4 className="text-sm font-semibold text-slate-900">Key features</h4>
                  <ul className="mt-2 space-y-2 text-sm text-slate-600">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-blue-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5">
                  <h4 className="text-sm font-semibold text-slate-900">Product details</h4>
                  <ul className="mt-2 space-y-2 text-sm text-slate-600">
                    {product.specifications.map((specification) => (
                      <li key={specification} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                        <span>{specification}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-5">
                  <div className="grid min-h-[220px] gap-3 rounded-2xl bg-slate-50 p-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Available brands</h4>
                      <p className="mt-1 text-sm text-slate-600">{product.brands.join(" | ")}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Common applications</h4>
                      <p className="mt-1 text-sm text-slate-600">{product.applications.join(" | ")}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Support included</h4>
                      <p className="mt-1 text-sm text-slate-600">{product.supportIncluded.join(" | ")}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Ask about {product.title}
                  </button>
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
