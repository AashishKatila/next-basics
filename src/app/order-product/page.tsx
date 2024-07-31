"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const buttonHandle = () => {
    console.log("button clicked");
    router.push("/");
  };
  return <button onClick={buttonHandle}>Order products</button>;
}
