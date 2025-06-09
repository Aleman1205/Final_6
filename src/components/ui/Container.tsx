import React from 'react';
import { cn } from '../../utils/cn';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Container: React.FC<ContainerProps> = ({ 
  className, 
  children,
  ...props
}) => {
  return (
    <div 
      className={cn(
        'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;