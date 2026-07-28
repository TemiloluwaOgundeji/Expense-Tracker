"use client";

import { toast } from "sonner";

import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";

import { useSettings } from "@/contexts/SettingsContext";

export default function PreferenceSettings() {
  const {
    currency,
    setCurrency,
  } = useSettings();

  function handleSave() {
    toast.success(
      "Preferences saved successfully."
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-slate-900">
        Preferences
      </h2>

      <div className="space-y-5">
        <Select
          label="Currency"
          value={currency}
          onChange={(e) =>
            setCurrency(
              e.target.value as
                | "NGN"
                | "USD"
                | "EUR"
            )
          }
          options={[
            {
              label:
                "🇳🇬 Nigerian Naira (₦)",
              value: "NGN",
            },
            {
              label:
                "🇺🇸 US Dollar ($)",
              value: "USD",
            },
            {
              label:
                "🇪🇺 Euro (€)",
              value: "EUR",
            },
          ]}
        />

        <div className="flex justify-end">
          <Button
            type="button"
            onClick={handleSave}
          >
            Save Preferences
          </Button>
        </div>
      </div>
    </div>
  );
}