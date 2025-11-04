import React from 'react';
import { Database, User, Baby, CalendarDays, BarChart3 } from 'lucide-react';

export default function Schema() {
  return (
    <section id="schema" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
            <Database size={14} />
            Data model overview
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Secure, relational foundation</h2>
          <p className="mt-2 text-gray-600">Optimized for RLS with clear relationships across profiles, children, sessions, and progress.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-gray-900">
              <User size={18} />
              <h3 className="font-semibold">profiles</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">User identity with role-based access (therapist, parent).</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-gray-900">
              <Baby size={18} />
              <h3 className="font-semibold">children</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">Registered children with parent linkage and therapist assignment.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-gray-900">
              <CalendarDays size={18} />
              <h3 className="font-semibold">sessions</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">Scheduled therapy sessions with notes and attached media.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-gray-900">
              <BarChart3 size={18} />
              <h3 className="font-semibold">progress</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">Assessment metrics per session for trend analysis over time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
