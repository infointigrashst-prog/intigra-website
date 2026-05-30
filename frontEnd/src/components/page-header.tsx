import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string | ReactNode;
  children?: ReactNode;
}

export default function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-r from-orange-50 via-white to-yellow-50 overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      <div className="container max-w-screen-xl mx-auto text-center relative z-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-gray-900 tracking-tight leading-tight">
          {title.split(' ').map((word, idx) => (
            <span
              key={idx}
              className={idx % 2 === 0 ? 'text-orange-600' : 'text-gray-900'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>

        {description && (
          <h3 className="mt-2 md:mt-4 max-w-3xl mx-auto text-sm sm:text-lg md:text-xl text-gray-700">
            {description}
          </h3>
        )}

        {children && <div className="mt-8 md:mt-10">{children}</div>}
      </div>
    </section>
  );
}
