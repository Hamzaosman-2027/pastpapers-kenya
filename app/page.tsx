"use client";

export const dynamic = "force-dynamic";

import React, { useState } from "react";
import {
  Search,
  Download,
  Filter,
  GraduationCap,
  BookOpen,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  BookMarked
} from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const pastPapers = [
    {
      id: 1,
      title: "KCSE Mathematics Paper 1 & 2 (with Answers)",
      level: "KCSE",
      subject: "Mathematics",
      year: "2023",
      fileSize: "3.4 MB",
      downloads: "4,210",
      type: "Exam & Marking Scheme",
    },
    {
      id: 2,
      title: "KCSE Chemistry Practical & Theory Papers",
      level: "KCSE",
      subject: "Chemistry",
      year: "2023",
      fileSize: "4.1 MB",
      downloads: "3,150",
      type: "Exam & Marking Scheme",
    },
    {
      id: 3,
      title: "Grade 8 Integrated Science Mid-Term Assessment",
      level: "CBC (JSS)",
      subject: "Science",
      year: "2024",
      fileSize: "2.2 MB",
      downloads: "5,800",
      type: "CBC Assessment",
    },
    {
      id: 4,
      title: "KCSE English Comprehensive Revision Booklet",
      level: "KCSE",
      subject: "English",
      year: "2022",
      fileSize: "2.9 MB",
      downloads: "2,900",
      type: "Revision Guide",
    },
    {
      id: 5,
      title: "Grade 7 Social Studies & Religious Education",
      level: "CBC (JSS)",
      subject: "Social Studies",
      year: "2023",
      fileSize: "1.8 MB",
      downloads: "1,940",
      type: "CBC Assessment",
    },
    {
      id: 6,
      title: "KCSE Physics Past Papers Collection (2018-2023)",
      level: "KCSE",
      subject: "Physics",
      year: "2023",
      fileSize: "6.5 MB",
      downloads: "4,600",
      type: "Compendium",
    },
  ];

  const filteredPapers = pastPapers.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject =
      selectedSubject === "All" || paper.subject === selectedSubject;
    const matchesLevel =
      selectedLevel === "All" || paper.level === selectedLevel;
    return matchesSearch && matchesSubject && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-tr from-emerald-600 to-teal-400 p-2.5 rounded-2xl shadow-lg shadow-emerald-950/40">
              <GraduationCap className="h-7 w-7 text-slate-950" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                PastPapers Kenya
              </span>
              <span className="block text-[10px] tracking-wider uppercase font-semibold text-slate-400">
                National Exam Portal
              </span>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-6 text-sm font-medium text-slate-300">
            <a href="#explore" className="hover:text-emerald-400 transition-colors">Revision Hub</a>
            <a href="#features" className="hover:text-emerald-400 transition-colors">Resources</a>
            <a
              href="#explore"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800/60 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
          {/* Background glowing gradients */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified KCSE & CBC Junior Secondary Portal</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-[1.1]">
              Ace Your Exams with{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Past Papers & Answers
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
              Instantly access free downloadable national examinations, structured marking schemes, and CBC assessment frameworks for Kenyan students and educators.
            </p>

            {/* Main Search Input */}
            <div className="max-w-2xl mx-auto pt-2">
              <div className="relative group">
                <Search className="absolute left-5 top-4 h-5 w-5 text-slate-400 group-focus-within:text-emerald-400 transition-colors" />
                <input
                  type="text"
                  placeholder="Search subjects, exams, or grades (e.g., Mathematics, KCSE, Grade 8)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-slate-900/90 border border-slate-700/80 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-2xl text-base"
                />
              </div>
            </div>

            {/* Quick stats badges */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto text-slate-400 text-xs font-medium">
              <div className="flex items-center justify-center space-x-2 bg-slate-900/40 border border-slate-800 py-2.5 px-4 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>KNEC Standardized</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-slate-900/40 border border-slate-800 py-2.5 px-4 rounded-xl">
                <Award className="w-4 h-4 text-teal-400" />
                <span>Marking Schemes Included</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center justify-center space-x-2 bg-slate-900/40 border border-slate-800 py-2.5 px-4 rounded-xl">
                <Download className="w-4 h-4 text-cyan-400" />
                <span>100% Free Access</span>
              </div>
            </div>
          </div>
        </section>

        {/* Explore / Filter Section */}
        <section id="explore" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-800/80">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Available Revision Materials</h2>
              <p className="text-sm text-slate-400 mt-1">Filter by educational tier or specific subjects below.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              {/* Level Filter Dropdown */}
              <div className="flex items-center space-x-2 bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2">
                <Filter className="h-4 w-4 text-emerald-400" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-transparent text-slate-200 text-sm focus:outline-none cursor-pointer"
                >
                  <option value="All" className="bg-slate-900">All Levels</option>
                  <option value="KCSE" className="bg-slate-900">KCSE (Form 1 - 4)</option>
                  <option value="CBC (JSS)" className="bg-slate-900">CBC (JSS Grade 7-9)</option>
                </select>
              </div>

              {/* Subject Filter Dropdown */}
              <div className="flex items-center space-x-2 bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2">
                <BookMarked className="h-4 w-4 text-teal-400" />
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="bg-transparent text-slate-200 text-sm focus:outline-none cursor-pointer"
                >
                  <option value="All" className="bg-slate-900">All Subjects</option>
                  <option value="Mathematics" className="bg-slate-900">Mathematics</option>
                  <option value="Chemistry" className="bg-slate-900">Chemistry</option>
                  <option value="English" className="bg-slate-900">English</option>
                  <option value="Physics" className="bg-slate-900">Physics</option>
                  <option value="Science" className="bg-slate-900">Science</option>
                  <option value="Social Studies" className="bg-slate-900">Social Studies</option>
                </select>
              </div>
            </div>
          </div>

          {/* Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPapers.length > 0 ? (
              filteredPapers.map((paper) => (
                <div
                  key={paper.id}
                  className="bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/20 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
                        {paper.level}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center space-x-1 font-medium bg-slate-800/50 px-2.5 py-1 rounded-lg">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{paper.year}</span>
                      </span>
                    </div>

                    <h3 className="font-semibold text-lg text-slate-100 group-hover:text-emerald-400 transition-colors leading-snug">
                      {paper.title}
                    </h3>
                    
                    <p className="text-xs text-slate-400 font-medium">
                      Category: <span className="text-slate-300">{paper.type}</span>
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      {paper.fileSize} • {paper.downloads} downloads
                    </span>
                    <button className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 px-3.5 py-2 rounded-xl transition-all shadow-md shadow-emerald-950/20 group-hover:scale-105">
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-slate-900/30 border border-slate-800 rounded-2xl">
                <FileText className="mx-auto h-12 w-12 text-slate-600 mb-3" />
                <h3 className="text-lg font-semibold text-slate-300">No exam papers found</h3>
                <p className="text-sm text-slate-500 mt-1">Try clearing your filters or searching for another subject.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-10 px-4 text-center text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-5 w-5 text-emerald-400" />
            <span className="font-bold text-slate-200">PastPapers Kenya</span>
          </div>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} PastPapers Kenya. Dedicated to academic excellence across primary & secondary schools.
          </p>
        </div>
      </footer>
    </div>
  );
}