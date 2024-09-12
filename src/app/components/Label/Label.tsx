import React from 'react';
import clsx from 'clsx';

export enum Status {
  Active = 'active',
  NotActive = 'not active',
  Pending = 'pending',
  Suspended = 'suspended',
}

interface LabelProps {
  children: React.ReactNode;
  status: Status;
  disabled: boolean;
}

const Label = ({ children, status, disabled }: LabelProps) => {
  return (
    <div
      className={clsx(
        'inline-flex items-center py-1 px-3 rounded-xl text-sm font-medium',
        status === Status.Active && 'bg-active text-green-700',
        status === Status.NotActive && 'bg-notactive text-red-700',
        status === Status.Pending && 'bg-pending text-orange-700',
        status === Status.Suspended && 'bg-suspended text-blue-700',
        {
          ['opacity-75, cursor-not-allowed']: disabled,
        },
      )}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current"></div>
      {children}
    </div>
  );
};

export default Label;
