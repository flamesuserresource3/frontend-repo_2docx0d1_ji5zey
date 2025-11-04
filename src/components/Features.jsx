import React from 'react';
import { Users, Video, Mic, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Role-based Access',
    desc: 'Therapists and parents have tailored access with secure Row Level Security.',
    accent: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Video,
    title: 'Media-rich Sessions',
    desc: 'Attach audio/video to each session for evidence-based review and feedback.',
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    icon: Mic,
    title: 'AVT-focused Tools',
    desc: 'Capture listening, speech comprehension, and articulation observations seamlessly.',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    icon: BarChart3,
    title: 'Progress Analytics',
    desc: 'Visualize improvements over time with clear, actionable trends.',
    accent: 'from-amber-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'Authentication, storage, and DB managed via Supabase with JWT and RLS.',
    accent: 'from-sky-500 to-cyan-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Built for therapy, designed for clarity</h2>
          <p className="mt-3 text-gray-600">Everything you need to manage sessions, collaborate, and monitor progress—without the clutter.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc, accent }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${accent} text-white shadow`}> 
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-black/0 via-black/0 to-black/5 blur-2xl transition-opacity group-hover:opacity-90" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
