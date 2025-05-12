import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-full mb-18">
        <h1 className="text-4xl font-bold">Beam</h1>
        <p className="text-lg">Digital Services for Bermuda</p>
      </div>
      <h2 className="text-xl font-bold mb-2">Links</h2>
      <ul>
        <li>
          <Link href="https://taxis.beam.bm/">Beam Taxis</Link>
        </li>
      </ul>
    </div>

  );
}
