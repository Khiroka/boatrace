"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const venues = [
  { name: "桐生", jcd: "01" },
  { name: "戸田", jcd: "02" },
  { name: "江戸川", jcd: "03" },
  { name: "平和島", jcd: "04" },
  { name: "多摩川", jcd: "05" },
  { name: "浜名湖", jcd: "06" },
  { name: "蒲郡", jcd: "07" },
  { name: "常滑", jcd: "08" },
  { name: "津", jcd: "09" },
  { name: "三国", jcd: "10" },
  { name: "びわこ", jcd: "11" },
  { name: "住之江", jcd: "12" },
  { name: "尼崎", jcd: "13" },
  { name: "鳴門", jcd: "14" },
  { name: "丸亀", jcd: "15" },
  { name: "児島", jcd: "16" },
  { name: "宮島", jcd: "17" },
  { name: "徳山", jcd: "18" },
  { name: "下関", jcd: "19" },
  { name: "若松", jcd: "20" },
  { name: "芦屋", jcd: "21" },
  { name: "福岡", jcd: "22" },
  { name: "唐津", jcd: "23" },
  { name: "大村", jcd: "24" },
];

export default function VenueMenu() {
  const pathname = usePathname();
  const activeJcd = pathname.split("/")[1];

  return (
    <nav className="w-full bg-white text-black border-b border-gray-400">
      <div className="grid grid-cols-24">
        {venues.map((venue) => (
          <Link
            key={venue.jcd}
            href={`/${venue.jcd}`}
            className={`text-center text-xl font-bold py-4 border-r border-gray-300
              ${venue.jcd === activeJcd ? "bg-blue-200 text-blue-900 border-blue-500" : "hover:bg-gray-100"}`}
          >
            {venue.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
