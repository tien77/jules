

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 md:px-10">
        <div className="flex items-center gap-4 md:gap-8">
          <a className="flex items-center gap-2 text-slate-900 dark:text-white hover:opacity-80 transition-opacity" href="#">
            <span className="material-symbols-outlined text-primary !text-3xl">school</span>
            <h2 className="text-xl font-bold leading-tight tracking-tight">EduPro</h2>
          </a>
          <div className="hidden md:flex flex-col min-w-[200px] w-64 lg:w-80">
            <div className="flex w-full items-center rounded-lg bg-slate-100 dark:bg-slate-800 h-10 px-3 transition-colors focus-within:ring-2 focus-within:ring-primary/50">
              <span className="material-symbols-outlined text-slate-500" style={{ fontSize: '20px' }}>search</span>
              <input className="w-full bg-transparent border-none text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:ring-0 focus:outline-none ml-2" placeholder="Tìm kiếm khóa học..." />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden lg:flex items-center gap-6">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Khóa học</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Giảng viên</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Doanh nghiệp</a>
          </nav>
          <div className="flex gap-3">
            <button className="hidden sm:flex h-9 items-center justify-center rounded-lg px-4 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Đăng nhập
            </button>
            <button className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-sm hover:bg-blue-600 transition-colors">
              Đăng ký
            </button>
            {/* Mobile Menu Button */}
            <button className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
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
                  <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJSCfh1T_AnXgauaX9juADs1msSBpxVCZXTL1q3STjBFpbYNGccv34x5eJXSRW6lI5GBJFFKHc3bNcsthzj5ubyWaHH8r-jGbZaDuB96p2fXiW1gsJSYkz_7JaP5xWPR7PffYmSlzK9N6-_dx4oVtQLv8HP-rR2zdUwWiQX7bRvI_3QQRv--LJrmIWGjX2e4fCJYqMKbasz21mPp5SH9xg17cyJBJhg6btv8xrqDSRh-nnmwPs5YrVshB1irV2fowMd7x4TvSdKXQ")' }}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-10">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
              <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-slate-50 dark:bg-slate-800/50 p-6 text-center transition-transform hover:scale-105">
                <span className="material-symbols-outlined text-primary !text-4xl mb-2">groups</span>
                <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">10,000+</p>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Học viên tiêu biểu</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-slate-50 dark:bg-slate-800/50 p-6 text-center transition-transform hover:scale-105">
                <span className="material-symbols-outlined text-primary !text-4xl mb-2">library_books</span>
                <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">500+</p>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Khóa học đa dạng</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-slate-50 dark:bg-slate-800/50 p-6 text-center transition-transform hover:scale-105">
                <span className="material-symbols-outlined text-primary !text-4xl mb-2">school</span>
                <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">100+</p>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Giảng viên uy tín</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-slate-50 dark:bg-slate-800/50 p-6 text-center transition-transform hover:scale-105">
                <span className="material-symbols-outlined text-primary !text-4xl mb-2">public</span>
                <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">20+</p>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Quốc gia tiếp cận</p>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits / Why Choose Us */}
        <section className="px-4 py-16 lg:px-10 bg-background-light dark:bg-background-dark">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Tại sao chọn EduPro?</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Chúng tôi mang đến trải nghiệm học tập toàn diện và hiệu quả nhất.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-4 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-sm transition-all hover:shadow-lg dark:hover:shadow-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">workspace_premium</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Chứng chỉ uy tín</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Nhận chứng chỉ hoàn thành khóa học được công nhận bởi các công ty công nghệ hàng đầu, giúp CV của bạn nổi bật hơn.
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-sm transition-all hover:shadow-lg dark:hover:shadow-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">update</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Truy cập trọn đời</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Mua một lần, học mãi mãi. Bạn có thể quay lại ôn tập bất cứ lúc nào, nội dung luôn được cập nhật mới nhất.
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-sm transition-all hover:shadow-lg dark:hover:shadow-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">support_agent</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Hỗ trợ 24/7</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Đội ngũ mentor và giảng viên luôn sẵn sàng giải đáp thắc mắc của bạn qua hệ thống thảo luận trực tuyến.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Featured Courses */}
        <section className="px-4 py-16 lg:px-10 bg-white dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Các khóa học nổi bật</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Những khóa học được nhiều học viên lựa chọn nhất tuần qua.</p>
              </div>
              <a className="hidden text-sm font-bold text-primary hover:underline sm:block" href="#">Xem tất cả -&gt;</a>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Course Card 1 */}
              <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAQuOvVM2FANA4V75b62ukDC9x8CmysChLPvQWtj7lhUpEuGRgswpqgoxiFWBLoDtfWWPsGrTEPxG9E-Lb8h7wSGTT1t_Ku_OdsEBz6ot1FvH83wSRlIQ1cf4aGhhxolzj2_MFJHReTQkt8zbA7c95mt1g7AneKZoKCoIDFgx3DeOx9QIEaFOyuje8C693cIKg1KpiGx-zf8ScZLvTlpsFFJ-iGARyx6fObbOLXGDg2R7GhJzY0-iV5rokbB9uJs9LOSzRFEvNYAk")' }}>
                  </div>
                  <div className="absolute right-2 top-2 rounded bg-white/90 px-1.5 py-0.5 text-xs font-bold text-slate-900 dark:bg-slate-900/90 dark:text-white shadow-sm">
                    Bestseller
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined !text-sm">code</span> Lập trình</span>
                    <span className="flex items-center gap-1 text-yellow-500 font-bold">4.8 <span className="material-symbols-outlined icon-filled !text-sm">star</span></span>
                  </div>
                  <h3 className="mb-2 text-base font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors">
                    Python trọn bộ từ cơ bản đến nâng cao cho người mới bắt đầu
                  </h3>
                  <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">Bởi Trần Minh Tuấn</p>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3">
                    <span className="text-lg font-bold text-primary">499.000đ</span>
                    <button className="rounded-lg bg-primary/10 p-2 text-primary hover:bg-primary hover:text-white transition-colors">
                      <span className="material-symbols-outlined !text-xl">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Course Card 2 */}
              <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcjU9jX8s-AeC-4WQJ8Cupzagr8moBID14CuXqRFMPAfzTFPXl8QGxvLJXHPFvPF9sdtWDsL0zcfmQtXd0ob0Lr_WNzlrxvQ5CBizCw-lSxm4EgQcz6OKtvFIqhSvXXjQezS2Wu02mMpoPE1By0WnDiyW2Hc2szUAtpyhtLGC3V1NuHO3KuakrxJnzsxRSeyXLU_WCRxtJCZ7HcTYvfipxRS4FLQpJproGfDT5IfvYnMDkD8kNsx4s-owQSylcbtbybOFzkXpwpq8")' }}>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined !text-sm">campaign</span> Marketing</span>
                    <span className="flex items-center gap-1 text-yellow-500 font-bold">4.6 <span className="material-symbols-outlined icon-filled !text-sm">star</span></span>
                  </div>
                  <h3 className="mb-2 text-base font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors">
                    Digital Marketing Masterclass - Làm chủ Facebook &amp; Google Ads
                  </h3>
                  <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">Bởi Lê Thị Mai</p>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3">
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-primary">599.000đ</span>
                      <span className="text-xs text-slate-400 line-through">1.200.000đ</span>
                    </div>
                    <button className="rounded-lg bg-primary/10 p-2 text-primary hover:bg-primary hover:text-white transition-colors">
                      <span className="material-symbols-outlined !text-xl">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Course Card 3 */}
              <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB92x0YjxTE1xi2erxJkfVR7v4Woregu2OqC-w8mreuekcFx4BlVBm35GKU6tu5AG-i0xoNeHE9sLnKNQzvhGIW81jwehZYenL504vI-h6YEsDyKKGBWrcqoMh558pCa98rhBCkh4t5UEDEEv5KPHNn-ahlAaB7_x_GOJqEyUuHc_olM0eCmW8Gx-EpU1MhjS9LvpgwMYEMBjFYm1TvpQhxxL99g-K5EyBQ5oPgEC7-1e_svKHYxXopb7iEu3P3w6FIy7G6G__HNyc")' }}>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined !text-sm">palette</span> Design</span>
                    <span className="flex items-center gap-1 text-yellow-500 font-bold">4.9 <span className="material-symbols-outlined icon-filled !text-sm">star</span></span>
                  </div>
                  <h3 className="mb-2 text-base font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors">
                    Tư duy thiết kế đồ họa &amp; Sử dụng thành thạo Photoshop
                  </h3>
                  <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">Bởi Phạm Hoàng</p>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3">
                    <span className="text-lg font-bold text-primary">399.000đ</span>
                    <button className="rounded-lg bg-primary/10 p-2 text-primary hover:bg-primary hover:text-white transition-colors">
                      <span className="material-symbols-outlined !text-xl">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Course Card 4 */}
              <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJEB1yVfQry6TAOjKORgCwgr7lsf2tAPMtkjLhyMcXegNTjnUKxvWrLItkaiNSC5EM69yxuLjK4485lOERcFY7Z0n3g6CoOcQCDcWFmjXt9hN62dYTtjtr0y8isF08MdavDy6Lkfvs0SNX5hCJe9IC5-URJrjUdMrniNro4AZBpi6KpN08cVY1iijJUd9mHDz4GnSlS-qWU2L6wKrvf42Wnw0OVsDgVQGEoiHb-iYO9sLrcJXltuPW5iFV8x3Id1pflXOZymiS2e8")' }}>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined !text-sm">analytics</span> Văn phòng</span>
                    <span className="flex items-center gap-1 text-yellow-500 font-bold">4.7 <span className="material-symbols-outlined icon-filled !text-sm">star</span></span>
                  </div>
                  <h3 className="mb-2 text-base font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors">
                    Excel từ cơ bản đến nâng cao: Làm chủ bảng tính trong 7 ngày
                  </h3>
                  <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">Bởi Nguyễn Thu Hà</p>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3">
                    <span className="text-lg font-bold text-primary">299.000đ</span>
                    <button className="rounded-lg bg-primary/10 p-2 text-primary hover:bg-primary hover:text-white transition-colors">
                      <span className="material-symbols-outlined !text-xl">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center sm:hidden">
              <button className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-50">
                Xem tất cả khóa học
              </button>
            </div>
          </div>
        </section>
        {/* Instructor Spotlight */}
        <section className="px-4 py-16 lg:px-10 bg-background-light dark:bg-background-dark">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="mb-10 text-3xl font-bold text-slate-900 dark:text-white">Gặp gỡ giảng viên hàng đầu</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {/* Instructor 1 */}
              <div className="flex flex-col items-center gap-3">
                <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white dark:border-slate-800 shadow-lg">
                  <img alt="Instructor 1" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD76Be_aUj9lLFrROeYwivJdNLJyCCtbzqPVwTRSwGoST7C-2iSYtpGjMt-8QztKKEaqxtCE0oFLOZCEVHIQxtmh6AU5AQSZ8F9qV_gMwZ2wsD9cEr8nSoNpq35ygRNDNkJrmElXbXpcXctL2LGlatK9bOFnWqeMSmE93OQROmpMwDqVBkbeRnaFIxZ5vOBOrsTcoHklqflLu3xhjCN-1q30y-Nt5qA_GlXpcz1vGS32MWbnEiEk6tPCk1o64JePK8yDjf_lDlddrw" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">James Nguyen</h4>
                  <p className="text-sm text-primary font-medium">Senior Developer</p>
                </div>
              </div>
              {/* Instructor 2 */}
              <div className="flex flex-col items-center gap-3">
                <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white dark:border-slate-800 shadow-lg">
                  <img alt="Instructor 2" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv2dD02JVoxyrPDQ1LthuyRirR-HLAdTGiw84X7tKpPZOB9sTnIca6AajA4stWiNmgjx0S5StaQjFrgaY_KJxj3OKnCi4qD3QRFF43yUXirrVfQgwdMnDFMW2no4bnLq_eTev9LGHhh0dZyN_sBRkahuFjeNuu7ya6fRlRlSK5Cku03m4ohhNsdp5BDI44RnXVCFDZDraFxq2wbvohFcYh0T2pyP0XiEMd1QF_NWpuhE7rvbVcI00G22WgHN00FbkpZRZZOXJjcEw" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Sarah Le</h4>
                  <p className="text-sm text-primary font-medium">Digital Marketer</p>
                </div>
              </div>
              {/* Instructor 3 */}
              <div className="flex flex-col items-center gap-3">
                <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white dark:border-slate-800 shadow-lg">
                  <img alt="Instructor 3" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfjxio73o_VPSWqSVDsePG6pAFkyOweC7YGLFLZadr-jrESfVYSR-hjqcAlEOgaxPG8Zs82Jggk7jn3yBK7uJIPBwPGv0JB2ulnMR-WgR3Hz8EUmJcQJwK1jBNwH2Wj_FOLeVBLx7GrIiDNYRiXQrQGE56KlQsmao_DpGmYM291_zioQwaefn45JS_wKT7dstpeB_VNhihZj7w167AkUrZGuBXf2YeqTyoUsryaIwQkGiGV_ZAUEwJ63BMcjUTDmWAD1_wjhcmPpk" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">David Tran</h4>
                  <p className="text-sm text-primary font-medium">Product Designer</p>
                </div>
              </div>
              {/* Instructor 4 */}
              <div className="flex flex-col items-center gap-3">
                <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white dark:border-slate-800 shadow-lg">
                  <img alt="Instructor 4" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMVXLvlO7LEcJWFKCUaNnwqx8iY_2gYc4rhbbTIwewznQ0R30S1T0pqYM6VgeAhY9lsUyWdWT9WOUb6X8gFFzrlWkuSYTkBsPH2O7oFshWkrOZJcJ7SF7TmKIQyzRQ44hSjCdq0jBx046aE4UH1tiyJgrAmmedqK8-srzyjxMBYgs6BAo7ik3qJsGbD2f1FI-xu2SpF3TX1UJnpYRr0HZmO0mzd9GXSExeEvT78rEewbcNAijuNfwnmy8hBOzkOPJZ1L47A3BIWu8" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Emily Pham</h4>
                  <p className="text-sm text-primary font-medium">IELTS Expert</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="bg-primary/5 dark:bg-slate-900 py-16 px-4 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white">Học viên nói gì về chúng tôi?</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Review 1 */}
              <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  <span className="material-symbols-outlined icon-filled !text-lg">star</span>
                  <span className="material-symbols-outlined icon-filled !text-lg">star</span>
                  <span className="material-symbols-outlined icon-filled !text-lg">star</span>
                  <span className="material-symbols-outlined icon-filled !text-lg">star</span>
                  <span className="material-symbols-outlined icon-filled !text-lg">star</span>
                </div>
                <p className="mb-6 text-slate-600 dark:text-slate-300 italic">"Khóa học rất chi tiết và dễ hiểu. Tôi đã có thể tự xây dựng website đầu tiên của mình chỉ sau 2 tuần học. Cảm ơn đội ngũ EduPro!"</p>
                <div className="flex items-center gap-3">
                  <img alt="Student avatar" className="h-10 w-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAbUd9DilIxqJk642J2zYamsPQGdGyXpA6RUP735tHAnkCmHoUGDSid1CJ8tsSsF-sJhxnebAh09S3XfdBqCY710rpQR6xtTCUJIFgetdt2GMVS-oBU86oOzFh1FM6aZDie4V0_hSp-2UmkkqnHfhmtiJAolM68WuXRdKztEdrOdtYztKhhVLughVXZl4O9HgK6mKlSzRneMZLb1eT-tT1OIpEo2BUiSotVynNjMK5NP8i3HdCodvAB27EktYvvcGktQXyMI4saS8" />
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Hoàng Nam</p>
                    <p className="text-xs text-slate-500">Học viên Web Development</p>
                  </div>
                </div>
              </div>
              {/* Review 2 */}
              <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  <span className="material-symbols-outlined icon-filled !text-lg">star</span>
                  <span className="material-symbols-outlined icon-filled !text-lg">star</span>
                  <span className="material-symbols-outlined icon-filled !text-lg">star</span>
                  <span className="material-symbols-outlined icon-filled !text-lg">star</span>
                  <span className="material-symbols-outlined icon-filled !text-lg">star_half</span>
                </div>
                <p className="mb-6 text-slate-600 dark:text-slate-300 italic">"Giảng viên cực kỳ nhiệt tình, support 24/7. Nội dung bài giảng cập nhật theo xu hướng mới nhất của thị trường."</p>
                <div className="flex items-center gap-3">
                  <img alt="Student avatar" className="h-10 w-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf6ISOitl4jaN5AXwZwW4XrYrI3l8CmmewgiGW7biY_VOJB5A6ays4vgLRTpSJxqTBiFGIwcjqK1eonhNrJj6OmUvnbRiv7VdlQTk3pm6Fm3F270xe-MfSKY0tcFdlVHnilYG_8XjVbBQLcbQYU_szKvinJqNSL6GxlQHoutgP5T6AVbtb4AxUrWogeJsZuKXS6vurDun5-VA_QgJp_7A8x2yTk-a9c80rY3vprzKG-XZxTFm6xWRDrBk8rQnDMdboTKXJE-nn3Gg" />
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Thanh Tú</p>
                    <p className="text-xs text-slate-500">Học viên Digital Marketing</p>
                  </div>
                </div>
              </div>
              {/* Review 3 */}
              <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-slate-100 dark:border-slate-700 hidden lg:block">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  <span className="material-symbols-outlined icon-filled !text-lg">star</span>
                  <span className="material-symbols-outlined icon-filled !text-lg">star</span>
                  <span className="material-symbols-outlined icon-filled !text-lg">star</span>
                  <span className="material-symbols-outlined icon-filled !text-lg">star</span>
                  <span className="material-symbols-outlined icon-filled !text-lg">star</span>
                </div>
                <p className="mb-6 text-slate-600 dark:text-slate-300 italic">"Một khoản đầu tư xứng đáng cho sự nghiệp. Tôi đã tìm được công việc mới với mức lương cao hơn nhờ chứng chỉ tại đây."</p>
                <div className="flex items-center gap-3">
                  <img alt="Student avatar" className="h-10 w-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSFDqyu3-R3PcWJSBAmMR-2Fh5_1Ni49thPhoSBoNSytip4bJcj378z6fp3YSz3DAq0c2ezm4s7V7B0SbdcYTHz_QSO7VrI3MI8OzDK4yktxjW4_7UBF88ae8FgcW-V5VM3kHGTDUtdUFieE6AMjgYVJ3Tm-qI0Y4gOT0BbZWfuayKzUbuFzz_iXBOeDQoyr9ZsTAEPhlHQ5-3BG_AsMdjXR5DBlhPMnuhbRPm9P7Ve7GjShcjkNwczSF41yHFBJwyBSwI4FgZkqA" />
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Đức Minh</p>
                    <p className="text-xs text-slate-500">Học viên Data Science</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Newsletter */}
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
      </main>
      {/* Footer */}
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
              {/* Language Selector Placeholder */}
              <div className="flex items-center gap-1 text-sm text-slate-500 cursor-pointer hover:text-slate-900 dark:hover:text-white">
                <span className="material-symbols-outlined !text-lg">language</span>
                <span>Tiếng Việt</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
