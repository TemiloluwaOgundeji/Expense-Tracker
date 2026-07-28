"use client";

import PageHeader from "@/components/ui/PageHeader";

import ProfileSettings from "@/components/settings/ProfileSettings";
import PreferenceSettings from "@/components/settings/PreferenceSettings";
import DataSettings from "@/components/settings/DataSettings";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Settings"
        subtitle="Manage your account and application preferences."
      />

      <ProfileSettings />

      <PreferenceSettings />

      <DataSettings />
    </div>
  );
}