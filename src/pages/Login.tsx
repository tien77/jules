

export default function Login() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased text-[#111418] dark:text-white">
      <div className="relative flex h-screen w-full flex-col overflow-hidden">
        {/* Header (Simplified for Login/Auth page) */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] dark:border-b-[#293038] px-6 lg:px-10 py-3 bg-white dark:bg-[#111418]">
          <a className="flex items-center gap-4 text-[#111418] dark:text-white hover:opacity-80 transition-opacity" href="#">
            <div className="size-8 text-primary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">CourseOnline</h2>
          </a>
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-sm text-[#617589] dark:text-[#9aaebf]">Bạn cần giúp đỡ?</span>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-[#f0f2f4] hover:bg-[#e0e2e4] dark:bg-[#293038] dark:hover:bg-[#363f4a] text-[#111418] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
              <span className="truncate">Trợ giúp</span>
            </button>
          </div>
        </header>
        {/* Main Content: Split Screen */}
        <main className="flex-1 flex overflow-hidden">
          {/* Left Column: Visual/Inspiration (Hidden on small screens) */}
          <div className="hidden lg:flex w-1/2 relative bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiyVTHAzVx9cRE-qlwy4rhuPB3I3Q9YAZzF-k_SpRpneH71nRA1jjQFjmqsrj1tHHmFLb-vi_aD-o3FbckmCpo1uweTZpPvOKiknqmrZvscHUmBuB0cFIeiD-TdMawAnoDGuYKEOi12Bv0eToPr0NMgXUD8LMa6RVQ5yDxhqA10WWhs0sHRnR_FGSkIE1Dby2KdSWhmP1vjYphv2ZxHts1uHtMk9liM8nljBQbj3-3a98pMtJmCg9hrNkZ5rRwZVc_TsoIEOce-rs')" }}>
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 p-12 w-full text-white">
              <div className="mb-6">
                <span className="inline-block p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/10 mb-4">
                  <span className="material-symbols-outlined text-3xl">school</span>
                </span>
                <h1 className="text-4xl font-bold leading-tight tracking-tight mb-4">
                  Học kỹ năng mới,<br />mở lối tương lai.
                </h1>
                <p className="text-lg text-white/90 font-light max-w-md leading-relaxed">
                  Tham gia cùng hơn 50,000 học viên đang làm chủ kiến thức mỗi ngày. Nền tảng học tập trực tuyến hàng đầu cho sự nghiệp của bạn.
                </p>
              </div>
              {/* Social Proof / Trust Indicators */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                <div className="flex -space-x-3">
                  <img alt="Student avatar 1" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-D8KWTl0Ki7v33mSmsh82MRPZGHTL0Y5p_-I-YdyrL48h946gFUHn6ZPdxp4-z_9pALgG83XYL8i1Q-Tcxrl9JuJ0l5zTHnBF3XqCdPlRtj7yVvcVX88Z_dAMXvQoJpTXrgJWVz0ZZd0BBlXn75Z-ezs36DVUVd_wMiqm0RKn099HvtD8dNbpokcdJeWw8yN2_bNwRoZ9ytyAZeU_j1R8mcWPLZrMms9XGkeF7Jr7TfIezfeX65liw8nhNrX35MY3fDv2Q9J9PLw" />
                  <img alt="Student avatar 2" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIeF17RfRXiaIQjQBv5oIJKxBeVkp-en_31fhnjica_ylh_u1lMtS1Y-gBzFZi6E8C2ZTfI8Ipi7JkYHsqSW3J8zdFiKNRw0bo094sWq4NFyzdR-YXsICnfN1MW1v4FPP6YLN0DjeG4PyudH_hWqAYC__FK2Uirlsw1HH5A1M_TaTJ2JcYmLPjHEZnai3S_8y8sMAxrerPUz8NRc6rgqUbXZFoyuKHB-1Z7a39I_ix-FnVVUkVyJsiFgaz5dwmejWhwZNtK_-em9A" />
                  <img alt="Student avatar 3" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACrjiBrymHb9bIuEN8HAxTR70ozybjgEeNzsEzuBcVEGtBOAEqM3FAe0lP1PbrwlMmVaGacpdMwFXsxEm_bWgG8ag1BQKzHhXVpPy3fy3pI_0oDdMLyFq9Hm0j-SaGeJgHto5-DnFgMDsaUQJG0TRDaS0WtA83coAKR1Xn6oNDr9emJYBX3fP1TZdVTAj1kRk1IbH9VtoYan45xhPddB1xiIPjyLEGxY5My-PkeVlzLs83WPesy2C8sfrnjdGcAi2K7tozErqd7i0" />
                </div>
                <div className="text-sm font-medium">
                  <div className="flex items-center text-yellow-400 mb-0.5">
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                  </div>
                  <span>4.9/5 từ cộng đồng học viên</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Form Area */}
          <div className="w-full lg:w-1/2 flex flex-col overflow-y-auto bg-white dark:bg-[#111418]">
            <div className="flex-1 flex flex-col justify-center max-w-[520px] w-full mx-auto px-6 py-10 lg:px-12">
              {/* Tabs */}
              <div className="mb-8">
                <div className="flex border-b border-[#dbe0e6] dark:border-[#293038]">
                  <button className="flex flex-1 items-center justify-center border-b-[3px] border-primary text-[#111418] dark:text-white pb-3 pt-2 group transition-all">
                    <span className="text-base font-bold leading-normal tracking-[0.015em]">Đăng nhập</span>
                  </button>
                  <button className="flex flex-1 items-center justify-center border-b-[3px] border-transparent text-[#617589] dark:text-[#9aaebf] hover:text-primary pb-3 pt-2 group transition-all">
                    <span className="text-base font-bold leading-normal tracking-[0.015em]">Đăng ký</span>
                  </button>
                </div>
              </div>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-[#111418] dark:text-white mb-2">Chào mừng trở lại!</h1>
                <p className="text-[#617589] dark:text-[#9aaebf]">Hãy nhập thông tin để tiếp tục lộ trình học tập của bạn.</p>
              </div>
              {/* Social Login */}
              <div className="flex flex-col gap-3 mb-8">
                <button className="relative flex w-full items-center justify-center rounded-lg border border-[#dbe0e6] dark:border-[#293038] bg-white dark:bg-[#1a212a] px-4 h-12 text-[#111418] dark:text-white text-sm font-bold hover:bg-[#f6f7f8] dark:hover:bg-[#293038] transition-colors">
                  <div className="absolute left-4 flex items-center">
                    <img alt="Google Logo" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5om1Vy2XqPG_dsDzqom6IQ3eOI9KENNUH6pUGxrprinF4LkincZT07UWYO6ZBAtVqCxOYOec4oix9Y20zRAFHUpG1CMrEcVhA1pLdWtXMKWmaQz7vF_NejcE8NTeD69K7-WhgFEkBB4WA9aUtWBRepIFda_L2J1-W1TX5aBtKFl9PK0hwCs_qMG1ooeJq5CbzN9jsPK1B1OESrpqx0WBr64XlQmP0mcwRtXumVmM9fyb67l5fnnWdsH53ByPxLZhCaY0GPbSbZGg" />
                  </div>
                  <span>Tiếp tục với Google</span>
                </button>
                <button className="relative flex w-full items-center justify-center rounded-lg border border-[#dbe0e6] dark:border-[#293038] bg-white dark:bg-[#1a212a] px-4 h-12 text-[#111418] dark:text-white text-sm font-bold hover:bg-[#f6f7f8] dark:hover:bg-[#293038] transition-colors">
                  <div className="absolute left-4 flex items-center text-[#1877F2]">
                    <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                  </div>
                  <span>Tiếp tục với Facebook</span>
                </button>
              </div>
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#dbe0e6] dark:border-[#293038]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white dark:bg-[#111418] px-2 text-[#617589] dark:text-[#9aaebf]">hoặc đăng nhập bằng email</span>
                </div>
              </div>
              {/* Login Form */}
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#111418] dark:text-white" htmlFor="email">Email</label>
                  <div className="relative">
                    <input className="w-full h-12 rounded-lg border border-[#dbe0e6] dark:border-[#293038] bg-white dark:bg-[#1a212a] px-4 text-base text-[#111418] dark:text-white placeholder-[#9aaebf] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="email" placeholder="name@example.com" type="email" />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#617589]">
                      <span className="material-symbols-outlined text-[20px]">mail</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#111418] dark:text-white" htmlFor="password">Mật khẩu</label>
                  <div className="relative">
                    <input className="w-full h-12 rounded-lg border border-[#dbe0e6] dark:border-[#293038] bg-white dark:bg-[#1a212a] px-4 text-base text-[#111418] dark:text-white placeholder-[#9aaebf] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="password" placeholder="Nhập mật khẩu của bạn" type="password" />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#617589] hover:text-[#111418] dark:hover:text-white transition-colors cursor-pointer" type="button">
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-2">
                    <input className="w-4 h-4 rounded border-[#dbe0e6] text-primary focus:ring-primary" id="remember" type="checkbox" />
                    <label className="text-sm font-medium text-[#617589] dark:text-[#9aaebf] select-none" htmlFor="remember">Ghi nhớ đăng nhập</label>
                  </div>
                  <a className="text-sm font-bold text-primary hover:text-blue-700 dark:hover:text-blue-400 transition-colors" href="#">Quên mật khẩu?</a>
                </div>
                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm mt-2" type="submit">
                  <span className="truncate">Đăng nhập ngay</span>
                </button>
              </form>
              <p className="text-center text-sm text-[#617589] dark:text-[#9aaebf] mt-8">
                Bạn chưa có tài khoản? <a className="font-bold text-primary hover:text-blue-700 dark:hover:text-blue-400" href="#">Đăng ký miễn phí</a>
              </p>
              {/* Footer Links Small */}
              <div className="mt-auto pt-10 flex flex-wrap justify-center gap-6 text-xs text-[#9aaebf]">
                <a className="hover:text-[#111418] dark:hover:text-white transition-colors" href="#">Điều khoản dịch vụ</a>
                <span className="w-1 h-1 rounded-full bg-[#dbe0e6]"></span>
                <a className="hover:text-[#111418] dark:hover:text-white transition-colors" href="#">Chính sách bảo mật</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
