"use client";
import { formatAmount } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup";

function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div className="w-full">
      <CountUp end={amount} decimal="," prefix="$" decimals={2} />
    </div>
  );
}

export default AnimatedCounter;
