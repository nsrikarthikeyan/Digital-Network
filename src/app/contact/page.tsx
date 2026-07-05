"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import QuoteDialog from "@/components/QuoteDialog";
import { useState } from "react";

export default function ContactPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <Header onOpenQuote={() => setIsQuoteOpen(true)} />
      <main className="flex-grow bg-slate-50 pt-24 pb-16">
        <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 sm:p-12">
              <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div className="space-y-6">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                    Contact Digital Network
                  </span>
                  <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                    Let’s talk about your next IT upgrade.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-600">
                    Reach out for sales, service, network installations, Google Workspace setup, repairs, AMC packages, and office IT solutions. We will respond quickly and help you choose the best solution for your budget.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-slate-50 p-5 shadow-sm border border-slate-200">
                      <p className="text-sm font-semibold text-slate-900">Phone</p>
                      <a href="tel:+919894740202" className="mt-2 block text-lg font-bold text-blue-600 hover:underline">
                        +91 98947 40202
                      </a>
                      <p className="mt-1 text-sm text-slate-500">Mon–Sat · 9AM–6PM</p>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-5 shadow-sm border border-slate-200">
                      <p className="text-sm font-semibold text-slate-900">Email</p>
                      <a href="mailto:9894740202.surya@gmail.com" className="mt-2 block text-lg font-bold text-blue-600 hover:underline break-all">
                        9894740202.surya@gmail.com
                      </a>
                      <p className="mt-1 text-sm text-slate-500">Fast replies for quotes and service enquiries</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[1.75rem] bg-slate-900 p-8 text-white shadow-2xl shadow-slate-900/10">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.24em] text-blue-300">Contact form</p>
                    <h2 className="text-3xl font-bold">Send a message</h2>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Fill in your details and the type of help you need. Our team will contact you to confirm the next steps.
                    </p>
                  </div>
                  <form className="mt-8 space-y-4 text-sm">
                    <label className="block">
                      <span className="text-slate-300">Name</span>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
                      />
                    </label>
                    <label className="block">
                      <span className="text-slate-300">Email</span>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
                      />
                    </label>
                    <label className="block">
                      <span className="text-slate-300">Phone</span>
                      <input
                        type="tel"
                        placeholder="+91 98947 40202"
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
                      />
                    </label>
                    <label className="block">
                      <span className="text-slate-300">Message</span>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your project or issue"
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
                      />
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsQuoteOpen(true)}
                      className="w-full rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                    >
                      Request a callback
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Office Address</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                438, Vaiyapuri Nagar, 2nd Cross, 7/51A, Anna Colony, Kongu Nagar, Vengamedu, Karur - 639002, Tamil Nadu, India
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Business Hours</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                <li>Monday - Saturday: 9:00 AM - 6:00 PM</li>
                <li>Sunday: Closed</li>
                <li>Emergency support available on request</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">What we help with</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600 list-disc list-inside">
                <li>Sales and installation of computers, laptops, printers, servers, and firewalls.</li>
                <li>Network setup, Wi-Fi, and security solutions for offices.</li>
                <li>Domain management and Google Workspace email support.</li>
                <li>Repairs, maintenance contracts, and service visits.</li>
              </ul>
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
