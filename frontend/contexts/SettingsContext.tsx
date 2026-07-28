"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Currency = "NGN" | "USD" | "EUR";

interface SettingsContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

const SettingsContext = createContext<
  SettingsContextType | undefined
>(undefined);

export function SettingsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currency, setCurrency] =
    useState<Currency>("NGN");

  // Load saved currency
  useEffect(() => {
    const savedCurrency = localStorage.getItem(
      "expense-tracker-currency"
    );

    if (
      savedCurrency === "NGN" ||
      savedCurrency === "USD" ||
      savedCurrency === "EUR"
    ) {
      setCurrency(savedCurrency);
    }
  }, []);

  // Save whenever currency changes
  useEffect(() => {
    localStorage.setItem(
      "expense-tracker-currency",
      currency
    );
  }, [currency]);

  return (
    <SettingsContext.Provider
      value={{
        currency,
        setCurrency,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      "useSettings must be used inside SettingsProvider"
    );
  }

  return context;
}