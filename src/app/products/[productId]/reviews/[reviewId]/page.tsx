import { notFound } from "next/navigation";

export default function Review({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
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
