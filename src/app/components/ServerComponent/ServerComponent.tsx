import React from 'react';

export interface ServerComponentProps {
  children?: React.ReactNode;
}

const ServerComponent = ({ children }: ServerComponentProps) => {
  console.log('Server Component');

  return (
    <div>
      <span>Server Component</span>
      {children}
    </div>
  );
};

export default ServerComponent;
