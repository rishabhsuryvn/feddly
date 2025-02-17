import { monthlyPlanId, yearlyPlanId } from "@/lib/payment";
import SubscribeButton from "../SubscribeButton";
type tParams = Promise<{ plan: string[] }>;
const page = async (props: { params: tParams }) => {
  const { plan } = await props.params;

  const planId = plan.includes("monthly") ? monthlyPlanId : yearlyPlanId;

  return (
    <div className="flex border p-4 rounded-md flex-col">
      <h1 className="text-2xl font-bold">Start your subscription now:</h1>
      <div className="w-fit mt-3">
        <SubscribeButton price={planId} />
      </div>
    </div>
  );
};

export default page;
