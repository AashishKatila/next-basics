import { Metadata } from "next";

type ProductProps = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: ProductProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function Products({ params }: ProductProps) {
  return (
    <div>
      <h1>Detail of Product : {params.productId} </h1>
    </div>
  );
}
