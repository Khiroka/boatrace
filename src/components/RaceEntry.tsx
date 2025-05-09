"use client";
import { useEffect, useState } from "react";

type RacerInfo = {
  lane: number;
  name: string;
  registration: string;
  rank: string;
  branch: string;
  age: number;
  weight: number;
  winRate: string;
  st: string;
  fl: string;
};

export default function RaceEntry({
  jcd,
  rno,
  date,
}: {
  jcd: string;
  rno: string;
  date: string;
}) {
  const [racers, setRacers] = useState<RacerInfo[]>([]);

  useEffect(() => {
    fetch(`/api/race-entry?jcd=${jcd}&rno=${rno}&date=${date}`)
      .then((res) => res.json())
      .then(setRacers)
      .catch(console.error);
  }, [jcd, rno, date]);

  return (
    <div className="space-y-2">
      {racers.map((racer) => (
        <div
          key={racer.lane}
          className="border p-2 rounded bg-white flex gap-4"
        >
          <div className="w-10 text-xl font-bold">{racer.lane}</div>
          <div>
            <div className="font-bold">
              {racer.name}（{racer.rank}）
            </div>
            <div className="text-sm text-gray-500">
              {racer.registration} / {racer.branch}
            </div>
            <div className="text-sm">
              年齢: {racer.age} 歳 / 体重: {racer.weight}kg
            </div>
            <div className="text-sm">
              ST: {racer.st} / FL: {racer.fl}
            </div>
            <div className="text-sm">勝率: {racer.winRate}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
