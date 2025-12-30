import React from 'react';

interface GiftCardsGridProps {
  children: React.ReactNode;
  className?: string;
}

export function GiftCardGrid({ children, className }: GiftCardsGridProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className || ''}`}>
      {children}
    </div>
  );
}
