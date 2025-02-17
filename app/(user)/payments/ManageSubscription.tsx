"use client";
import { Button } from "@/components/ui/button";
import { getStripe } from "@/lib/stripe-client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ManageSubscription = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const redirectTocustomerPortal = async () => {
    setLoading(true);
    try {
      const { url } = await fetch("/api/stripe/create-portal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      router.push(url.url);
    } catch (error) {
      console.log(error);
      setError("Failed to redirect to customer portal.");
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Button
        onClick={redirectTocustomerPortal}
        className="bg-indigo-700"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please Wait
          </>
        ) : (
          "Modify Subscription"
        )}
      </Button>
    </div>
  );
};

export default ManageSubscription;
