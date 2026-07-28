"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { Profile } from "@/types/profile";

interface ProfileContextType {
  profile: Profile;
  updateProfile: (profile: Profile) => void;
}

const defaultProfile: Profile = {
  name: "Zeenat",
  partner: "Partner",
  email: "zeenat@example.com",
};

const ProfileContext = createContext<
  ProfileContextType | undefined
>(undefined);

export function ProfileProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [profile, setProfile] =
    useState<Profile>(defaultProfile);

  useEffect(() => {
    const savedProfile =
      localStorage.getItem("profile");

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  function updateProfile(profile: Profile) {
    setProfile(profile);

    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );
  }

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error(
      "useProfile must be used inside ProfileProvider"
    );
  }

  return context;
}