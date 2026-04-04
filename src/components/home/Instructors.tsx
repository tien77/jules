import React from 'react';

interface InstructorProps {
  name: string;
  role: string;
  image: string;
}

const InstructorCard: React.FC<InstructorProps> = ({ name, role, image }) => (
  <div className="flex flex-col items-center gap-3">
    <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white dark:border-slate-800 shadow-lg">
      <img alt={name} className="h-full w-full object-cover" src={image} />
    </div>
    <div>
      <h4 className="text-lg font-bold text-slate-900 dark:text-white">{name}</h4>
      <p className="text-sm text-primary font-medium">{role}</p>
    </div>
  </div>
);

const Instructors: React.FC = () => {
  const instructors = [
    {
      name: 'James Nguyen',
      role: 'Senior Developer',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD76Be_aUj9lLFrROeYwivJdNLJyCCtbzqPVwTRSwGoST7C-2iSYtpGjMt-8QztKKEaqxtCE0oFLOZCEVHIQxtmh6AU5AQSZ8F9qV_gMwZ2wsD9cEr8nSoNpq35ygRNDNkJrmElXbXpcXctL2LGlatK9bOFnWqeMSmE93OQROmpMwDqVBkbeRnaFIxZ5vOBOrsTcoHklqflLu3xhjCN-1q30y-Nt5qA_GlXpcz1vGS32MWbnEiEk6tPCk1o64JePK8yDjf_lDlddrw',
    },
    {
      name: 'Sarah Le',
      role: 'Digital Marketer',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv2dD02JVoxyrPDQ1LthuyRirR-HLAdTGiw84X7tKpPZOB9sTnIca6AajA4stWiNmgjx0S5StaQjFrgaY_KJxj3OKnCi4qD3QRFF43yUXirrVfQgwdMnDFMW2no4bnLq_eTev9LGHhh0dZyN_sBRkahuFjeNuu7ya6fRlRlSK5Cku03m4ohhNsdp5BDI44RnXVCFDZDraFxq2wbvohFcYh0T2pyP0XiEMd1QF_NWpuhE7rvbVcI00G22WgHN00FbkpZRZZOXJjcEw',
    },
    {
      name: 'David Tran',
      role: 'Product Designer',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfjxio73o_VPSWqSVDsePG6pAFkyOweC7YGLFLZadr-jrESfVYSR-hjqcAlEOgaxPG8Zs82Jggk7jn3yBK7uJIPBwPGv0JB2ulnMR-WgR3Hz8EUmJcQJwK1jBNwH2Wj_FOLeVBLx7GrIiDNYRiXQrQGE56KlQsmao_DpGmYM291_zioQwaefn45JS_wKT7dstpeB_VNhihZj7w167AkUrZGuBXf2YeqTyoUsryaIwQkGiGV_ZAUEwJ63BMcjUTDmWAD1_wjhcmPpk',
    },
    {
      name: 'Emily Pham',
      role: 'IELTS Expert',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMVXLvlO7LEcJWFKCUaNnwqx8iY_2gYc4rhbbTIwewznQ0R30S1T0pqYM6VgeAhY9lsUyWdWT9WOUb6X8gFFzrlWkuSYTkBsPH2O7oFshWkrOZJcJ7SF7TmKIQyzRQ44hSjCdq0jBx046aE4UH1tiyJgrAmmedqK8-srzyjxMBYgs6BAo7ik3qJsGbD2f1FI-xu2SpF3TX1UJnpYRr0HZmO0mzd9GXSExeEvT78rEewbcNAijuNfwnmy8hBOzkOPJZ1L47A3BIWu8',
    },
  ];

  return (
    <section className="px-4 py-16 lg:px-10 bg-background-light dark:bg-background-dark">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-10 text-3xl font-bold text-slate-900 dark:text-white">Gặp gỡ giảng viên hàng đầu</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {instructors.map((instructor, index) => (
            <InstructorCard key={index} {...instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
