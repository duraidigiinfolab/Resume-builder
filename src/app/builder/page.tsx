"use client";

import { useState, useRef } from "react";
import { ResumeForm } from "@/components/builder/ResumeForm";
import { ResumePreview } from "@/components/builder/ResumePreview";
import { Sparkles, Download, LayoutTemplate } from "lucide-react";
import { useReactToPrint } from "react-to-print";

export default function BuilderPage() {
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "DuraCV_Resume",
  });

  return (
    <div className="h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      {/* Builder Top Nav */}
      <header className="h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-outfit font-bold">DuraCV Builder</span>
        </div>

        {/* Mobile Tabs */}
        <div className="md:hidden flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab("edit")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium ${
              activeTab === "edit" ? "bg-white dark:bg-zinc-900 shadow-sm" : "text-zinc-500"
            }`}
          >
            Edit
          </button>
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium ${
              activeTab === "preview" ? "bg-white dark:bg-zinc-900 shadow-sm" : "text-zinc-500"
            }`}
          >
            Preview
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
            <LayoutTemplate className="w-4 h-4" />
            Templates
          </button>
          <button 
            onClick={() => handlePrint()}
            className="flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export PDF</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden">
        {/* Left Side: Form */}
        <div className={`w-full md:w-[45%] lg:w-[40%] flex-col bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 overflow-y-auto ${
          activeTab === "edit" ? "flex" : "hidden md:flex"
        }`}>
          <ResumeForm />
        </div>

        {/* Right Side: Preview & ATS Score */}
        <div className={`w-full md:w-[55%] lg:w-[60%] flex-col bg-zinc-100/50 dark:bg-zinc-950/50 p-4 md:p-8 overflow-y-auto ${
          activeTab === "preview" ? "flex" : "hidden md:flex"
        }`}>
          <div ref={componentRef} className="mx-auto w-full max-w-[800px]">
            <ResumePreview />
          </div>
        </div>
      </main>
    </div>
  );
}
