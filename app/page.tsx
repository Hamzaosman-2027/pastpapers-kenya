"use client";

import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Download,
  Search,
  CheckCircle,
  Clock,
  Sparkles,
  ChevronRight,
  GraduationCap,
  FileText,
  Filter,
} from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  // Fix hydration and build prerender error by setting year on mount
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const pastPapers = [
    {
      id: 1,
      title: "KCSE Mathematics Paper 1 & 2",
      level: "KCSE",
      subject: "Mathematics",
      year: "2023",
      fileSize: "2.4 MB",
      downloads: "1.2k",
    },
    {
      id: 2,
      title: "KCSE Chemistry Paper 1, 2 & 3",
      level: "KCSE",
      subject: "Chemistry",
      year: "2023",
      fileSize: "3.1 MB",
      downloads: "980",
    },
    {
      id: 3,
      title: "Grade 8 Integrated Science Assessment",
      level: "CBC (JSS)",
      subject: "Science",
      year: "2024",
      fileSize: "1.8 MB",
      downloads: "2.5k",
    },
    {
      id: 4,
      title: "KCSE English Paper 1, 2 & 3",
      level: "KCSE",
      subject: "English",
      year: "2022",
      fileSize: "2.0 MB",
      downloads: "1.5k",
    },
    {
      id: 5,
      title: "Grade 7 Social Studies Term 3 Exam",
      level: "CBC (JSS)",
      subject: "Social Studies",
      year: "2023",
      fileSize: "1.2 MB",
      downloads: "850",
    },
    {
      id: 6,
      title: "KCSE Physics Revision Papers & Answers",
      level: "KCSE",
      subject: "Physics",
      year: "2023",
      fileSize: "4.0 MB",
      downloads: "1.1k",
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Header / Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
              <GraduationCap className="h-6 w-6 text-emerald-400" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              PastPapers Kenya
            </span>
          </div>
          <a
            href="#explore"
            className="text-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-4 py-2 rounded-lg transition-colors font-semibold"
          >
            Explore Revision
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/60 bg-gradient-to-b from-slate-900/80 to-slate-950">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>KCSE & CBC Revision Hub</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Ace Your Exams with{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Past Papers & Answers
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Access free downloadable national exam revision materials, marking
              schemes, and CBC assessments tailored for Kenyan primary and secondary students.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto pt-4">
              <div className="relative">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by subject (e.g., Mathematics, Chemistry, Grade 8)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-900 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Papers Listing Section */}
        <section id="explore" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Filters Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            <div className="flex items-center space-x-2 text-slate-300 font-medium">
              <Filter className="h-4 w-4 text-emerald-400" />
              <span>Filter Revision Materials</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {/* Level Filter */}
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="All">All Levels</option>
                <option value="KCSE">KCSE (Form 1 - 4)</option>
                <option value="CBC (JSS)">CBC (JSS Grade 7-9)</option>
              </select>

              {/* Subject Filter */}
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="All">All Subjects</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="English">English</option>
                <option value="Physics">Physics</option>
                <option value="Science">Science</option>
                <option value="Social Studies">Social Studies</option>
              </select>
            </div>
          </div>

          {/* Grid of Papers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPapers.length > 0 ? (
              filteredPapers.map((paper) => (
                <div
                  key={paper.id}
                  className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-5 transition-all hover:shadow-lg hover:shadow-emerald-950/20 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                        {paper.level}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{paper.year}</span>
                      </span>
                    </div>

                    <h3 className="font-semibold text-lg text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {paper.title}
                    </h3>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                    <span>{paper.fileSize} • {paper.downloads} downloads</span>
                    <button className="flex items-center space-x-1 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
                      <Download className="w-4 h-4" />
                      <span>PDF</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-slate-400">
                No exam papers found matching your criteria. Try adjusting your search query or filters.
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 px-4 text-center text-sm">
        <p>
          &copy; {currentYear ? currentYear : "2026"} PastPapers Kenya. Built for students & teachers across Kenya.
        </p>
      </footer>
    </div>
  );
}