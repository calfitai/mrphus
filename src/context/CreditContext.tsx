'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CreditContextType {
  credits: number;
  setCredits: (credits: number) => void;
  deductCredit: (amount?: number) => boolean;
  addCredits: (amount: number) => void;
  isLoading: boolean;
}

const CreditContext = createContext<CreditContextType | undefined>(undefined);

interface CreditProviderProps {
  children: ReactNode;
}

export const CreditProvider: React.FC<CreditProviderProps> = ({ children }) => {
  const [credits, setCredits] = useState<number>(10); // Default 10 free credits
  const [isLoading] = useState<boolean>(false);

  // Load credits from localStorage on mount
  useEffect(() => {
    const savedCredits = localStorage.getItem('userCredits');
    if (savedCredits) {
      setCredits(parseInt(savedCredits, 10));
    }
  }, []);

  // Save credits to localStorage whenever credits change
  useEffect(() => {
    localStorage.setItem('userCredits', credits.toString());
  }, [credits]);

  const deductCredit = (amount: number = 1): boolean => {
    if (credits >= amount) {
      setCredits(prev => prev - amount);
      return true;
    }
    return false;
  };

  const addCredits = (amount: number): void => {
    setCredits(prev => prev + amount);
  };

  const value: CreditContextType = {
    credits,
    setCredits,
    deductCredit,
    addCredits,
    isLoading
  };

  return (
    <CreditContext.Provider value={value}>
      {children}
    </CreditContext.Provider>
  );
};

export const useCredits = (): CreditContextType => {
  const context = useContext(CreditContext);
  if (context === undefined) {
    throw new Error('useCredits must be used within a CreditProvider');
  }
  return context;
};
