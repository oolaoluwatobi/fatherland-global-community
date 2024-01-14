// import { Button } from "@/components/ui/button";
// import Image from "next/image";
import Hero from "../components/Hero";
import FatherlandConcept from "../components/FatherlandConcept";
// import ExploreCulture from "../components/ExploreCulture";
// import CulturalLearning from "../components/CulturalLearning";
import ExclusiveProducts from "../components/ExclusiveProducts";
// import AfricanAuthenticStore from "../components/AfricanAuthenticStore";
// import DiscoverItems from "../components/DiscoverItems";
import JoinConversation from "../components/JoinConversation";
import Global from "../components/Global";
import Getstarted from "../components/Getstarted";

export default function Home() {
  return (
    <main className=" bg-red-20 mx-auto bg-whit">
      <Hero />
      <FatherlandConcept />
      <ExclusiveProducts />
      <Global />
      <Getstarted />
      {/* <JoinConversation /> */}
    </main>
  );
}
