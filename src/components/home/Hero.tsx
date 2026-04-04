import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative px-4 py-12 md:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Hero Content */}
          <div className="flex flex-1 flex-col gap-6 text-left lg:items-start">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
                Nền tảng học trực tuyến #1
              </span>
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
                Nâng tầm kiến thức của bạn <span className="text-primary">ngay hôm nay</span>
              </h1>
              <h2 className="text-lg font-normal leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl">
                Học từ các chuyên gia hàng đầu với hàng nghìn khóa học online chất lượng cao. Linh hoạt thời gian, chứng chỉ uy tín được công nhận toàn cầu.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="flex h-12 min-w-[140px] items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5">
                Khám phá ngay
              </button>
              <button className="flex h-12 min-w-[140px] items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent px-6 text-base font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined mr-2 !text-xl">play_circle</span>
                Xem demo
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 pt-4">
              <div className="flex -space-x-2">
                <img alt="User avatar 1" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-background-dark object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVrkSMkqvBEgRV7lqrkWlkneS4Hv5wIs6IEfPWDpuyrYVeo7rZgbrJE8TXkjymLUInwlvaOiLgsMRJOGPeRan4huSgagdH-yjhljC_X07s0AmMO2CeeJZNiwKTAyN3zt84fr1DY4_LOXia4sJ4JvkJkM-XqDIULqu121fuqlco6qzHAiQrIl0U5rLfxqhVfiRWL9Ahdu4o5dPQUC8NVMYmbYIRUj3-oRcXiwLSkQXsIq0Ej3qSDXpYI2zFKof9AukadzoX1pv5dX4" />
                <img alt="User avatar 2" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-background-dark object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoR3bwOv81wpxMPgon2RB4fQ-5M2IuPv5n3o3LQon0qLQdKwvins9NCOrj1K125LnJrn-N0Zdk5QTTTQiQIjCEaxVpBEcUI5bCDtpy2NNwRSz_UUymDv6JZwGL8pYOtdm3riPe2YxmYmwIybqq4zMHDW9KUeRtDOHkFXg2RP77mS3d7PwIcpDG-SUAs3zlucbHBqR5H0PxkTzMerXTizxvnDaaJo9LwSpNNNiWWAXXJRwhI0xcA6RfumpQInlDFxznRm96WxlbN98" />
                <img alt="User avatar 3" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-background-dark object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrTNg9nk1N0Khd1QbyXaVgLw95wELhxSjpazS_v9VbxioFHVnQJF8_50CNEYs_Mj8LmCAOMK-LJXvwQAg0FXQPNLFH8q3iXpiCk2-8xFWv2g2bFtD68RcBuDGn8ci-TzvMFFLrdMj227N4uO1CoP0BuTKk4DNMvRi96ZKMFOE4oNDHN7OeVrDLwBsEpWM7GwCtzeFlfx1l0oW9Yq9OYOi0jKWiyt9y5hPnyJhgN-w0n-EDNi5ZpSwHMt8gDAuriYvcS8hofdMkdM8" />
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold ring-2 ring-white dark:ring-background-dark">+2k</div>
              </div>
              <p>Học viên đang online</p>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary px-2 py-0.5 rounded text-xs font-bold">Mới nhất</span>
                  <div className="flex text-yellow-400">
                    <span className="material-symbols-outlined icon-filled !text-sm">star</span>
                    <span className="material-symbols-outlined icon-filled !text-sm">star</span>
                    <span className="material-symbols-outlined icon-filled !text-sm">star</span>
                    <span className="material-symbols-outlined icon-filled !text-sm">star</span>
                    <span className="material-symbols-outlined icon-filled !text-sm">star</span>
                  </div>
                </div>
                <p className="font-bold text-lg">Khóa học UX/UI Design Masterclass</p>
                <p className="text-sm opacity-90">bởi Nguyễn Văn A</p>
              </div>
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJSCfh1T_AnXgauaX9juADs1msSBpxVCZXTL1q3STjBFpbYNGccv34x5eJXSRW6lI5GBJFFKHc3bNcsthzj5ubyWaHH8r-jGbZaDuB96p2fXiW1gsJSYkz_7JaP5xWPR7PffYmSlzK9N6-_dx4oVtQLv8HP-rR2zdUwWiQX7bRvI_3QQRv--LJrmIWGjX2e4fCJYqMKbasz21mPp5SH9xg17cyJBJhg6btv8xrqDSRh-nnmwPs5YrVshB1irV2fowMd7x4TvSdKXQ")' }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
