"use client"
import Baner from "@/component/Baner";
import { Authcontext } from "@/component/Provider";
import { useContext } from "react";

export default function Home() {
  const cosntext = useContext(Authcontext)
  console.log(cosntext, 'from page');
  return (
    <div>

      <Baner />
    </div>

  );
}
