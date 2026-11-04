"use client";

export const dynamic = "force-dynamic";

import React, { useState } from "react";

interface Item {
  id: string;
  name: string;
  code: string;
}

const ACADEMIC_LEVELS: { [key: string]: { [level: string]: Item[] } } = {
  "Universities": {
    "Degree": [
      { id: "u-deg-1", name: "Bachelor of Business Management (Accounting & Finance)", code: "BBM 111" },
      { id: "u-deg-2", name: "Bachelor of Science in Information Technology", code: "BIT 2101" },
      { id: "u-deg-3", name: "Bachelor of Education (Arts - English & Literature)", code: "EDU 321" },
      { id: "u-deg-4", name: "Bachelor of Public Health & Epidemiology", code: "PH 402" },
      { id: "u-deg-5", name: "Bachelor of Laws (LL.B)", code: "LAW 101" },
      { id: "u-deg-6", name: "Bachelor of Commerce (Marketing Option)", code: "BCOM 202" },
      { id: "u-deg-7", name: "BSc. Computer Science & Software Engineering", code: "CCS 201" },
    ],
    "Masters": [
      { id: "u-mas-1", name: "Master of Business Administration (Strategic Management)", code: "MBA 610" },
      { id: "u-mas-2", name: "Master of Science in Information Technology Security", code: "MIT 701" },
    ],
    "PhD": [
      { id: "u-phd-1", name: "PhD in Business Administration & Management", code: "PHD 901" },
      { id: "u-phd-2", name: "Doctor of Philosophy in Computing & Informatics", code: "PHD 902" },
    ]
  },
  "Colleges": {
    "Diploma": [
      { id: "c-dip-1", name: "Diploma in Information Technology", code: "DIT 01" },
      { id: "c-dip-2", name: "Diploma in Business Administration", code: "DBA 01" },
      { id: "c-dip-3", name: "Diploma in Criminology and Security Studies", code: "CRM 101" },
      { id: "c-dip-4", name: "Diploma in Clinical Medicine and Surgery", code: "MED 101" },
    ],
    "Certificate": [
      { id: "c-cert-1", name: "Certificate in Information Communication Technology", code: "CICT 01" },
      { id: "c-cert-2", name: "Certificate in Business Management", code: "CBM 01" },
    ]
  }
};

const SECONDARY_SUBJECTS: { [subject: string]: Item[] } = {
  "Mathematics": [
    { id: "mat-pp1", name: "Mathematics Paper 1 - Revision Notes & Past Exam", code: "MAT-PP1" },
    { id: "mat-pp2", name: "Mathematics Paper 2 - Revision Notes & Past Exam", code: "MAT-PP2" },
  ],
  "Chemistry": [
    { id: "chem-pp1", name: "Chemistry Paper 1 (Theory) Revision PDF", code: "CHE-PP1" },
    { id: "chem-pp2", name: "Chemistry Paper 2 (Theory) Revision PDF", code: "CHE-PP2" },
    { id: "chem-pp3", name: "Chemistry Paper 3 (Practical Guide & Answers)", code: "CHE-PP3" },
  ],
  "Physics": [
    { id: "phy-pp1", name: "Physics Paper 1 - Calculations & Notes", code: "PHY-PP1" },
    { id: "phy-pp2", name: "Physics Paper 2 - Electronics & Optics", code: "PHY-PP2" },
  ],
  "Biology": [
    { id: "bio-pp1", name: "Biology Paper 1 - Questions & Answers", code: "BIO-PP1" },
    { id: "bio-pp2", name: "Biology Paper 2 - Essays & Marking Schemes", code: "BIO-PP2" },
  ],
  "English": [
    { id: "eng-pp1", name: "English Paper 1 (Functional Skills & Cloze Test)", code: "ENG-PP1" },
    { id: "eng-pp2", name: "English Paper 2 (Comprehension & Set Books)", code: "ENG-PP2" },
  ],
  "Kiswahili": [
    { id: "kisw-pp1", name: "Kiswahili Karatasi ya 1 (Insha na Ufupisho)", code: "KIS-PP1" },
    { id: "kisw-pp2", name: "Kiswahili Karatasi ya 2 (Lugha na Fasihi)", code: "KIS-PP2" },
  ]
};

