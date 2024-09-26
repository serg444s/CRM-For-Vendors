'use client';
import React from 'react';

export interface errorProps {
  error: Error;
}

const error = ({ error }: errorProps) => {
  return (
    <div>
      <p>error.message</p>
    </div>
  );
};

export default error;
