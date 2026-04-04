
export default function CourseList() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-[1440px] px-4 md:px-10 lg:px-20 py-6 md:py-8">
          <div className="flex min-h-[320px] md:min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 md:p-12 relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6evOmZpl1aWPXwqLvcr9DKrjM9hOa-ZVgPTL4lME0ORkDepMywY9RGAi_7_tQHVNK0nZoriX5hfIsGFaFuKQ4EuzCglxDBWYwyhKQc5k_-tdJGzdKQaY_yzzP_i2vC6xj0bqrWk6U8HEnJQptyFlAmg13tL6OOT1gtQZdhKQMe7LLjI167jQm5Z0N7HkZpGvXARuxnHsodU3Lu-0yhmiOS25H-wdEGDI87bkrH6fk27BcQPcB3641e6c_kuNlu632lCy8RwRvbQk")' }}>
            <div className="flex flex-col gap-3 text-center z-10 max-w-3xl">
              <h1 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                Khám phá tiềm năng của bạn
              </h1>
              <p className="text-gray-200 text-base md:text-lg font-normal leading-normal">
                Hơn 10.000 khóa học từ các chuyên gia hàng đầu trong mọi lĩnh vực
              </p>
            </div>
            <div className="flex flex-col w-full max-w-[600px] z-10 mt-4">
              <label className="relative flex w-full items-center">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-500">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="form-input flex w-full rounded-lg text-slate-900 border-none bg-white h-14 pl-12 pr-32 text-base shadow-lg focus:ring-2 focus:ring-primary/50" placeholder="Tìm kiếm khóa học (ví dụ: Python, Marketing)..." />
                <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-blue-600 text-white font-bold rounded-md px-6 text-sm transition-colors">
                  Tìm kiếm
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumbs */}
      <div className="w-full bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-4">
          <div className="flex flex-wrap gap-2 items-center text-sm">
            <a className="text-slate-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary font-medium" href="#">Trang chủ</a>
            <span className="text-slate-400 dark:text-gray-600">/</span>
            <span className="text-slate-900 dark:text-white font-medium">Tất cả khóa học</span>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 w-full bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-8">
                {/* Filter Header Mobile */}
                <div className="flex lg:hidden justify-between items-center mb-4">
                  <button className="flex items-center gap-2 text-slate-900 dark:text-white font-bold border border-slate-300 dark:border-slate-700 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 w-full justify-center">
                    <span className="material-symbols-outlined">filter_list</span>
                    Bộ lọc tìm kiếm
                  </button>
                </div>
                <div className="hidden lg:block space-y-8">
                  {/* Category Filter */}
                  <div className="space-y-3">
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg">Chủ đề</h3>
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" type="checkbox" />
                        <span className="text-slate-600 dark:text-gray-300 group-hover:text-primary text-sm font-medium">Lập trình Web (120)</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" type="checkbox" />
                        <span className="text-slate-600 dark:text-gray-300 group-hover:text-primary text-sm font-medium">Thiết kế đồ họa (85)</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" type="checkbox" />
                        <span className="text-slate-600 dark:text-gray-300 group-hover:text-primary text-sm font-medium">Marketing (64)</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" type="checkbox" />
                        <span className="text-slate-600 dark:text-gray-300 group-hover:text-primary text-sm font-medium">Kinh doanh (42)</span>
                      </label>
                    </div>
                  </div>
                  <div className="h-px bg-slate-200 dark:bg-slate-700"></div>
                  {/* Rating Filter */}
                  <div className="space-y-3">
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg">Đánh giá</h3>
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-5 h-5 border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" name="rating" type="radio" />
                        <div className="flex items-center text-yellow-500">
                          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="material-symbols-outlined text-[20px] text-slate-300 dark:text-slate-600" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
                          <span className="ml-2 text-slate-600 dark:text-gray-300 text-sm font-medium group-hover:text-primary">4.0 trở lên</span>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-5 h-5 border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" name="rating" type="radio" />
                        <div className="flex items-center text-yellow-500">
                          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="material-symbols-outlined text-[20px] text-slate-300 dark:text-slate-600" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
                          <span className="material-symbols-outlined text-[20px] text-slate-300 dark:text-slate-600" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
                          <span className="ml-2 text-slate-600 dark:text-gray-300 text-sm font-medium group-hover:text-primary">3.0 trở lên</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="h-px bg-slate-200 dark:bg-slate-700"></div>
                  {/* Level Filter */}
                  <div className="space-y-3">
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg">Cấp độ</h3>
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" type="checkbox" />
                        <span className="text-slate-600 dark:text-gray-300 group-hover:text-primary text-sm font-medium">Người mới bắt đầu</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" type="checkbox" />
                        <span className="text-slate-600 dark:text-gray-300 group-hover:text-primary text-sm font-medium">Trung cấp</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" type="checkbox" />
                        <span className="text-slate-600 dark:text-gray-300 group-hover:text-primary text-sm font-medium">Chuyên gia</span>
                      </label>
                    </div>
                  </div>
                  <div className="h-px bg-slate-200 dark:bg-slate-700"></div>
                  {/* Price Filter */}
                  <div className="space-y-3">
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg">Giá</h3>
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" type="checkbox" />
                        <span className="text-slate-600 dark:text-gray-300 group-hover:text-primary text-sm font-medium">Miễn phí</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" type="checkbox" />
                        <span className="text-slate-600 dark:text-gray-300 group-hover:text-primary text-sm font-medium">Trả phí</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            {/* Course Grid Area */}
            <main className="flex-1 min-w-0">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Tất cả các khóa học <span className="text-slate-500 text-lg font-normal ml-2">(1,245 kết quả)</span></h2>
                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <span className="text-slate-500 dark:text-gray-400 text-sm font-medium whitespace-nowrap">Sắp xếp theo:</span>
                  <div className="relative">
                    <select className="appearance-none bg-white dark:bg-gray-800 border border-slate-300 dark:border-gray-700 text-slate-900 dark:text-white py-2 pl-4 pr-10 rounded-lg text-sm font-medium focus:ring-primary focus:border-primary cursor-pointer">
                      <option>Phổ biến nhất</option>
                      <option>Mới nhất</option>
                      <option>Giá: Thấp đến cao</option>
                      <option>Giá: Cao đến thấp</option>
                      <option>Đánh giá cao nhất</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                      <span className="material-symbols-outlined text-sm">expand_more</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Course Card 1 */}
                <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden bg-gray-200">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Laptop displaying code for Python programming course" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBanULI_U5lEJo7Pl6M3DHHx2O3HCDBu7NRk7Gn8bmFLUtdet9lKSCAu-CTaHqUpJLnXqv57heFVaFVYtjN7n3XjuHyKbD_hKmFn5uEhSgQUCHgcfXv1JJol-hXmoQGbHo6ZUEgE6E6jdyZlhvqhyRCEX43ao10H_QQMQHtYhr4U5xK_ZNY8ar3z2aqLVJbv87PVY4NE2Qxmjik8syADMavkouAmXIdG30G5zej-k3oouthS3bRDGG6ALnfe-IfUON5yRnJGEq3eXI" />
                    <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded shadow-sm">Bestseller</div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">Development</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2 mb-2 group-hover:text-primary transition-colors">Python: Từ Zero đến Hero trong 30 ngày</h3>
                    <p className="text-xs text-slate-500 dark:text-gray-400 mb-3 line-clamp-1">Giảng viên: Nguyễn Văn An</p>
                    <div className="flex items-center gap-1 mb-4">
                      <span className="text-yellow-500 font-bold text-sm">4.8</span>
                      <div className="flex text-yellow-400">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                      </div>
                      <span className="text-slate-400 text-xs ml-1">(2,450)</span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-gray-700 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 dark:text-white text-lg">299.000đ</span>
                        <span className="text-xs text-slate-400 line-through">899.000đ</span>
                      </div>
                      <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-lg transition-colors">
                        <span className="material-symbols-outlined">shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Course Card 2 */}
                <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden bg-gray-200">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Color palettes and design tools on a screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUqC1iKY0c_UZTGrRABq00zYuQruCp0BXdmN9RJBMA50jnDlF2yPBNKBuNUetPyE9S_PFyX2NGHbjJi8jhWoTjRMfGqLdyDDQ2GOHILG2HC25HJw17H-7iz73oGY_LEcj-RprSWENeE0hrDuoqi2Hskca0B-ntf4f2axNaEoDTtDi_A9_-vEAgzvFEbz1DrrV1gxUJE2mjdtQ33B28kfBIe7ApR1gQigVBYidGVKU1Ch9n-FsyZsVvbs2WeTouphpNARYVNeuwvSs" />
                    <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">Mới</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-pink-600 bg-pink-100 dark:bg-pink-900/30 px-2 py-0.5 rounded-full">Design</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2 mb-2 group-hover:text-primary transition-colors">UI/UX Design Masterclass: Thiết kế hiện đại</h3>
                    <p className="text-xs text-slate-500 dark:text-gray-400 mb-3 line-clamp-1">Giảng viên: Sarah Linh</p>
                    <div className="flex items-center gap-1 mb-4">
                      <span className="text-yellow-500 font-bold text-sm">4.9</span>
                      <div className="flex text-yellow-400">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      </div>
                      <span className="text-slate-400 text-xs ml-1">(520)</span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-gray-700 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 dark:text-white text-lg">450.000đ</span>
                        <span className="text-xs text-slate-400 line-through">1.200.000đ</span>
                      </div>
                      <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-lg transition-colors">
                        <span className="material-symbols-outlined">shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Course Card 3 */}
                <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden bg-gray-200">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Charts and graphs showing business growth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvuHAOtalp03-X3y5_vVo87xs7EuqIaSyOIp1qnX3Nbz5U_Fc8Gnd4wslNsY3qJ6sx3cPnABGfrPG8Ka_EqwjdOmEFYWbp3bmEUcgk5lJNWIy4s-BzWYKkwHkj2eGEHnesKZldfFj1CfD_yYLVCU4-JQ1YI6KItQcO0_n4PoWS2Nb9pV-syTfLyOvlWJPQZM19E5_ErLRYJmg8W3jMX1XsSHI0BcILNAae8vkBAGa9kMU3LGCFrsQTDxZRpu1Ppw0YmgHtw6qPaL8" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-100 dark:bg-purple-900/30 px-2 py-0.5 rounded-full">Business</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2 mb-2 group-hover:text-primary transition-colors">Digital Marketing: Chiến lược toàn diện 2024</h3>
                    <p className="text-xs text-slate-500 dark:text-gray-400 mb-3 line-clamp-1">Giảng viên: Trần Minh Đức</p>
                    <div className="flex items-center gap-1 mb-4">
                      <span className="text-yellow-500 font-bold text-sm">4.6</span>
                      <div className="flex text-yellow-400">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                      </div>
                      <span className="text-slate-400 text-xs ml-1">(1,890)</span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-gray-700 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 dark:text-white text-lg">199.000đ</span>
                      </div>
                      <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-lg transition-colors">
                        <span className="material-symbols-outlined">shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Course Card 4 */}
                <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden bg-gray-200">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="JavaScript code on a monitor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzt4mhi2ScsJO9Jidjh1dJe1Lyuw66V5Mdo4jaPexXZAPvDjtDeIxkjIZrl8TMKEpf-C7i_PfX_HaB_2Pc0ID1QQ4XBjW_YK9Pj9IMR8owx5myhgWVdq0QlWVw5iFVT_1hSNQHIbThlSEabROqSl2oAlDZbupEbeXY04TMOEYBk-uQibq0OVdQWG8nqDaJDLlKRxUePtaS5wrboz3PUfqDyS4vjtcnFowJIjnOo1rrXJXIJEuS28QM1NzW74kVMhnJ__U0hCw0600" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">Development</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2 mb-2 group-hover:text-primary transition-colors">JavaScript Nâng Cao: ES6+ & Async</h3>
                    <p className="text-xs text-slate-500 dark:text-gray-400 mb-3 line-clamp-1">Giảng viên: Lê Hoàng</p>
                    <div className="flex items-center gap-1 mb-4">
                      <span className="text-yellow-500 font-bold text-sm">4.7</span>
                      <div className="flex text-yellow-400">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                      </div>
                      <span className="text-slate-400 text-xs ml-1">(980)</span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-gray-700 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 dark:text-white text-lg">350.000đ</span>
                        <span className="text-xs text-slate-400 line-through">700.000đ</span>
                      </div>
                      <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-lg transition-colors">
                        <span className="material-symbols-outlined">shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Course Card 5 */}
                <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden bg-gray-200">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Data visualization and analytics dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtZZqGFYiPuByt5Rowc2Isp0-McErWbnUV3B-aww2ATBX92I7AZsbMmlaNoRShfxpvQwcfyZ0EpzVBr3PiE99Y1PsQlC0rSOuDWiZHjew6kZe2zGObC2xeocGF8iWh54itXu4mlPs9duFrvsSWqBR24F4L1TrltFo0Yw4BNvbic57TKgx9rZg-TvwGJ3vkgm3Zc1gnCSYEEQSIEVQJeMbW4Gn-me2TnqC34PSq7F0QoNXnfuE1P3jWyUQzt_azWuNC_ZxZy6XsGYQ" />
                    <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded shadow-sm">Bestseller</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">Data Science</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2 mb-2 group-hover:text-primary transition-colors">Phân tích dữ liệu với SQL và Tableau</h3>
                    <p className="text-xs text-slate-500 dark:text-gray-400 mb-3 line-clamp-1">Giảng viên: Phạm Thanh Hằng</p>
                    <div className="flex items-center gap-1 mb-4">
                      <span className="text-yellow-500 font-bold text-sm">4.8</span>
                      <div className="flex text-yellow-400">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      </div>
                      <span className="text-slate-400 text-xs ml-1">(3,100)</span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-gray-700 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 dark:text-white text-lg">599.000đ</span>
                        <span className="text-xs text-slate-400 line-through">1.500.000đ</span>
                      </div>
                      <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-lg transition-colors">
                        <span className="material-symbols-outlined">shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Course Card 6 */}
                <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden bg-gray-200">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Team meeting brainstorming session" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSd-qLJyms0k8-Nm9zKNz7bxXrmAQAc_p69s4vQ5SVDzlEuuWXLX4Pfzd-t-DLFx4hqxV2NTjGi1F_FYxEcgBxiYvsR5rtphDECrpobor3QtLe0n_8MfMwvVaextomwqG7tJJYY_FGf1RTdUqPCoa70i2hReY-PngEhYu-Rb4x9FmyDqeAlM8xLC1WAezdif6aL8vo4Et0QjH9Xbn2G7dlvgReD7j54s4C7kBA624385MBZ5TR-7WRCFhOFsjo_pCf5XxBQSg2hYw" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded-full">Soft Skills</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2 mb-2 group-hover:text-primary transition-colors">Kỹ năng lãnh đạo và quản lý đội nhóm</h3>
                    <p className="text-xs text-slate-500 dark:text-gray-400 mb-3 line-clamp-1">Giảng viên: John Davis</p>
                    <div className="flex items-center gap-1 mb-4">
                      <span className="text-yellow-500 font-bold text-sm">4.5</span>
                      <div className="flex text-yellow-400">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                      </div>
                      <span className="text-slate-400 text-xs ml-1">(450)</span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-gray-700 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 dark:text-white text-lg">250.000đ</span>
                      </div>
                      <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-lg transition-colors">
                        <span className="material-symbols-outlined">shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex gap-2">
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-gray-700 disabled:opacity-50">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 font-medium">2</button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 font-medium">3</button>
                  <span className="flex h-10 w-10 items-center justify-center text-slate-400">...</span>
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 font-medium">12</button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-gray-700">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </nav>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
