"use client";

import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubLevel, setSelectedSubLevel] = useState<string>("Certificates");
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const resetNavigation = () => {
    setSelectedCategory(null);
    setSelectedSubLevel("Certificates");
    setSelectedSubject(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      <div>
        {/* Top Header */}
        <header className="bg-emerald-700 text-white shadow-md sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="cursor-pointer" onClick={resetNavigation}>
              <h1 className="text-2xl font-extrabold tracking-tight">PAST PAPERS KENYA</h1>
              <p className="text-xs text-emerald-100">Official Portal by CEO Hamza Osman</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:0726525991"
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-semibold transition shadow flex items-center gap-2"
              >
                📞 0726525991
              </a>
              <a
                href="https://wa.me/message/U3DXJ5FM47B5A1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-semibold transition shadow flex items-center gap-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp CEO
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section: Text on Left, Huge Clean Photo on Right */}
        <section className="bg-slate-900 text-white py-14 px-4 border-b border-emerald-600">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            {/* Left Content Column */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-emerald-400 font-extrabold text-sm uppercase tracking-widest mb-2">
                
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
                Welcome to <span className="text-emerald-400">HAMZA OSMAN</span> Websites
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl mb-6 leading-relaxed">
                Instant PDF downloads for MKU & all Kenyan Universities, Colleges, High School subjects (Form 1-4), and CBC notes.
              </p>

              {/* Breadcrumb Navigation */}
              {selectedCategory && (
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm bg-slate-800 py-2.5 px-5 rounded-xl border border-slate-700">
                  <button onClick={resetNavigation} className="text-emerald-400 hover:underline">Home</button>
                  <span>›</span>
                  <span className="text-white font-semibold">{selectedCategory}</span>
                  {selectedSubLevel && (
                    <>
                      <span>›</span>
                      <span className="text-emerald-300">{selectedSubLevel}</span>
                    </>
                  )}
                  {selectedSubject && (
                    <>
                      <span>›</span>
                      <span className="text-emerald-300">{selectedSubject}</span>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Right Photo Column (Huge & Clean Photo with Caption) */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="relative">
                <img 
                  src="/doctor_hamza.jpeg" 
                  alt="Hamza Osman" 
                  className="w-56 h-72 sm:w-64 sm:h-80 object-cover rounded-3xl shadow-2xl border-4 border-emerald-500"
                />
              </div>
              <p className="mt-3 text-sm font-extrabold text-emerald-300 bg-slate-800/80 px-4 py-1.5 rounded-full border border-emerald-500/30 text-center shadow">
                This is me CEO Hamza Osman Founder
              </p>
            </div>
          </div>
        </section>

        {/* STEP 1: CHOOSE LEVEL CARDS */}
        {!selectedCategory && (
          <section className="max-w-6xl mx-auto px-4 py-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">
              Select Your Level to Browse Courses & Papers:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. Universities */}
              <div
                onClick={() => {
                  setSelectedCategory("Universities");
                  setSelectedSubLevel("Certificates");
                }}
                className="bg-white p-7 rounded-2xl shadow-sm border-2 border-transparent hover:border-emerald-600 cursor-pointer transition text-center group"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition">
                  🏛️
                </div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">1. Universities</h4>
                <p className="text-sm text-slate-500">Certificates, Diploma, Degree, Masters, and PhD past papers.</p>
              </div>

              {/* 2. Colleges */}
              <div
                onClick={() => {
                  setSelectedCategory("Colleges");
                  setSelectedSubLevel("Certificates");
                }}
                className="bg-white p-7 rounded-2xl shadow-sm border-2 border-transparent hover:border-emerald-600 cursor-pointer transition text-center group"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition">
                  🏫
                </div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">2. Colleges</h4>
                <p className="text-sm text-slate-500">Certificates and Diploma course modules & revision materials.</p>
              </div>

              {/* 3. Secondary School */}
              <div
                onClick={() => setSelectedCategory("Secondary School")}
                className="bg-white p-7 rounded-2xl shadow-sm border-2 border-transparent hover:border-emerald-600 cursor-pointer transition text-center group"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition">
                  📚
                </div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">3. Secondary School</h4>
                <p className="text-sm text-slate-500">Form 1 - 4 subjects (Mathematics, Chemistry, Physics, etc.).</p>
              </div>

              {/* 4. Junior Secondary */}
              <div
                onClick={() => setSelectedCategory("Junior Secondary (Grade 7, 8 & 9)")}
                className="bg-white p-7 rounded-2xl shadow-sm border-2 border-transparent hover:border-emerald-600 cursor-pointer transition text-center group"
              >
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition">
                  🎒
                </div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">4. Junior Secondary</h4>
                <p className="text-sm text-slate-500">Grade 7, 8 & 9 CBC curriculum assessment notes.</p>
              </div>

              {/* 5. Senior Secondary */}
              <div
                onClick={() => setSelectedCategory("Senior Secondary (Grade 10, 11 & 12)")}
                className="bg-white p-7 rounded-2xl shadow-sm border-2 border-transparent hover:border-emerald-600 cursor-pointer transition text-center group sm:col-span-2 lg:col-span-1"
              >
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition">
                  🎓
                </div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">5. Senior Secondary</h4>
                <p className="text-sm text-slate-500">Grade 10, 11 & 12 CBC STEM, Social Sciences & Arts.</p>
              </div>
            </div>
          </section>
        )}

        {/* DISPLAY: UNIVERSITIES */}
        {selectedCategory === "Universities" && (
          <section className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 bg-white p-6 rounded-2xl shadow-sm border">
              <div>
                <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded font-bold uppercase">
                  Universities Catalog
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">Select Level & Search Courses</h3>
              </div>
              <button onClick={resetNavigation} className="text-sm text-emerald-600 font-semibold hover:underline self-start">← Back to Categories</button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Certificates", "Diploma", "Degree", "Masters", "PhD"].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedSubLevel(lvl)}
                  className={`px-5 py-2 rounded-xl text-sm font-bold transition shadow-sm ${
                    selectedSubLevel === lvl
                      ? "bg-emerald-600 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-100 border"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <input
                type="text"
                placeholder="Search course name or unit code..."
                className="w-full px-4 py-3 rounded-xl border-2 shadow-sm text-slate-900 focus:border-emerald-600 focus:outline-none text-sm font-medium bg-white"
              />
            </div>

            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-10 text-center max-w-2xl mx-auto shadow-sm my-12">
              <div className="text-4xl mb-3">⏳</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">PDF Not Ready</h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                PDF not ready! Contact CEO Hamza Osman or chat me on WhatsApp, I&apos;m online, or call my number <strong>0726525991</strong>.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="tel:0726525991"
                  className="px-5 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800 transition"
                >
                  📞 Call 0726525991
                </a>
                <a
                  href="https://wa.me/message/U3DXJ5FM47B5A1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-xs hover:bg-emerald-700 transition flex items-center gap-2 justify-center"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Chat on WhatsApp (Online)
                </a>
              </div>
            </div>
          </section>
        )}

        {/* DISPLAY: COLLEGES */}
        {selectedCategory === "Colleges" && (
          <section className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 bg-white p-6 rounded-2xl shadow-sm border">
              <div>
                <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded font-bold uppercase">
                  Colleges Catalog
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">Select Level & Search Courses</h3>
              </div>
              <button onClick={resetNavigation} className="text-sm text-emerald-600 font-semibold hover:underline self-start">← Back to Categories</button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Certificates", "Diploma"].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedSubLevel(lvl)}
                  className={`px-5 py-2 rounded-xl text-sm font-bold transition shadow-sm ${
                    selectedSubLevel === lvl
                      ? "bg-emerald-600 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-100 border"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <input
                type="text"
                placeholder="Search course name or unit code..."
                className="w-full px-4 py-3 rounded-xl border-2 shadow-sm text-slate-900 focus:border-emerald-600 focus:outline-none text-sm font-medium bg-white"
              />
            </div>

            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-10 text-center max-w-2xl mx-auto shadow-sm my-12">
              <div className="text-4xl mb-3">⏳</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">PDF Not Ready</h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                PDF not ready! Contact CEO Hamza Osman or chat me on WhatsApp, I&apos;m online, or call my number <strong>0726525991</strong>.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="tel:0726525991"
                  className="px-5 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800 transition"
                >
                  📞 Call 0726525991
                </a>
                <a
                  href="https://wa.me/message/U3DXJ5FM47B5A1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-xs hover:bg-emerald-700 transition flex items-center gap-2 justify-center"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Chat on WhatsApp (Online)
                </a>
              </div>
            </div>
          </section>
        )}

        {/* DISPLAY: SECONDARY SCHOOL */}
        {selectedCategory === "Secondary School" && (
          <section className="max-w-6xl mx-auto px-4 py-8">
            {!selectedSubject ? (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-800">Select Secondary Subject (Form 1 - 4):</h3>
                  <button onClick={resetNavigation} className="text-sm text-emerald-600 font-semibold hover:underline">← Back to Categories</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {["Mathematics", "Chemistry", "Physics", "Biology", "English", "Kiswahili", "History & Government", "Geography", "Business Studies", "Agriculture"].map((subj) => (
                    <div
                      key={subj}
                      onClick={() => setSelectedSubject(subj)}
                      className="bg-white p-6 rounded-xl border shadow-sm hover:border-emerald-600 cursor-pointer transition flex items-center justify-between"
                    >
                      <h4 className="font-bold text-slate-800">{subj}</h4>
                      <span className="text-emerald-600 font-bold">→</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-6 bg-white p-6 rounded-2xl border shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-900">{selectedSubject} Revision Papers</h3>
                  <button onClick={() => setSelectedSubject(null)} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold">← Choose Subject</button>
                </div>

                <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-10 text-center max-w-2xl mx-auto shadow-sm my-12">
                  <div className="text-4xl mb-3">⏳</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">PDF Not Ready</h4>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                    PDF not ready! Contact CEO Hamza Osman or chat me on WhatsApp, I&apos;m online, or call my number <strong>0726525991</strong>.
                  </p>
                  <a
                    href="https://wa.me/message/U3DXJ5FM47B5A1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-xs hover:bg-emerald-700 transition justify-center"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    Chat on WhatsApp (Online)
                  </a>
                </div>
              </div>
            )}
          </section>
        )}

        {/* DISPLAY: JUNIOR & SENIOR SECONDARY (CBC) */}
        {(selectedCategory === "Junior Secondary (Grade 7, 8 & 9)" || selectedCategory === "Senior Secondary (Grade 10, 11 & 12)") && (
          <section className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6 bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">{selectedCategory}</h3>
              <button onClick={resetNavigation} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold">← Back to Categories</button>
            </div>

            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-10 text-center max-w-2xl mx-auto shadow-sm my-12">
              <div className="text-4xl mb-3">⏳</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">PDF Not Ready</h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                PDF not ready! Contact CEO Hamza Osman or chat me on WhatsApp, I&apos;m online, or call my number <strong>0726525991</strong>.
              </p>
              <a
                href="https://wa.me/message/U3DXJ5FM47B5A1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-xs hover:bg-emerald-700 transition justify-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Chat on WhatsApp (Online)
              </a>
            </div>
          </section>
        )}

        {/* ABOUT & CONTACT SECTION */}
        <section className="bg-white border-t py-14 px-4 mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <img 
              src="/doctor_hamza.jpeg" 
              alt="Hamza Osman" 
              className="w-36 h-44 object-cover rounded-2xl mx-auto shadow-xl border-4 border-emerald-600 mb-4"
            />
            <h3 className="text-3xl font-extrabold text-slate-900 mb-1">HAMZA OSMAN</h3>
            <p className="text-emerald-700 font-bold text-sm uppercase tracking-wide mb-4">
              CEO & FOUNDER — PastPapers Kenya
            </p>
            <p className="text-slate-600 text-base leading-relaxed max-w-xl mx-auto mb-8">
              For Pdf or Any other servoces you Contact CEO HAMZA OSMAN through WhatsApp or call <strong>0726525991</strong> for all other materials!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0726525991"
                className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition shadow-md flex items-center gap-2"
              >
                📞 Call: 0726525991
              </a>
              <a
                href="https://wa.me/message/U3DXJ5FM47B5A1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition shadow-md flex items-center gap-2 justify-center"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp CEO Hamza Osman
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800">
        <p>© {new Date().getFullYear()} PastPapers Kenya — Designed & Developed by CEO Hamza Osman. All rights reserved.</p>
      </footer>
    </div>
  );
}