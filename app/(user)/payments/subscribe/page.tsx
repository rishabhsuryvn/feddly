import { monthlyPlanId, yearlyPlanId } from "@/lib/payment";
import SubscribeButton from "../SubscribeButton";

const page = async ({
  searchParams,
}: {
  searchParams: {
    plan: string;
  };
}) => {
  const { plan } = await searchParams;

  const planId = plan === "monthly" ? monthlyPlanId : yearlyPlanId;
  return (
    <div className="flex flex-col border p-4 rounded-md ">
      <h1 className="text-2xl font-bold">Start your subscription now:</h1>
      <div className="w-fit mt-3">
        <SubscribeButton price={planId} />
      </div>
    </div>
  );
};
export default page;
