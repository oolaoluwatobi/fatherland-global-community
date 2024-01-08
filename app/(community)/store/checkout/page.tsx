import React from "react";
import BillingDetails from "./component/BillingDetails";
import CheckoutSearch from "./component/CheckoutSearch";
import CheckoutSummary from "./component/CheckoutSummary";

export default function CheckoutPage() {
  return (
    <section className="bg-[#F5F5F5]  px10 mx-auto lg:w-full max-w-[97.813rem] ">
      <CheckoutSearch />
      {/* <BillingDetails /> */}
    </section>
  );
}
