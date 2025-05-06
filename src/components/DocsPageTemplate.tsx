"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface DocsPageTemplateProps {
  children: ReactNode;
  title: string;
}

export function Tip({ children }: { children: ReactNode }) {
  return (
    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 my-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-blue-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-blue-200">{children}</p>
        </div>
      </div>
    </div>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 my-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-purple-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-purple-200">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default function DocsPageTemplate({
  children,
  title,
}: DocsPageTemplateProps) {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
