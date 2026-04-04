import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 px-4 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary !text-3xl">school</span>
              <span className="text-xl font-bold text-slate-900 dark:text-white">EduPro</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs mb-6">Nền tảng học tập trực tuyến hàng đầu, kết nối người học với các chuyên gia giỏi nhất.</p>
            <div className="flex gap-4">
              <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">chat_bubble</span></a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Về chúng tôi</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">Giới thiệu</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Liên hệ</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Sự nghiệp</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Tin tức</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Khám phá</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">Khóa học</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Giảng viên</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Doanh nghiệp</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Hỗ trợ</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">Trung tâm hỗ trợ</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Điều khoản</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Chính sách bảo mật</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Hoàn tiền</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© 2024 EduPro. All rights reserved.</p>
          <div className="flex gap-6">
            <div className="flex items-center gap-1 text-sm text-slate-500 cursor-pointer hover:text-slate-900 dark:hover:text-white">
              <span className="material-symbols-outlined !text-lg">language</span>
              <span>Tiếng Việt</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
