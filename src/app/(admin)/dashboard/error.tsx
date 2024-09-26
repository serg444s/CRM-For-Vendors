'use client';
import Button from '@/app/components/Button';
import React from 'react';

export interface ErrorComponentprops {
  error: Error;
  reset: () => void;
}

const ErrorComponent = ({ error, reset }: ErrorComponentprops) => {
  return (
    <div>
      <p>`Some went wrong ${error.message}`</p>
      <Button onClick={() => reset()}>Try Again</Button>
    </div>
  );
};

export default ErrorComponent;
