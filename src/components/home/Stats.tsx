import React from 'react';

interface StatItemProps {
  icon: string;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => (
  <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-slate-50 dark:bg-slate-800/50 p-6 text-center transition-transform hover:scale-105">
    <span className="material-symbols-outlined text-primary !text-4xl mb-2">{icon}</span>
    <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{value}</p>
    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
  </div>
);

const Stats: React.FC = () => {
  const stats = [
    { icon: 'groups', value: '10,000+', label: 'Học viên tiêu biểu' },
    { icon: 'library_books', value: '500+', label: 'Khóa học đa dạng' },
    { icon: 'school', value: '100+', label: 'Giảng viên uy tín' },
    { icon: 'public', value: '20+', label: 'Quốc gia tiếp cận' },
  ];

  return (
    <section className="bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
