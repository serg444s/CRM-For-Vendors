import Sidebar from '@/app/components/Sidebar/Sidebar';
import React, { Children } from 'react';

export interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
};

export default layout;
