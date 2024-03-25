import React from "react";
import { Storediscovers } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../clothing/component/ProductCard";

export default function StorediscoverCategory() {
  return (
    <div className="lg:grid grid-cols-4 mt-5 gap-6 container lg:w-full max-w-[95.813rem]  mx-auto shadow-xl shadow-blue-50 pb">
      {Storediscovers.map((discoverStore, i) => (
        <Link
          href={`/store/${discoverStore.id}`}
          className="shadow-lg "
          key={i}>
          <ProductCard {...discoverStore} />
        </Link>
      ))}
    </div>
  );
}
