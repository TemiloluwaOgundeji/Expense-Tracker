import { Toaster } from "sonner";
import type { Metadata } from "next";
import "./globals.css";

import { ProfileProvider } from "@/contexts/ProfileContext";
import { ExpenseProvider } from "@/contexts/ExpenseContext";
import { SettingsProvider } from "@/contexts/SettingsContext";
import { ModalProvider } from "@/contexts/ModalContext";

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Track shared expenses with your partner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full bg-slate-100 font-sans">
        <ProfileProvider>
          <ExpenseProvider>
            <SettingsProvider>
              <ModalProvider>
                {children}

                <Toaster
                  position="top-right"
                  richColors
                  closeButton
                />
              </ModalProvider>
            </SettingsProvider>
          </ExpenseProvider>
        </ProfileProvider>
      </body>
    </html>
  );
}