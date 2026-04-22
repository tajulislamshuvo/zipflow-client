import React from 'react';

const Container = ({children, className= "", fullWidth=false }) => {
  return (
    <div className={
      fullWidth ? `w-full ${className}`
      : `max-w-7xl mx-auto px-4 ${className}`
    }>
      {children}
    </div>
  );
};

export default Container;