import Link from "next/link";
import { Calendar, Car, Martini, Radar, Ship } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-full mb-18">
        <h1 className="text-4xl font-bold">Cocktail Craft</h1>
        <p className="text-lg">Bermuda's emergency cocktail service, delivered to your boat</p>
      </div>
    </div>
  );
}
