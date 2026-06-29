"use client";

import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, ShieldCheck, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import QuoteDialog from "@/components/QuoteDialog";
import { useState } from "react";

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <Header onOpenQuote={() => setIsQuoteOpen(true)} />
      <main className="flex-grow bg-white pt-24 pb-16">
        <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                <Award className="mr-2 h-4 w-4" /> Trusted since 2007
              </div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                About Digital Network
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                We are a Karur-based IT partner helping businesses buy, install and maintain dependable technology with honest guidance and long-term support.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Request a consultation
                </button>
                <Link
                  href="/products"
                  className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                >
                  Explore products
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
              <div className="flex items-center gap-3 text-blue-600">
                <ShieldCheck className="h-8 w-8" />
                <h2 className="text-2xl font-bold text-slate-900">Why clients choose us</h2>
              </div>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                {[
                  "18+ years of practical IT experience",
                  "Authorized multi-brand sales and service support",
                  "Fast response for office upgrades and urgent repairs",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <Users className="mb-4 h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Client-first approach</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We listen to how your team works and recommend solutions that improve productivity without unnecessary complexity.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <ShieldCheck className="mb-4 h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Reliable support</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                From installation to repairs and AMC coverage, our support keeps your devices and networks dependable.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <Award className="mb-4 h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Trusted in Karur</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Local expertise, transparent pricing and a reputation built on long-term relationships across the region.
              </p>
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
