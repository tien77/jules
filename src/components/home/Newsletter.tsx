import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-slate-900 dark:bg-black text-white py-16 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 mb-6">
          <span className="material-symbols-outlined text-primary">mail</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">Đăng ký nhận tin tức</h2>
        <p className="text-slate-400 mb-8">Nhận thông báo về các khóa học mới và ưu đãi đặc biệt hàng tuần. Không spam.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input className="flex-1 rounded-lg border-0 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary" placeholder="Email của bạn" required type="email" />
          <button className="rounded-lg bg-primary px-6 py-3 font-bold text-white hover:bg-blue-600 transition-colors" type="button">
            Đăng ký
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
