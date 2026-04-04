import React from 'react';

interface ReviewProps {
  rating: number;
  content: string;
  author: string;
  course: string;
  avatar: string;
  hideOnMobile?: boolean;
}

const ReviewCard: React.FC<ReviewProps> = ({ rating, content, author, course, avatar, hideOnMobile }) => (
  <div className={`rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-slate-100 dark:border-slate-700 ${hideOnMobile ? 'hidden lg:block' : ''}`}>
    <div className="flex gap-1 text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="material-symbols-outlined icon-filled !text-lg">
          {i < Math.floor(rating) ? 'star' : i < rating ? 'star_half' : 'star_outline'}
        </span>
      ))}
    </div>
    <p className="mb-6 text-slate-600 dark:text-slate-300 italic">"{content}"</p>
    <div className="flex items-center gap-3">
      <img alt={author} className="h-10 w-10 rounded-full object-cover" src={avatar} />
      <div>
        <p className="text-sm font-bold text-slate-900 dark:text-white">{author}</p>
        <p className="text-xs text-slate-500">{course}</p>
      </div>
    </div>
  </div>
);

const Reviews: React.FC = () => {
  const reviews = [
    {
      rating: 5,
      content: 'Khóa học rất chi tiết và dễ hiểu. Tôi đã có thể tự xây dựng website đầu tiên của mình chỉ sau 2 tuần học. Cảm ơn đội ngũ EduPro!',
      author: 'Hoàng Nam',
      course: 'Học viên Web Development',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAbUd9DilIxqJk642J2zYamsPQGdGyXpA6RUP735tHAnkCmHoUGDSid1CJ8tsSsF-sJhxnebAh09S3XfdBqCY710rpQR6xtTCUJIFgetdt2GMVS-oBU86oOzFh1FM6aZDie4V0_hSp-2UmkkqnHfhmtiJAolM68WuXRdKztEdrOdtYztKhhVLughVXZl4O9HgK6mKlSzRneMZLb1eT-tT1OIpEo2BUiSotVynNjMK5NP8i3HdCodvAB27EktYvvcGktQXyMI4saS8',
    },
    {
      rating: 4.5,
      content: 'Giảng viên cực kỳ nhiệt tình, support 24/7. Nội dung bài giảng cập nhật theo xu hướng mới nhất của thị trường.',
      author: 'Thanh Tú',
      course: 'Học viên Digital Marketing',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf6ISOitl4jaN5AXwZwW4XrYrI3l8CmmewgiGW7biY_VOJB5A6ays4vgLRTpSJxqTBiFGIwcjqK1eonhNrJj6OmUvnbRiv7VdlQTk3pm6Fm3F270xe-MfSKY0tcFdlVHnilYG_8XjVbBQLcbQYU_szKvinJqNSL6GxlQHoutgP5T6AVbtb4AxUrWogeJsZuKXS6vurDun5-VA_QgJp_7A8x2yTk-a9c80rY3vprzKG-XZxTFm6xWRDrBk8rQnDMdboTKXJE-nn3Gg',
    },
    {
      rating: 5,
      content: 'Một khoản đầu tư xứng đáng cho sự nghiệp. Tôi đã tìm được công việc mới với mức lương cao hơn nhờ chứng chỉ tại đây.',
      author: 'Đức Minh',
      course: 'Học viên Data Science',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSFDqyu3-R3PcWJSBAmMR-2Fh5_1Ni49thPhoSBoNSytip4bJcj378z6fp3YSz3DAq0c2ezm4s7V7B0SbdcYTHz_QSO7VrI3MI8OzDK4yktxjW4_7UBF88ae8FgcW-V5VM3kHGTDUtdUFieE6AMjgYVJ3Tm-qI0Y4gOT0BbZWfuayKzUbuFzz_iXBOeDQoyr9ZsTAEPhlHQ5-3BG_AsMdjXR5DBlhPMnuhbRPm9P7Ve7GjShcjkNwczSF41yHFBJwyBSwI4FgZkqA',
      hideOnMobile: true,
    },
  ];

  return (
    <section className="bg-primary/5 dark:bg-slate-900 py-16 px-4 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white">Học viên nói gì về chúng tôi?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
