"use client";
import { Button } from "@/components/ui/button";
import { getStripe } from "@/lib/stripe-client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  price: string;
};
const SubscribeButton = ({ price }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async (price: string) => {
    setLoading(true);
    try {
      const { sessionId } = await fetch("/api/stripe/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price }),
      }).then((res) => res.json());

      const stripe = await getStripe();
      if (stripe) {
        stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <Button
        onClick={() => handleCheckout(price)}
        className="bg-indigo-700"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please Wait
          </>
        ) : (
          "Subscribe"
        )}
      </Button>
    </div>
  );
};

export default SubscribeButton;
