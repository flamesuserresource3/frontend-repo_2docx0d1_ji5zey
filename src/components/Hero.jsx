import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-6 sm:pt-24 sm:pb-8 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-200">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Auditory Verbal Therapy
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Monitor, guide, and celebrate progress in AVT
            </h1>
            <p className="mt-4 max-w-xl text-base text-gray-600 sm:text-lg">
              A modern platform connecting therapists and parents with real‑time session tracking, multimedia evidence, and data‑driven insights.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#features" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white shadow transition hover:bg-indigo-700">
                Explore Features
              </a>
              <a href="#schema" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-indigo-700 ring-1 ring-indigo-200 transition hover:bg-indigo-50">
                See Data Model
              </a>
            </div>
          </div>
          <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
