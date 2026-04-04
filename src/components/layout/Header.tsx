import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 md:px-10">
      <div className="flex items-center gap-4 md:gap-8">
        <Link className="flex items-center gap-2 text-slate-900 dark:text-white hover:opacity-80 transition-opacity" to="/">
          <span className="material-symbols-outlined text-primary !text-3xl">school</span>
          <h2 className="text-xl font-bold leading-tight tracking-tight">EduPro</h2>
        </Link>
        <div className="hidden md:flex flex-col min-w-[200px] w-64 lg:w-80">
          <div className="flex w-full items-center rounded-lg bg-slate-100 dark:bg-slate-800 h-10 px-3 transition-colors focus-within:ring-2 focus-within:ring-primary/50">
            <span className="material-symbols-outlined text-slate-500" style={{ fontSize: '20px' }}>search</span>
            <input className="w-full bg-transparent border-none text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:ring-0 focus:outline-none ml-2" placeholder="Tìm kiếm khóa học..." />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        <nav className="hidden lg:flex items-center gap-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors" to="/courses">Khóa học</Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" to="/dashboard">Bảng điều khiển</Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" to="/cart">Giỏ hàng</Link>
        </nav>
        <div className="flex gap-3">
          <Link className="hidden sm:flex h-9 items-center justify-center rounded-lg px-4 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/login">
            Đăng nhập
          </Link>
          <Link className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-sm hover:bg-blue-600 transition-colors" to="/login">
            Đăng ký
          </Link>
          {/* Mobile Menu Button */}
          <button className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
