"use client";

import { notFound } from "next/navigation";

function getRandom(count: number) {
  return Math.floor(Math.random() * count);
}

export default function Review({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const random = getRandom(2);

  if (random === 1) {
    throw new Error("Error loading review");
  }

  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      <h1>Product : {params.productId}</h1>
      <h1>Review: {params.reviewId}</h1>
    </div>
  );
}
