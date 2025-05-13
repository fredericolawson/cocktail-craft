import Link from "next/link";
import { Calendar, Car, Martini, Radar, Ship } from "lucide-react";


import { Signup } from "@/components/signup";
export default function Home() {
  return (
    
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold mb-8">Cocktail Craft</h1>
        <p className="text-lg mb-12 text-center">Bermuda's emergency cocktail service, delivered to your boat</p>
        <Signup />
      </div>
  );
}
