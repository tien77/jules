

export default function Dashboard() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white h-screen flex flex-col overflow-hidden">
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark px-6 py-3 shrink-0 z-20">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-slate-900 dark:text-white">
            <div className="size-8 text-primary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">EduOnline</h2>
          </div>
          <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-slate-500 dark:text-slate-400 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-slate-100 dark:bg-slate-800 focus:border-none h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Tìm khóa học, bài giảng..." />
            </div>
          </label>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <button className="relative flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[24px]">notifications</span>
            <span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border-2 border-white dark:border-surface-dark"></span>
          </button>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-9 border border-slate-200 dark:border-slate-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVA2RGZFP5WlqyTvmNRQzsbY9NLuveIvMv1FPyvROKvsDfcEsWh0HYDdEK-7IpHe-dYv2pbP89sFINWl3wlEI9mME_6g4u5stQAPYw9wdRPP1SGXmToLxnB4Zbhid_fbIAbMUc_M8m0uGEPHraHbv05g-ZjOtL0I_12-GbTkKNxe1sz1nXH-5lfqdR0ngFP-V6nbH-uDNubNlrAonecUWqa8TtAm-zS8qdBpPnPdUUpP8ope__MRLEGslAmec87IP5Vzki8QRvxEw")' }}></div>
            <span className="hidden md:block text-sm font-medium text-slate-700 dark:text-slate-200">Nguyễn Văn Tuấn</span>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-72 bg-white dark:bg-surface-dark border-r border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex flex-col justify-between h-full p-4 overflow-y-auto">
            <div className="flex flex-col gap-6">
              {/* User Mini Profile */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-background-light dark:bg-background-dark/50 border border-slate-100 dark:border-slate-800">
                <div className="bg-center bg-no-repeat bg-cover rounded-full size-12 shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUZziNUA3XCZGcI90SExMB6McvQvm7WatUuftWzYy7LopJ97e_RcOAqxhSxDnMXZFo72_d46aNLxxlyWFfuT0lwl_iTEGLc3Zp4LJMR2UvaGEiAJmC7Q5MzEYCApPNR39HjJs_cxu1hwNZe78KLRyOAMbS5XFiD_5Vko3dL6w8wWaKaJrSqm_lLnBgoiP_j1Fzg8ODkKFk6jkkPnzh4CczPQxo2HMCQZmIo3hMAeMKq2rNep5Gq6juHLPZiygJXY6XwxVzALhBqss")' }}></div>
                <div className="flex flex-col">
                  <h1 className="text-slate-900 dark:text-white text-sm font-bold leading-normal">Nguyễn Văn Tuấn</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">Học viên VIP</p>
                </div>
              </div>
              {/* Menu */}
              <div className="flex flex-col gap-1">
                <p className="px-3 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Menu</p>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary" href="#">
                  <span className="material-symbols-outlined fill text-[20px]">dashboard</span>
                  <span className="text-sm font-semibold leading-normal">Bảng điều khiển</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group" href="#">
                  <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">school</span>
                  <span className="text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Khóa học của tôi</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group" href="#">
                  <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">favorite</span>
                  <span className="text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Yêu thích</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group" href="#">
                  <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">workspace_premium</span>
                  <span className="text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Chứng chỉ</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group" href="#">
                  <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">chat</span>
                  <span className="text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Thảo luận</span>
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <p className="px-3 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 mt-2">Cài đặt</p>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group" href="#">
                  <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">settings</span>
                  <span className="text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Tài khoản</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" href="#">
                  <span className="material-symbols-outlined text-[20px]">logout</span>
                  <span className="text-sm font-medium leading-normal">Đăng xuất</span>
                </a>
              </div>
            </div>
            {/* Promo Box */}
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-4 text-white mt-4">
              <div className="size-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-white">card_giftcard</span>
              </div>
              <p className="font-bold text-sm mb-1">Nâng cấp Pro</p>
              <p className="text-xs text-white/80 mb-3">Truy cập không giới hạn 500+ khóa học.</p>
              <button className="w-full bg-white text-primary text-xs font-bold py-2 rounded-lg hover:bg-blue-50 transition">Xem chi tiết</button>
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 scroll-smooth">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
            {/* Heading */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">Xin chào, Tuấn! 👋</h1>
                <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Chào mừng trở lại. Bạn có 2 khóa học đang diễn ra.</p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition">Báo cáo tuần</button>
              </div>
            </div>
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-4 rounded-xl p-5 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <span className="material-symbols-outlined fill">check_circle</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Khóa học hoàn thành</p>
                  <p className="text-slate-900 dark:text-white text-2xl font-bold">3</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl p-5 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="size-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <span className="material-symbols-outlined fill">schedule</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Giờ học tập</p>
                  <p className="text-slate-900 dark:text-white text-2xl font-bold">12</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl p-5 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="size-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <span className="material-symbols-outlined fill">emoji_events</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Chứng chỉ đạt được</p>
                  <p className="text-slate-900 dark:text-white text-2xl font-bold">1</p>
                </div>
              </div>
            </div>
            {/* Continue Learning Hero Card */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Tiếp tục học</h2>
              <div className="flex flex-col-reverse md:flex-row items-stretch overflow-hidden rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex flex-1 flex-col justify-center gap-4 p-6 md:p-8">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-semibold mb-3">
                      <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                      Đang học
                    </div>
                    <h3 className="text-slate-900 dark:text-white text-xl md:text-2xl font-bold leading-tight mb-2">React JS Masterclass: Từ cơ bản đến nâng cao</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-normal">Bài 12: Giới thiệu về Hooks - useState và useEffect</p>
                  </div>
                  {/* Progress */}
                  <div className="w-full max-w-md flex flex-col gap-2">
                    <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                      <span>Hoàn thành 45%</span>
                      <span>12/30 Bài</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all w-full md:w-auto shadow-lg shadow-blue-500/20">
                      <span className="material-symbols-outlined">play_circle</span>
                      Tiếp tục bài học
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-2/5 min-h-[200px] md:min-h-full bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhRGDhFHa3EsgcnVD1_KxXUpzt78nINx6_5HTK5lV3eq4y6_PIEKnUL2icMuL_lJrmDFNH6cwkGpXvPxhaI-GEeMhVOZmRJ2DcZWSKK4CPOtiU7KWiYTzD6AUwXyCQyJq70Y5DIoSXYWiJ2luJjeMY_6dStMI_oBGfsSq3fe6rq23L9od_8Oyq2qNzicI0FraPD58_62leabOAanNwfDIwiIj12ZAfRK6Hxg3QSMXCTtot3ALbnkCi4OP1ZokMKP126vgnTvFWdtA")' }}>
                  <div className="absolute inset-0 bg-black/10 md:bg-gradient-to-r md:from-black/10 md:to-transparent"></div>
                </div>
              </div>
            </section>
            {/* My Courses Grid */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Khóa học của tôi</h2>
                <a className="text-sm font-medium text-primary hover:underline" href="#">Xem tất cả</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Course Card 1 */}
                <div className="group flex flex-col rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-48 w-full bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4y_V3HKR1WCeLAr24iTXlFqa2dduxemNndFExvzinTVSN1_4MODSBjlKhL4bJZzzA1HK89NwSoC_ODQV02o3ob7U1hkUNGRlpqONtpB2mWz7aVrY7A0V8JzyUzOX8O23nKW6mehKStyVptysaeTQeT4pjGjmEJAzpcH_zTibwQumrjDOlrNffqOuroMztvdu69jCYGI5QoZsjtQZmII7K7EBnJDMOJDj9Xh6gFpOwpCmggGb0SltEd1LGvnxWrIToWxjF5y0YlQU")' }}>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-3 right-3 bg-white dark:bg-surface-dark px-2 py-1 rounded text-xs font-bold shadow-sm">Thiết kế</div>
                  </div>
                  <div className="flex flex-col flex-1 p-4 gap-3">
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-1 line-clamp-2">UI/UX Design Fundamental cho người mới bắt đầu</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Giảng viên: Lê Minh</p>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 text-right">75% Hoàn thành</p>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <button className="w-full py-2 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition">Vào lớp học</button>
                  </div>
                </div>
                {/* Course Card 2 */}
                <div className="group flex flex-col rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-48 w-full bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMhzVHztfVl-7Yk5OUvTiluznlMHEiMxeHO3rxxzIdnFSzmoDPhL3kJGngYpN6A4qdAdqdpwZYxu46A_RckITtxo3ovLoawzsWYSxf_N2zrKLNDlMaaBtiliiJJXXwz-FSsMSIyejCkauwjqbV9vhquthw4feHqfUT_j4lUHMU7jJMjrFpdEd7db9r7OiHUKpKjfG_JyEdJ9-Ulhhbs2GucQznBy2CJ-Y9ejJf4dBhyVLfLMZrLQ6PDaxYZZx3PcDbE3JfCwJp1pM")' }}>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-3 right-3 bg-white dark:bg-surface-dark px-2 py-1 rounded text-xs font-bold shadow-sm">Lập trình</div>
                  </div>
                  <div className="flex flex-col flex-1 p-4 gap-3">
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-1 line-clamp-2">Python Data Science Bootcamp 2024</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Giảng viên: Trần Hùng</p>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '10%' }}></div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 text-right">10% Hoàn thành</p>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <button className="w-full py-2 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition">Vào lớp học</button>
                  </div>
                </div>
                {/* Course Card 3 */}
                <div className="group flex flex-col rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-all duration-300 opacity-75 hover:opacity-100">
                  <div className="h-48 w-full bg-center bg-no-repeat bg-cover relative grayscale group-hover:grayscale-0 transition-all" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7Xll91Rd8Vi1MfS62ZhcbzPhf9Qw9LYmliJtIw7aJHnpuOgaL56__kAa1YDCV5L62ZFyXa32Sk99xUKipHClVxHPfUXVXURKK-XTzQoqoME-hSP8ZoVGBMuDgOfA-Es6qYkRgD40yIDhbwkmo5u7iKdU5tkKnzF9kFIN3IYYrw-KAJHVRK1c9geSdLnarNLFPEVNinL19VZ3oeeNTCq-JF0ZFbUDAZ49Qo1qrY_JNK9B85XLrqjOQPxHGlfqTTYMjQS2Sj8bW1Dc")' }}>
                    <div className="absolute inset-0 bg-white/50 dark:bg-black/50 flex items-center justify-center backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all group-hover:bg-transparent">
                      <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full shadow-lg">Đã hoàn thành</span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-4 gap-3">
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-1 line-clamp-2">Digital Marketing Foundation</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Giảng viên: Sarah Nguyễn</p>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <p className="text-xs text-green-600 dark:text-green-400 text-right font-medium">Đã cấp chứng chỉ</p>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <button className="w-full py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      Tải chứng chỉ
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/* Recommendations / Upsell */}
            <section className="pb-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Gợi ý cho bạn</h2>
              <div className="p-6 rounded-xl bg-gradient-to-r from-purple-900 to-indigo-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex flex-col gap-2 max-w-lg">
                    <span className="uppercase tracking-widest text-xs font-bold text-purple-300">Khóa học mới</span>
                    <h3 className="text-2xl font-bold">Làm chủ Figma trong 30 ngày</h3>
                    <p className="text-purple-100 text-sm">Nâng cao kỹ năng thiết kế UI của bạn với khóa học chuyên sâu mới nhất. Giảm 30% cho học viên cũ.</p>
                  </div>
                  <button className="shrink-0 px-6 py-3 bg-white text-indigo-900 font-bold rounded-lg hover:bg-purple-50 transition shadow-lg">Xem khóa học</button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
