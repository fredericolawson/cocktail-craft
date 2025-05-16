import Link from "next/link";
import { Calendar, Car, Martini, Radar, Ship } from "lucide-react";


import { Signup } from "@/components/signup";
export default function Home() {
  return (
    
      <div className="flex flex-col gap-8 items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold mb-4">Cocktail Craft</h1>
        <p className="text-lg text-center">Bermuda's emergency cocktail service, delivered to your boat</p>
        <h3 className="text-lg">Coming soon...</h3>
        <Signup />
      </div>
  );
}
