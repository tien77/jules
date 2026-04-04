
export default function CourseDetail() {
  return (
    <>
      {/* Main Content Layout */}
      <main className="flex-grow flex justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Left Column: Course Content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap gap-2 items-center text-sm">
              <a className="text-text-sub-light dark:text-text-sub-dark hover:text-primary transition-colors" href="#">Trang chủ</a>
              <span className="text-text-sub-light dark:text-text-sub-dark">/</span>
              <a className="text-text-sub-light dark:text-text-sub-dark hover:text-primary transition-colors" href="#">Lập trình</a>
              <span className="text-text-sub-light dark:text-text-sub-dark">/</span>
              <span className="text-text-main-light dark:text-text-main-dark font-medium truncate max-w-[200px] sm:max-w-none">Phát triển Web Fullstack với React & Node.js</span>
            </nav>
            {/* Header Section (Mobile Only - Video Placeholder) */}
            <div className="lg:hidden w-full aspect-video rounded-xl overflow-hidden relative group cursor-pointer shadow-lg mb-4">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Modern coding setup with laptop and code on screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6TQBSRKRSp-qri--fDheVAKenc2OuCpbE0Ka7Qr6OacrpPGK-FjH7mXTtX7gzQDbOJqV6vdM23C5otGVvdzPo0P1VEGj608DnHT-Pd7NO1qI6dGMasvQead2lFcPU5jQLlN9dvfJfqnmVh-R8hOGygS_Jd2ELEyDCtrLJcMqqxPhJjoJWsOVYjETL2FVwAzEdTRnYk8PnXcvDisbAhJQduYae8lWqJo6Mzztt6L-VmlwAWXcADpXp_aqWfmuX2td9yWxKlQlGBRc" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <div className="size-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <span className="material-symbols-outlined text-4xl text-black ml-1">play_arrow</span>
                </div>
              </div>
            </div>
            {/* Page Heading */}
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-text-main-light dark:text-text-main-dark">
                Phát triển Web Fullstack với React & Node.js
              </h1>
              <p className="text-lg text-text-sub-light dark:text-text-sub-dark">
                Trở thành lập trình viên Full-stack chuyên nghiệp chỉ với một khóa học. Làm chủ HTML, CSS, Javascript, Node, React, MongoDB và hơn thế nữa!
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 px-2.5 py-0.5 rounded border border-yellow-200 dark:border-yellow-800">Bestseller</span>
                <div className="flex items-center gap-1 text-yellow-500">
                  <span className="font-bold text-text-main-light dark:text-text-main-dark mr-1">4.8</span>
                  <span className="material-symbols-outlined text-[18px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                  <a className="ml-1 underline text-primary hover:text-blue-700" href="#reviews">(340 đánh giá)</a>
                </div>
                <span className="text-text-sub-light dark:text-text-sub-dark">1,200 học viên</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-sub-light dark:text-text-sub-dark mt-1">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">person</span>
                  <span>Tạo bởi <a className="text-primary hover:underline" href="#">Nguyễn Văn A</a></span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">update</span>
                  <span>Cập nhật lần cuối 11/2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">language</span>
                  <span>Tiếng Việt</span>
                </div>
              </div>
            </div>
            {/* What you'll learn Box */}
            <div className="border border-[#e5e7eb] dark:border-[#2a3642] bg-card-light dark:bg-card-dark rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-text-main-light dark:text-text-main-dark">Bạn sẽ học được gì</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-green-600 dark:text-green-400 mt-0.5 text-xl">check</span>
                  <span className="text-sm text-text-main-light dark:text-text-main-dark">Xây dựng ứng dụng web phức tạp từ đầu đến cuối</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-green-600 dark:text-green-400 mt-0.5 text-xl">check</span>
                  <span className="text-sm text-text-main-light dark:text-text-main-dark">Thành thạo ReactJS (Hooks, Redux, Context API)</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-green-600 dark:text-green-400 mt-0.5 text-xl">check</span>
                  <span className="text-sm text-text-main-light dark:text-text-main-dark">Backend API RESTful với Node.js và Express</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-green-600 dark:text-green-400 mt-0.5 text-xl">check</span>
                  <span className="text-sm text-text-main-light dark:text-text-main-dark">Làm việc với cơ sở dữ liệu NoSQL MongoDB</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-green-600 dark:text-green-400 mt-0.5 text-xl">check</span>
                  <span className="text-sm text-text-main-light dark:text-text-main-dark">Xác thực người dùng (JWT, Cookies)</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-green-600 dark:text-green-400 mt-0.5 text-xl">check</span>
                  <span className="text-sm text-text-main-light dark:text-text-main-dark">Triển khai ứng dụng lên Heroku và Netlify</span>
                </div>
              </div>
            </div>
            {/* Course Content / Curriculum */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark">Nội dung khóa học</h2>
              <div className="flex justify-between items-center text-sm text-text-sub-light dark:text-text-sub-dark mb-2">
                <span>12 chương • 145 bài học • Tổng thời lượng 42h 30m</span>
                <button className="text-primary font-bold hover:underline">Mở rộng tất cả</button>
              </div>
              {/* Accordion Item 1 */}
              <div className="border border-[#e5e7eb] dark:border-[#2a3642] rounded-lg overflow-hidden bg-card-light dark:bg-card-dark">
                <details className="group" open>
                  <summary className="flex items-center justify-between p-4 bg-[#f9fafb] dark:bg-[#1f2937] cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2d3748] transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform text-text-sub-light dark:text-text-sub-dark">expand_more</span>
                      <span className="font-bold text-text-main-light dark:text-text-main-dark">Phần 1: Giới thiệu khóa học</span>
                    </div>
                    <span className="text-sm text-text-sub-light dark:text-text-sub-dark">3 bài học • 15m</span>
                  </summary>
                  <div className="p-0">
                    <a className="flex items-center justify-between p-3 pl-12 border-b border-gray-100 dark:border-[#2a3642] hover:bg-gray-50 dark:hover:bg-[#252f3e] group/item" href="#">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[18px] text-text-sub-light dark:text-text-sub-dark">play_circle</span>
                        <span className="text-sm text-text-main-light dark:text-text-main-dark group-hover/item:text-primary transition-colors">Giới thiệu tổng quan</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-primary font-medium border border-primary/20 bg-primary/5 px-1.5 py-0.5 rounded">Học thử</span>
                        <span className="text-sm text-text-sub-light dark:text-text-sub-dark">05:20</span>
                      </div>
                    </a>
                    <a className="flex items-center justify-between p-3 pl-12 border-b border-gray-100 dark:border-[#2a3642] hover:bg-gray-50 dark:hover:bg-[#252f3e] group/item" href="#">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[18px] text-text-sub-light dark:text-text-sub-dark">play_circle</span>
                        <span className="text-sm text-text-main-light dark:text-text-main-dark group-hover/item:text-primary transition-colors">Cài đặt công cụ cần thiết</span>
                      </div>
                      <span className="text-sm text-text-sub-light dark:text-text-sub-dark">08:15</span>
                    </a>
                    <div className="flex items-center justify-between p-3 pl-12 hover:bg-gray-50 dark:hover:bg-[#252f3e] group/item">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[18px] text-text-sub-light dark:text-text-sub-dark">description</span>
                        <span className="text-sm text-text-main-light dark:text-text-main-dark group-hover/item:text-primary transition-colors">Tài liệu tham khảo & Source Code</span>
                      </div>
                      <span className="text-sm text-text-sub-light dark:text-text-sub-dark">01:25</span>
                    </div>
                  </div>
                </details>
              </div>
              {/* Accordion Item 2 */}
              <div className="border border-[#e5e7eb] dark:border-[#2a3642] rounded-lg overflow-hidden bg-card-light dark:bg-card-dark">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 bg-[#f9fafb] dark:bg-[#1f2937] cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2d3748] transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform text-text-sub-light dark:text-text-sub-dark">expand_more</span>
                      <span className="font-bold text-text-main-light dark:text-text-main-dark">Phần 2: Kiến thức HTML & CSS Nâng cao</span>
                    </div>
                    <span className="text-sm text-text-sub-light dark:text-text-sub-dark">15 bài học • 2h 30m</span>
                  </summary>
                  <div className="p-4 text-center text-sm text-text-sub-light dark:text-text-sub-dark">
                    Nội dung chi tiết phần này...
                  </div>
                </details>
              </div>
              {/* More sections placeholder */}
              <button className="w-full py-3 border border-[#e5e7eb] dark:border-[#2a3642] rounded-lg text-sm font-bold text-text-main-light dark:text-text-main-dark hover:bg-gray-50 dark:hover:bg-[#2a3642] transition-colors bg-card-light dark:bg-card-dark">
                Xem thêm 10 phần nữa
              </button>
            </div>
            {/* Instructor */}
            <div className="flex flex-col gap-4 pt-6 border-t border-[#f0f2f4] dark:border-[#2a3642]">
              <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark">Giảng viên</h2>
              <div className="flex gap-4 items-start">
                <div className="size-24 rounded-full overflow-hidden shrink-0 border-2 border-white dark:border-[#2a3642] shadow-md">
                  <img className="w-full h-full object-cover" alt="Portrait of instructor Nguyen Van A" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVv5duyrCCjWshy3Wcm2BlHelkkVVS9etM-oPNH6RKEPqYOcRqhBbhSfIP0KRJAz7jHSYjvUYW9u1gQXY4W-ym4x2S3-Kf9usjijU4uZSJRGHrcArfyktvxg1M-mfvEuyQZP1JQycxoMLdD0KlLkgd1TYu05stiHXGHI1zWScX6xjS5OUyY2Ngg7CU_8QQA6qXlGw2hmRAmBK2Cs5sFF4V-C40ifhLQ7YJvWNmz1S0v52-ffITlJBipFbf-UpCgizF6IpVmr9lr4o" />
                </div>
                <div className="flex flex-col gap-1">
                  <a className="text-xl font-bold text-primary hover:underline" href="#">Nguyễn Văn A</a>
                  <p className="text-text-sub-light dark:text-text-sub-dark text-sm">Senior Fullstack Developer tại TechCorp</p>
                  <div className="flex gap-4 text-sm mt-1 mb-2">
                    <div className="flex items-center gap-1 text-text-sub-light dark:text-text-sub-dark">
                      <span className="material-symbols-outlined text-[16px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span>4.8 Xếp hạng</span>
                    </div>
                    <div className="flex items-center gap-1 text-text-sub-light dark:text-text-sub-dark">
                      <span className="material-symbols-outlined text-[16px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                      <span>15,000 Học viên</span>
                    </div>
                    <div className="flex items-center gap-1 text-text-sub-light dark:text-text-sub-dark">
                      <span className="material-symbols-outlined text-[16px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                      <span>5 Khóa học</span>
                    </div>
                  </div>
                  <p className="text-sm text-text-main-light dark:text-text-main-dark leading-relaxed line-clamp-3">
                    Tôi là Nguyễn Văn A, một lập trình viên Fullstack với hơn 8 năm kinh nghiệm làm việc tại các công ty công nghệ lớn. Tôi đam mê chia sẻ kiến thức và giúp đỡ các bạn trẻ tiếp cận với công nghệ mới nhất một cách dễ hiểu và thực tế.
                  </p>
                </div>
              </div>
            </div>
            {/* Reviews */}
            <div className="flex flex-col gap-6 pt-6 border-t border-[#f0f2f4] dark:border-[#2a3642]" id="reviews">
              <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark">Đánh giá từ học viên</h2>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex flex-col items-center justify-center p-6 bg-card-light dark:bg-card-dark rounded-xl border border-[#f0f2f4] dark:border-[#2a3642] shadow-sm min-w-[160px]">
                  <span className="text-5xl font-black text-text-main-light dark:text-text-main-dark mb-1">4.8</span>
                  <div className="flex gap-0.5 text-yellow-500 mb-2">
                    <span className="material-symbols-outlined text-[20px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                  </div>
                  <span className="text-sm font-bold text-text-sub-light dark:text-text-sub-dark">Xếp hạng khóa học</span>
                </div>
                <div className="flex-1 min-w-[280px]">
                  <div className="grid grid-cols-[20px_1fr_40px] items-center gap-y-2 text-sm">
                    <span className="text-text-sub-light dark:text-text-sub-dark text-right pr-2">5</span>
                    <div className="h-2 w-full bg-[#e5e7eb] dark:bg-[#2a3642] rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '77%' }}></div>
                    </div>
                    <span className="text-text-sub-light dark:text-text-sub-dark pl-2">77%</span>
                    <span className="text-text-sub-light dark:text-text-sub-dark text-right pr-2">4</span>
                    <div className="h-2 w-full bg-[#e5e7eb] dark:bg-[#2a3642] rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                    <span className="text-text-sub-light dark:text-text-sub-dark pl-2">15%</span>
                    <span className="text-text-sub-light dark:text-text-sub-dark text-right pr-2">3</span>
                    <div className="h-2 w-full bg-[#e5e7eb] dark:bg-[#2a3642] rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                    <span className="text-text-sub-light dark:text-text-sub-dark pl-2">5%</span>
                    <span className="text-text-sub-light dark:text-text-sub-dark text-right pr-2">2</span>
                    <div className="h-2 w-full bg-[#e5e7eb] dark:bg-[#2a3642] rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '2%' }}></div>
                    </div>
                    <span className="text-text-sub-light dark:text-text-sub-dark pl-2">2%</span>
                    <span className="text-text-sub-light dark:text-text-sub-dark text-right pr-2">1</span>
                    <div className="h-2 w-full bg-[#e5e7eb] dark:bg-[#2a3642] rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '1%' }}></div>
                    </div>
                    <span className="text-text-sub-light dark:text-text-sub-dark pl-2">1%</span>
                  </div>
                </div>
              </div>
              {/* Individual Review */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-5 border border-[#e5e7eb] dark:border-[#2a3642] rounded-xl bg-card-light dark:bg-card-dark">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-primary font-bold">L</div>
                    <div>
                      <p className="font-bold text-text-main-light dark:text-text-main-dark text-sm">Lê Minh H.</p>
                      <div className="flex gap-0.5 text-yellow-500 text-xs">
                        <span className="material-symbols-outlined text-[14px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[14px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[14px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[14px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[14px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="text-text-sub-light dark:text-text-sub-dark ml-2">2 tuần trước</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-text-main-light dark:text-text-main-dark leading-relaxed">
                    Khóa học rất chi tiết và dễ hiểu. Giảng viên hỗ trợ nhiệt tình. Mình đã tự làm được một project portfolio sau khi học xong. Rất đáng tiền!
                  </p>
                </div>
                <div className="p-5 border border-[#e5e7eb] dark:border-[#2a3642] rounded-xl bg-card-light dark:bg-card-dark">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300 font-bold">T</div>
                    <div>
                      <p className="font-bold text-text-main-light dark:text-text-main-dark text-sm">Trần Văn T.</p>
                      <div className="flex gap-0.5 text-yellow-500 text-xs">
                        <span className="material-symbols-outlined text-[14px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[14px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[14px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[14px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_border</span>
                        <span className="text-text-sub-light dark:text-text-sub-dark ml-2">1 tháng trước</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-text-main-light dark:text-text-main-dark leading-relaxed">
                    Nội dung phần React rất hay, tuy nhiên phần Node.js hơi nhanh một chút. Cần thêm bài tập thực hành phần backend.
                  </p>
                </div>
              </div>
              <button className="self-start text-sm font-bold text-primary border border-primary/30 rounded px-4 py-2 hover:bg-primary/5 transition-colors">Xem tất cả đánh giá</button>
            </div>
          </div>
          {/* Right Column: Sticky Pricing Card (Desktop) */}
          <div className="hidden lg:block lg:col-span-1 relative">
            <div className="sticky top-24 flex flex-col gap-0 z-20">
              {/* Video Preview Image */}
              <div className="w-full aspect-video rounded-t-xl overflow-hidden relative group cursor-pointer shadow-lg border border-b-0 border-[#f0f2f4] dark:border-[#2a3642]">
                <img className="w-full h-full object-cover" alt="Modern coding setup with laptop and code on screen preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEy9RhEZue64TXuDbC3WdXDO9wnzRHzpthhjAoBe3skS8dB40JEVUu9Y5bIoke0zFoWZUl5Eucka95a842PmFQc9SjUSKJX19ZDML9X72rkbzicfjGBxM_MqVqJJ81R43jBScn9KaEaKTWw9XwasRrrP3gRL6UoYA3huLswH3y_mHlDOTK_Zk3ZNt50MeCcd0Lv7vp7VfvwqXDZDJOe71NOpydxUcj0ZaMmeo3J84XAhSSyj5Lyjfvq-WsiA9iRsxJNK1c8IUni3c" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="size-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm animate-pulse">
                    <span className="material-symbols-outlined text-4xl text-primary ml-1 fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-4 w-full text-center text-white font-bold text-sm drop-shadow-md">Xem giới thiệu khóa học</div>
              </div>
              {/* Pricing Content */}
              <div className="bg-card-light dark:bg-card-dark p-6 rounded-b-xl shadow-lg border border-[#f0f2f4] dark:border-[#2a3642] flex flex-col gap-5">
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-black text-text-main-light dark:text-text-main-dark">1.299.000đ</span>
                  <span className="text-lg text-text-sub-light dark:text-text-sub-dark line-through mb-1">2.500.000đ</span>
                  <span className="text-sm font-bold text-red-500 mb-1.5 ml-auto">Giảm 48%</span>
                </div>
                <div className="flex flex-col gap-1 text-red-600 text-sm font-medium items-start">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">timer</span>
                    <span>Ưu đãi kết thúc sau 5 giờ nữa!</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <button className="w-full h-12 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all transform active:scale-[0.98] text-lg">
                    Đăng ký ngay
                  </button>
                  <button className="w-full h-12 bg-white dark:bg-[#1f2937] border border-black dark:border-gray-500 text-text-main-light dark:text-text-main-dark font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-[#2d3748] transition-colors">
                    Thêm vào giỏ hàng
                  </button>
                </div>
                <div className="text-center text-xs text-text-sub-light dark:text-text-sub-dark">
                  Đảm bảo hoàn tiền trong 30 ngày
                </div>
                <div className="pt-4 border-t border-[#f0f2f4] dark:border-[#2a3642]">
                  <p className="font-bold text-text-main-light dark:text-text-main-dark mb-3 text-sm">Khóa học bao gồm:</p>
                  <ul className="flex flex-col gap-3 text-sm text-text-main-light dark:text-text-main-dark">
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px] text-text-sub-light dark:text-text-sub-dark">ondemand_video</span>
                      <span>42.5 giờ video bài giảng</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px] text-text-sub-light dark:text-text-sub-dark">code</span>
                      <span>15 bài tập Coding</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px] text-text-sub-light dark:text-text-sub-dark">description</span>
                      <span>7 tài liệu tải xuống</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px] text-text-sub-light dark:text-text-sub-dark">all_inclusive</span>
                      <span>Truy cập trọn đời</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px] text-text-sub-light dark:text-text-sub-dark">devices</span>
                      <span>Truy cập trên Mobile và TV</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px] text-text-sub-light dark:text-text-sub-dark">emoji_events</span>
                      <span>Cấp chứng chỉ hoàn thành</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <button className="text-sm font-bold text-text-main-light dark:text-text-main-dark underline decoration-dotted">Chia sẻ</button>
                  <button className="text-sm font-bold text-text-main-light dark:text-text-main-dark underline decoration-dotted">Tặng khóa học</button>
                  <button className="text-sm font-bold text-text-main-light dark:text-text-main-dark underline decoration-dotted">Mã giảm giá</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Mobile Floating CTA (Sticky Bottom) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1a2632] border-t border-[#f0f2f4] dark:border-[#2a3642] p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
        <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-text-main-light dark:text-text-main-dark">1.299.000đ</span>
            <span className="text-xs text-text-sub-light dark:text-text-sub-dark line-through">2.500.000đ</span>
          </div>
          <button className="flex-1 h-12 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all transform active:scale-[0.98]">
            Đăng ký ngay
          </button>
        </div>
      </div>
    </>
  );
}