const CBC_DATA: { [key: string]: Item[] } = {
  "Junior Secondary (Grade 7, 8 & 9)": [
    { id: "jsc-1", name: "Grade 7 Integrated Science Assessment Notes", code: "JSC-SCI-7" },
    { id: "jsc-2", name: "Grade 8 Mathematics Activity Workbook", code: "JSC-MAT-8" },
    { id: "jsc-3", name: "Grade 9 Pre-Technical Studies Guide", code: "JSC-PTS-9" },
  ],
  "Senior Secondary (Grade 10, 11 & 12)": [
    { id: "ssc-1", name: "Grade 10 STEM Pathway Core Sciences Compendium", code: "SSC-STEM-10" },
    { id: "ssc-2", name: "Grade 11 Social Sciences & Humanities Notes", code: "SSC-HUM-11" },
    { id: "ssc-3", name: "Grade 12 Career & Technology Studies Manual", code: "SSC-CTS-12" },
  ]
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubLevel, setSelectedSubLevel] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const resetNavigation = () => {
    setSelectedCategory(null);
    setSelectedSubLevel("");
    setSelectedSubject(null);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      <div>
        <header className="bg-emerald-700 text-white shadow-md sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="cursor-pointer" onClick={resetNavigation}>
              <h1 className="text-2xl font-extrabold tracking-tight">PAST PAPERS KENYA</h1>
              <p className="text-xs text-emerald-100">Official Portal by CEO Hamza Osman</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:0726525991" className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-semibold transition shadow">
                📞 0726525991
              </a>
              <a href="https://wa.me/message/U3DXJ5FM47B5A1" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-semibold transition shadow flex items-center gap-1">
                💬 WhatsApp CEO
              </a>
            </div>
          </div>
        </header>

        <section className="bg-slate-900 text-white py-12 px-4 border-b border-emerald-600 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="relative mb-4">
              <img src="/doctor_hamza.jpeg" alt="Hamza Osman" className="w-28 h-28 rounded-full shadow-2xl border-4 border-emerald-500 object-cover" />
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-md">
                CEO & FOUNDER
              </span>
            </div>

            <p className="text-emerald-400 font-extrabold text-sm uppercase tracking-widest mb-1">
              I&apos;M THE CEO HAMZA OSMAN FOUNDER
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
              Welcome to <span className="text-emerald-400">HAMZA OSMAN</span> Websites
            </h2>
            <p className="text-slate-300 text-base max-w-2xl mb-6">
              Instant PDF downloads for MKU & all Kenyan Universities, High School subjects (Form 1-4), and CBC notes.
            </p>

            {selectedCategory && (
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm bg-slate-800 py-2 px-4 rounded-lg border border-slate-700">
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
        </section>

        {!selectedCategory && (
          <section className="max-w-6xl mx-auto px-4 py-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">
              Select Your Level to Browse Courses & Papers:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div onClick={() => { setSelectedCategory("Universities"); setSelectedSubLevel("Degree"); }} className="bg-white p-7 rounded-2xl shadow-sm border-2 border-transparent hover:border-emerald-600 cursor-pointer transition text-center group">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition">🏛️</div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">1. Universities</h4>
                <p className="text-sm text-slate-500">Degree, Masters, and PhD examination notes & past papers.</p>
              </div>

              <div onClick={() => { setSelectedCategory("Colleges"); setSelectedSubLevel("Diploma"); }} className="bg-white p-7 rounded-2xl shadow-sm border-2 border-transparent hover:border-emerald-600 cursor-pointer transition text-center group">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition">🏫</div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">2. Colleges</h4>
                <p className="text-sm text-slate-500">Diploma and Certificate course modules & revision materials.</p>
              </div>

              <div onClick={() => setSelectedCategory("Secondary School")} className="bg-white p-7 rounded-2xl shadow-sm border-2 border-transparent hover:border-emerald-600 cursor-pointer transition text-center group">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition">📚</div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">3. Secondary School</h4>
                <p className="text-sm text-slate-500">Form 1 - 4 subjects (Mathematics, Chemistry, Physics, etc.).</p>
              </div>

              <div onClick={() => setSelectedCategory("Junior Secondary (Grade 7, 8 & 9)")} className="bg-white p-7 rounded-2xl shadow-sm border-2 border-transparent hover:border-emerald-600 cursor-pointer transition text-center group">
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition">🎒</div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">4. Junior Secondary</h4>
                <p className="text-sm text-slate-500">Grade 7, 8 & 9 CBC curriculum assessment notes.</p>
              </div>

              <div onClick={() => setSelectedCategory("Senior Secondary (Grade 10, 11 & 12)")} className="bg-white p-7 rounded-2xl shadow-sm border-2 border-transparent hover:border-emerald-600 cursor-pointer transition text-center group sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition">🎓</div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">5. Senior Secondary</h4>
                <p className="text-sm text-slate-500">Grade 10, 11 & 12 CBC STEM, Social Sciences & Arts.</p>
              </div>
            </div>
          </section>
        )}

        {(selectedCategory === "Universities" || selectedCategory === "Colleges") && (
          <section className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 bg-white p-6 rounded-2xl shadow-sm border">
              <div>
                <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded font-bold uppercase">{selectedCategory} Catalog</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">Select Level & Search Courses</h3>
              </div>
              <button onClick={resetNavigation} className="text-sm text-emerald-600 font-semibold hover:underline self-start">← Back to Categories</button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {Object.keys(ACADEMIC_LEVELS[selectedCategory]).map((lvl) => (
                <button key={lvl} onClick={() => setSelectedSubLevel(lvl)} className={`px-5 py-2 rounded-xl text-sm font-bold transition shadow-sm ${selectedSubLevel === lvl ? "bg-emerald-600 text-white" : "bg-white text-slate-700 hover:bg-slate-100 border"}`}>
                  {lvl}
                </button>
              ))}
            </div>

            <div className="mb-6">
              <input type="text" placeholder="Search course name or unit code..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-4 py-3 rounded-xl border-2 shadow-sm text-slate-900 focus:border-emerald-600 focus:outline-none text-sm font-medium" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ACADEMIC_LEVELS[selectedCategory][selectedSubLevel]?.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.code.toLowerCase().includes(searchQuery.toLowerCase())).map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border p-6 flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2.5 py-0.5 rounded font-semibold mb-2">{selectedSubLevel}</span>
                    <h5 className="text-lg font-bold text-slate-900 mb-1">{item.name}</h5>
                    <p className="text-xs font-mono text-slate-500 mb-4">Code: {item.code}</p>
                  </div>
                  <div className="pt-4 border-t">
                    <a href="https://wa.me/message/U3DXJ5FM47B5A1" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition shadow">
                      💬 PDF Not Ready — Contact CEO Hamza Osman
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {selectedCategory === "Secondary School" && (
          <section className="max-w-6xl mx-auto px-4 py-8">
            {!selectedSubject ? (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-800">Select Secondary Subject (Form 1 - 4):</h3>
                  <button onClick={resetNavigation} className="text-sm text-emerald-600 font-semibold hover:underline">← Back to Categories</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.keys(SECONDARY_SUBJECTS).map((subj) => (
                    <div key={subj} onClick={() => setSelectedSubject(subj)} className="bg-white p-6 rounded-xl border shadow-sm hover:border-emerald-600 cursor-pointer transition flex items-center justify-between">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SECONDARY_SUBJECTS[selectedSubject].map((item) => (
                    <div key={item.id} className="bg-white rounded-xl shadow-sm border p-6 flex flex-col justify-between">
                      <div>
                        <h5 className="text-lg font-bold text-slate-900 mb-1">{item.name}</h5>
                        <p className="text-xs font-mono text-slate-500 mb-4">Code: {item.code}</p>
                      </div>
                      <a href="https://wa.me/message/U3DXJ5FM47B5A1" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition shadow">
                        💬 PDF Not Ready — Contact CEO Hamza Osman
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {(selectedCategory === "Junior Secondary (Grade 7, 8 & 9)" || selectedCategory === "Senior Secondary (Grade 10, 11 & 12)") && (
          <section className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6 bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">{selectedCategory}</h3>
              <button onClick={resetNavigation} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold">← Back to Categories</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CBC_DATA[selectedCategory]?.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border p-6 flex flex-col justify-between">
                  <div>
                    <h5 className="text-lg font-bold text-slate-900 mb-1">{item.name}</h5>
                    <p className="text-xs font-mono text-slate-500 mb-4">Code: {item.code}</p>
                  </div>
                  <a href="https://wa.me/message/U3DXJ5FM47B5A1" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition shadow">
                    💬 PDF Not Ready — Contact CEO Hamza Osman
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="bg-white border-t py-14 px-4 mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <img src="/doctor_hamza.jpeg" alt="Hamza Osman" className="w-32 h-32 rounded-full mx-auto shadow-xl border-4 border-emerald-600 object-cover mb-4" />
            <h3 className="text-3xl font-extrabold text-slate-900 mb-1">HAMZA OSMAN</h3>
            <p className="text-emerald-700 font-bold text-sm uppercase tracking-wide mb-4">
              CEO & FOUNDER — PastPapers Kenya
            </p>
            <p className="text-slate-600 text-base leading-relaxed max-w-xl mx-auto mb-8">
              PDF not ready? Contact CEO HAMZA OSMAN through WhatsApp or call <strong>0726525991</strong> for all other materials!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0726525991" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition shadow-md">
                📞 Call: 0726525991
              </a>
              <a href="https://wa.me/message/U3DXJ5FM47B5A1" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition shadow-md">
                💬 WhatsApp CEO Hamza Osman
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800">
        <p>© {new Date().getFullYear()} PastPapers Kenya — Designed & Developed by CEO Hamza Osman. All rights reserved.</p>
      </footer>
    </div>
  );
}