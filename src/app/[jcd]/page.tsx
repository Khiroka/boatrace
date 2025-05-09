"use client";

import { useEffect, useState } from "react";
import LiveVideo from "@/components/LiveVideo";

type Props = {
  params: { jcd: string };
};

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

export default function VenuePage({ params }: Props) {
  const { jcd } = params;
  const rno = "1";
  const date = "20250505";

  const [racers, setRacers] = useState<RacerInfo[]>([]);

  useEffect(() => {
    fetch(`/api/race-entry?jcd=${jcd}&rno=${rno}&date=${date}`)
      .then((res) => res.json())
      .then(setRacers)
      .catch(console.error);
  }, [jcd]);

  return (
    <main className="flex h-screen">
      {/* 左：ライブ映像 */}
      <div className="w-1/2 p-4">
        <LiveVideo jcd={jcd} />
      </div>

      {/* 右：出走表や情報表示 */}
      <div className="w-1/2 p-4 bg-gray-50 border-l overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">出走表</h2>

        {racers.map((racer) => (
          <div
            key={racer.lane}
            className="mb-2 p-3 rounded border bg-white flex gap-4 items-start"
          >
            <div className="text-xl font-bold w-6">{racer.lane}</div>
            <div className="text-sm space-y-1">
              <div className="font-bold">
                {racer.name}（{racer.rank}）
              </div>
              <div className="text-gray-500">
                {racer.registration} / {racer.branch}
              </div>
              <div>
                年齢: {racer.age} 歳 / 体重: {racer.weight}kg
              </div>
              <div>勝率: {racer.winRate}</div>
              <div>
                ST: {racer.st} / FL: {racer.fl}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
