"use client";

import React from "react";

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log("logging error:", error);
  }, [error]);

  return (
    <section className="flex flex-col min-h-screen m-0 bg-white text-black dark:bg-black dark:text-white">
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Something went wrong.</h2>
        <p className="text-sm">{error?.message}</p>
        <div>
          <button onClick={() => reset()}>Try Again</button>
        </div>
      </div>
    </section>
  );
}
