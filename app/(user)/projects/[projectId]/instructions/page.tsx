import CopyButton from "@/components/CopyButton";
import React from "react";

const page = async ({ params }: any) => {
  const { projectId } = params;
  if (!projectId) return <div>Invalid Project ID</div>;
  if (!process.env.WIDGET_URL) return <div>Missing WIDGET_URL</div>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
      <p className="text-lg text-secondary-foreground">
        Embed the code in your site
      </p>
      <div className="bg-blue-950 p-6 rounded-md mt-6 relative">
        <code className=" text-white">
          {`<feddly project-id="${projectId}"></feddly>`}
          <br />
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
        <CopyButton
          text={`<feddly project-id="${projectId}"></feddly>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        />
      </div>
    </div>
  );
};

export default page;
