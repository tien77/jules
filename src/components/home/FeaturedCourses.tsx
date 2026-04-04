import React from 'react';
import CourseCard from '../common/CourseCard';
import type { CourseData } from '../common/CourseCard';

const FeaturedCourses: React.FC = () => {
  const courses: CourseData[] = [
    {
      id: '1',
      title: 'Python trọn bộ từ cơ bản đến nâng cao cho người mới bắt đầu',
      instructor: 'Trần Minh Tuấn',
      category: 'Lập trình',
      categoryIcon: 'code',
      rating: 4.8,
      price: '499.000đ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAQuOvVM2FANA4V75b62ukDC9x8CmysChLPvQWtj7lhUpEuGRgswpqgoxiFWBLoDtfWWPsGrTEPxG9E-Lb8h7wSGTT1t_Ku_OdsEBz6ot1FvH83wSRlIQ1cf4aGhhxolzj2_MFJHReTQkt8zbA7c95mt1g7AneKZoKCoIDFgx3DeOx9QIEaFOyuje8C693cIKg1KpiGx-zf8ScZLvTlpsFFJ-iGARyx6fObbOLXGDg2R7GhJzY0-iV5rokbB9uJs9LOSzRFEvNYAk',
      isBestseller: true,
    },
    {
      id: '2',
      title: 'Digital Marketing Masterclass - Làm chủ Facebook & Google Ads',
      instructor: 'Lê Thị Mai',
      category: 'Marketing',
      categoryIcon: 'campaign',
      rating: 4.6,
      price: '599.000đ',
      originalPrice: '1.200.000đ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcjU9jX8s-AeC-4WQJ8Cupzagr8moBID14CuXqRFMPAfzTFPXl8QGxvLJXHPFvPF9sdtWDsL0zcfmQtXd0ob0Lr_WNzlrxvQ5CBizCw-lSxm4EgQcz6OKtvFIqhSvXXjQezS2Wu02mMpoPE1By0WnDiyW2Hc2szUAtpyhtLGC3V1NuHO3KuakrxJnzsxRSeyXLU_WCRxtJCZ7HcTYvfipxRS4FLQpJproGfDT5IfvYnMDkD8kNsx4s-owQSylcbtbybOFzkXpwpq8',
    },
    {
      id: '3',
      title: 'Tư duy thiết kế đồ họa & Sử dụng thành thạo Photoshop',
      instructor: 'Phạm Hoàng',
      category: 'Design',
      categoryIcon: 'palette',
      rating: 4.9,
      price: '399.000đ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB92x0YjxTE1xi2erxJkfVR7v4Woregu2OqC-w8mreuekcFx4BlVBm35GKU6tu5AG-i0xoNeHE9sLnKNQzvhGIW81jwehZYenL504vI-h6YEsDyKKGBWrcqoMh558pCa98rhBCkh4t5UEDEEv5KPHNn-ahlAaB7_x_GOJqEyUuHc_olM0eCmW8Gx-EpU1MhjS9LvpgwMYEMBjFYm1TvpQhxxL99g-K5EyBQ5oPgEC7-1e_svKHYxXopb7iEu3P3w6FIy7G6G__HNyc',
    },
    {
      id: '4',
      title: 'Excel từ cơ bản đến nâng cao: Làm chủ bảng tính trong 7 ngày',
      instructor: 'Nguyễn Thu Hà',
      category: 'Văn phòng',
      categoryIcon: 'analytics',
      rating: 4.7,
      price: '299.000đ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJEB1yVfQry6TAOjKORgCwgr7lsf2tAPMtkjLhyMcXegNTjnUKxvWrLItkaiNSC5EM69yxuLjK4485lOERcFY7Z0n3g6CoOcQCDcWFmjXt9hN62dYTtjtr0y8isF08MdavDy6Lkfvs0SNX5hCJe9IC5-URJrjUdMrniNro4AZBpi6KpN08cVY1iijJUd9mHDz4GnSlS-qWU2L6wKrvf42Wnw0OVsDgVQGEoiHb-iYO9sLrcJXltuPW5iFV8x3Id1pflXOZymiS2e8',
    },
  ];

  return (
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
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="mt-8 flex justify-center sm:hidden">
          <button className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-50">
            Xem tất cả khóa học
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
