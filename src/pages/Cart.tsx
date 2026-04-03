

export default function Cart() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden font-display">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-[#2a3441] bg-white dark:bg-[#1a2632] px-6 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="size-8 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">CourseMaster</h2>
        </div>
        {/* Secure Checkout Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
          <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-[18px]">lock</span>
          <span className="text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wide">Thanh toán an toàn</span>
        </div>
      </header>
      {/* Main Content */}
      <main className="layout-container flex flex-col grow">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-8">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Cart & Products */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                {/* Page Heading */}
                <div className="flex flex-col gap-2">
                  <h1 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Giỏ hàng của bạn</h1>
                  <p className="text-[#617589] dark:text-gray-400 text-base font-normal">2 khóa học trong giỏ hàng</p>
                </div>
                {/* Cart Items List */}
                <div className="flex flex-col gap-4">
                  {/* Card 1 */}
                  <div className="group flex flex-col sm:flex-row items-stretch gap-4 rounded-xl bg-white dark:bg-[#1a2632] p-4 shadow-sm border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all">
                    <div className="w-full sm:w-40 bg-center bg-no-repeat bg-cover rounded-lg aspect-video sm:aspect-[4/3] shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnj_lQsTd7zYL9A64FigkwI5Pj2iRRPKCdMZlIYW8H8SLIsfmSrOcB63aKmizbad0Kdvs_DYDIYhe6B8HfoODbKOXqqOOi0wE40IIY9KQLtDHrc5_8Bjiec5MNL4g5XBNNk-S1s2X18Zwz2xnfCjjDh3VV7N7ixnPSY35tP-Nc8mCoNyVMYPXijCXlM_LedFe7DCmaLE6ZRLh-anYCryliJtEbyIzqDI0VhHPdcNQI8oIDBtmhUp0GXsy91MrjFzD09FtbUEwcluY")' }}>
                    </div>
                    <div className="flex flex-col flex-1 justify-between gap-3">
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight line-clamp-2">Fullstack Web Development 2024</h3>
                          <p className="text-[#617589] dark:text-gray-400 text-sm font-normal">Giảng viên: Nguyen Van A</p>
                          <div className="flex items-center gap-1 mt-1 text-yellow-500 text-sm">
                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                            <span className="font-bold text-[#111418] dark:text-white">4.8</span>
                            <span className="text-[#617589] dark:text-gray-500">(210 đánh giá)</span>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                      <div className="flex justify-between items-end border-t border-gray-100 dark:border-gray-800 pt-3 mt-auto">
                        <div className="flex items-center gap-2">
                          <span className="text-primary text-xl font-bold">1.200.000₫</span>
                          <span className="text-gray-400 text-sm line-through decoration-gray-400">2.000.000₫</span>
                        </div>
                        <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded">Giảm 40%</span>
                      </div>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="group flex flex-col sm:flex-row items-stretch gap-4 rounded-xl bg-white dark:bg-[#1a2632] p-4 shadow-sm border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all">
                    <div className="w-full sm:w-40 bg-center bg-no-repeat bg-cover rounded-lg aspect-video sm:aspect-[4/3] shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVhqDpvhSihKOfnHdxYtVqp3voi2onONXd5DzADQ2YqaBmImL8xxoATYC6YSMnl2dahsIjKunn39q3mHaG_yaK_h2uczoBbwWVYrCln5m4u3kxuLU-lb3yJUJOv7REKrT7gudgnGTc2uTGqF49d68gD_7aJBB0K82Z03IhuRpA5lEis_ffkvhYIUKTixCcIKVAIJcLV_HfUNHzYfJOqO8CipMOnqzrXuqbkanghwTzgZ93kzIvdvNzVi4J2BFjDmtTJcwHsnExRVU")' }}>
                    </div>
                    <div className="flex flex-col flex-1 justify-between gap-3">
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight line-clamp-2">ReactJS Advanced Masterclass</h3>
                          <p className="text-[#617589] dark:text-gray-400 text-sm font-normal">Giảng viên: Tran Thi B</p>
                          <div className="flex items-center gap-1 mt-1 text-yellow-500 text-sm">
                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                            <span className="font-bold text-[#111418] dark:text-white">4.9</span>
                            <span className="text-[#617589] dark:text-gray-500">(85 đánh giá)</span>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                      <div className="flex justify-between items-end border-t border-gray-100 dark:border-gray-800 pt-3 mt-auto">
                        <div className="flex items-center gap-2">
                          <span className="text-primary text-xl font-bold">900.000₫</span>
                          <span className="text-gray-400 text-sm line-through decoration-gray-400">1.500.000₫</span>
                        </div>
                        <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded">Giảm 40%</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Coupon Section */}
                <div className="bg-white dark:bg-[#1a2632] p-5 rounded-xl shadow-sm">
                  <label className="block text-sm font-bold mb-2 text-[#111418] dark:text-white">Mã giảm giá</label>
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <span className="material-symbols-outlined text-[20px]">local_activity</span>
                      </div>
                      <input className="w-full h-12 pl-10 pr-4 rounded-lg bg-background-light dark:bg-background-dark border border-[#dbe0e6] dark:border-gray-700 text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-gray-400" placeholder="Nhập mã giảm giá/voucher" />
                    </div>
                    <button className="bg-primary/10 hover:bg-primary/20 text-primary font-bold px-6 h-12 rounded-lg transition-colors whitespace-nowrap">
                      Áp dụng
                    </button>
                  </div>
                </div>
                {/* Upsell Section */}
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-4">Thường được mua cùng</h3>
                  <div className="bg-white dark:bg-[#1a2632] p-4 rounded-xl shadow-sm flex flex-col sm:flex-row items-center gap-4 border border-dashed border-gray-300 dark:border-gray-700">
                    <div className="w-16 h-16 rounded bg-cover bg-center shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUqonR4yveF8A5kyAMizjlJAomA8x4OhyCtyEn6kxF7CjBUrE3wv7qseeSvnqhdauQD1BJmvMGBJUJ9A_2wYfA19djQPMWTH1lKO-W7wzgPTYZaN6fPKqU-PMga3QZ9za1OmSl-MESYKxC90C7dNgb1CVt8II2SjiEEAs3nEcXT96biQt5659SVtQyI51PncQs7vugcRnGvT4z4qMdpMED4gBOHrSKyO8Ec7l6EdBsH_3epP9g3YXnpvQ8iAQug3pdF5LGI7KLwGE")' }}></div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="font-bold text-[#111418] dark:text-white text-sm">Git &amp; GitHub for Beginners</h4>
                      <p className="text-primary font-bold text-sm">300.000₫ <span className="text-gray-400 line-through text-xs font-normal ml-1">500.000₫</span></p>
                    </div>
                    <button className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">add</span> Thêm
                    </button>
                  </div>
                </div>
              </div>
              {/* Right Column: Sticky Summary */}
              <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
                <div className="flex flex-col gap-6">
                  {/* Summary Box */}
                  <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-lg border border-[#f0f2f4] dark:border-[#2a3441] overflow-hidden">
                    <div className="p-5 border-b border-[#f0f2f4] dark:border-[#2a3441]">
                      <h2 className="text-xl font-bold text-[#111418] dark:text-white">Tổng quan đơn hàng</h2>
                    </div>
                    <div className="p-5 flex flex-col gap-4">
                      {/* Cost Breakdown */}
                      <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center text-[#617589] dark:text-gray-400 text-sm">
                          <span>Tạm tính (Gốc)</span>
                          <span className="line-through">3.500.000₫</span>
                        </div>
                        <div className="flex justify-between items-center text-[#617589] dark:text-gray-400 text-sm">
                          <span>Giảm giá</span>
                          <span className="text-green-600 dark:text-green-400 font-medium">-1.400.000₫</span>
                        </div>
                        <div className="w-full h-px bg-gray-100 dark:bg-gray-700 my-1"></div>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-[#111418] dark:text-white text-lg">Tổng thanh toán</span>
                          <span className="font-black text-2xl text-primary">2.100.000₫</span>
                        </div>
                      </div>
                      {/* Payment Method Selection */}
                      <div className="flex flex-col gap-3 mt-4">
                        <p className="text-sm font-bold text-[#111418] dark:text-white">Phương thức thanh toán</p>
                        <label className="flex items-center gap-3 p-3 border border-primary bg-primary/5 dark:bg-primary/10 rounded-lg cursor-pointer transition-all relative overflow-hidden">
                          <input defaultChecked className="w-4 h-4 text-primary border-gray-300 focus:ring-primary" name="payment" type="radio" />
                          <div className="flex-1 flex items-center justify-between">
                            <span className="text-sm font-medium text-[#111418] dark:text-white">Thẻ tín dụng / Ghi nợ</span>
                            <div className="flex gap-1">
                              <span className="material-symbols-outlined text-gray-500 text-[20px]">credit_card</span>
                            </div>
                          </div>
                          <div className="absolute top-0 right-0 triangle-corner"></div>
                        </label>
                        <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 hover:border-primary/50 rounded-lg cursor-pointer transition-all">
                          <input className="w-4 h-4 text-primary border-gray-300 focus:ring-primary" name="payment" type="radio" />
                          <div className="flex-1 flex items-center justify-between">
                            <span className="text-sm font-medium text-[#111418] dark:text-white">Ví MoMo / ZaloPay</span>
                            <span className="material-symbols-outlined text-pink-500 text-[20px]">account_balance_wallet</span>
                          </div>
                        </label>
                        <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 hover:border-primary/50 rounded-lg cursor-pointer transition-all">
                          <input className="w-4 h-4 text-primary border-gray-300 focus:ring-primary" name="payment" type="radio" />
                          <div className="flex-1 flex items-center justify-between">
                            <span className="text-sm font-medium text-[#111418] dark:text-white">Chuyển khoản ngân hàng</span>
                            <span className="material-symbols-outlined text-gray-500 text-[20px]">account_balance</span>
                          </div>
                        </label>
                      </div>
                      {/* Checkout Button */}
                      <button className="mt-4 w-full bg-primary hover:bg-blue-600 text-white font-bold text-lg h-14 rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2">
                        Hoàn tất đơn hàng
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </button>
                      {/* Trust Microcopy */}
                      <div className="text-center">
                        <p className="text-xs text-[#617589] dark:text-gray-400 flex items-center justify-center gap-1">
                          <span className="material-symbols-outlined text-[14px] text-green-500">verified_user</span>
                          Đảm bảo hoàn tiền trong 30 ngày
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Support Box */}
                  <div className="bg-white dark:bg-[#1a2632] rounded-xl p-5 shadow-sm border border-[#f0f2f4] dark:border-[#2a3441] flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-full">
                        <span className="material-symbols-outlined text-primary">support_agent</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm text-[#111418] dark:text-white">Cần hỗ trợ?</p>
                        <p className="text-xs text-[#617589] dark:text-gray-400">Liên hệ với chúng tôi 24/7</p>
                      </div>
                    </div>
                    <a className="text-sm text-primary font-medium hover:underline ml-11" href="#">Chat ngay</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer Simple */}
      <footer className="mt-auto border-t border-[#f0f2f4] dark:border-[#2a3441] bg-white dark:bg-[#1a2632] py-8">
        <div className="layout-container flex justify-center">
          <div className="layout-content-container max-w-[960px] flex-1 px-10 text-center">
            <p className="text-sm text-[#617589] dark:text-gray-500">© 2024 CourseMaster Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
