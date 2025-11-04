import React from 'react';
import { User, Users, Calendar, FileText } from 'lucide-react';

export default function Roles() {
  return (
    <section className="relative border-t border-gray-100 bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Therapist</h3>
            </div>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><Calendar className="mt-0.5" size={18} /> Create and manage therapy sessions.</li>
              <li className="flex items-start gap-2"><FileText className="mt-0.5" size={18} /> Record observations and assessments.</li>
              <li className="flex items-start gap-2"><User className="mt-0.5" size={18} /> Work with assigned children only.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600 text-white">
                <User size={20} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Parent</h3>
            </div>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><Calendar className="mt-0.5" size={18} /> Review session history and notes.</li>
              <li className="flex items-start gap-2"><FileText className="mt-0.5" size={18} /> Monitor progress metrics and reports.</li>
              <li className="flex items-start gap-2"><Users className="mt-0.5" size={18} /> Secure visibility for their own children only.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
