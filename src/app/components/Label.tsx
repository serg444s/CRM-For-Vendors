import React from 'react';

export enum Status {
  Active = 'active',
  NotActive = 'not active',
  Pending = 'pending',
  Suspended = 'suspended',
}

interface LabelProps {
  children: React.ReactNode;
  status: Status;
}

const Label = ({ children }: LabelProps) => {
  return <span>{children}</span>;
};

export default Label;
