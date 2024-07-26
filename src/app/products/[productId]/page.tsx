export default function Products({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div>
      <h1>Detail of Product : {params.productId} </h1>
    </div>
  );
}
