
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  return (
    <div className="bg-supportBlue-500 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          {description && <p className="text-lg opacity-90 mb-6">{description}</p>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
