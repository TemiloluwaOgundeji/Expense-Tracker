"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import { useProfile } from "@/contexts/ProfileContext";

export default function ProfileSettings() {
  const { profile, updateProfile } = useProfile();

  const [name, setName] = useState("");
  const [partner, setPartner] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    setName(profile.name);
    setPartner(profile.partner);
    setEmail(profile.email);
  }, [profile]);

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (name.trim() === "") {
      toast.error("Your name is required.");
      return;
    }

    if (partner.trim() === "") {
      toast.error(
        "Partner name is required."
      );
      return;
    }

    setLoading(true);

    updateProfile({
      name: name.trim(),
      partner: partner.trim(),
      email: email.trim(),
    });

    setTimeout(() => {
      setLoading(false);

      toast.success(
        "Profile updated successfully."
      );
    }, 400);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="mb-6 text-xl font-bold text-slate-900">
        Profile
      </h2>

      <div className="space-y-5">
        <Input
          label="Your Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          placeholder="Your name"
        />

        <Input
          label="Partner Name"
          value={partner}
          onChange={(e) =>
            setPartner(e.target.value)
          }
          placeholder="Partner name"
        />

        <Input
          label="Email (Optional)"
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="name@example.com"
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            loading={loading}
          >
            Save Profile
          </Button>
        </div>
      </div>
    </form>
  );
}