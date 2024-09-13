import React from 'react';
import { ServerComponentProps } from './ServerComponent';
import { headers } from 'next/headers';

const ServerComponentCopy = ({ children }: ServerComponentProps) => {
  console.log('Copy Server Component');

  return (
    <div>
      <span>Copy Server Component</span>
      {children}
    </div>
  );
};

export default ServerComponentCopy;
