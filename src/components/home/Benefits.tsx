import React from 'react';

interface BenefitItemProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description }) => (
  <div className="flex flex-col gap-4 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-sm transition-all hover:shadow-lg dark:hover:shadow-slate-800/50 border border-slate-100 dark:border-slate-800">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: 'workspace_premium',
      title: 'Chứng chỉ uy tín',
      description: 'Nhận chứng chỉ hoàn thành khóa học được công nhận bởi các công ty công nghệ hàng đầu, giúp CV của bạn nổi bật hơn.',
    },
    {
      icon: 'update',
      title: 'Truy cập trọn đời',
      description: 'Mua một lần, học mãi mãi. Bạn có thể quay lại ôn tập bất cứ lúc nào, nội dung luôn được cập nhật mới nhất.',
    },
    {
      icon: 'support_agent',
      title: 'Hỗ trợ 24/7',
      description: 'Đội ngũ mentor và giảng viên luôn sẵn sàng giải đáp thắc mắc của bạn qua hệ thống thảo luận trực tuyến.',
    },
  ];

  return (
    <section className="px-4 py-16 lg:px-10 bg-background-light dark:bg-background-dark">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Tại sao chọn EduPro?</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Chúng tôi mang đến trải nghiệm học tập toàn diện và hiệu quả nhất.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
