import React from 'react';

export interface CourseData {
  id: string;
  title: string;
  instructor: string;
  category: string;
  categoryIcon: string;
  rating: number;
  price: string;
  originalPrice?: string;
  image: string;
  isBestseller?: boolean;
}

interface CourseCardProps {
  course: CourseData;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
          style={{ backgroundImage: `url("${course.image}")` }}
        />
        {course.isBestseller && (
          <div className="absolute right-2 top-2 rounded bg-white/90 px-1.5 py-0.5 text-xs font-bold text-slate-900 dark:bg-slate-900/90 dark:text-white shadow-sm">
            Bestseller
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined !text-sm">{course.categoryIcon}</span> 
            {course.category}
          </span>
          <span className="flex items-center gap-1 text-yellow-500 font-bold">
            {course.rating} <span className="material-symbols-outlined icon-filled !text-sm">star</span>
          </span>
        </div>
        <h3 className="mb-2 text-base font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">Bởi {course.instructor}</p>
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">{course.price}</span>
            {course.originalPrice && (
              <span className="text-xs text-slate-400 line-through">{course.originalPrice}</span>
            )}
          </div>
          <button className="rounded-lg bg-primary/10 p-2 text-primary hover:bg-primary hover:text-white transition-colors">
            <span className="material-symbols-outlined !text-xl">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
