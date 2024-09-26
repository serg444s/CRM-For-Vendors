import Link from 'next/link';
import React from 'react';

export interface notFoundComponentProps {}
const notFoundComponent = ({}: notFoundComponentProps) => {
  return (
    <div>
      <p>Not found company</p>
      <Link href={'/companies'} className="text-blue-500">
        Back to companies
      </Link>
    </div>
  );
};

export default notFoundComponent;
