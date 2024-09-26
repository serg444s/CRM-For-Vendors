import React from 'react';

export interface LoadingProps {}

const loading = ({}: LoadingProps) => {
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export default loading;
