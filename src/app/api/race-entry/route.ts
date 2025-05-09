// app/api/race-entry/route.ts
import { NextRequest } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";

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

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const jcd = searchParams.get("jcd");
  const rno = searchParams.get("rno");
  const date = searchParams.get("date");

  if (!jcd || !rno || !date) {
    return new Response(
      JSON.stringify({ error: "Missing jcd, rno, or date" }),
      { status: 400 }
    );
  }

  const url = `https://www.boatrace.jp/owpc/pc/race/racelist?rno=${rno}&jcd=${jcd}&hd=${date}`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const result: RacerInfo[] = [];

    $("div.table1.is-tableFixed__3rdadd table tbody").each((i, tbody) => {
      const lane = i + 1;
      const name = $(tbody).find("div.is-fs18 a").text().trim();

      const infos = $(tbody)
        .find("div.is-fs11")
        .toArray()
        .map((el) => $(el).text().replace(/\s+/g, " ").trim());

      const registration = infos[0] || ""; // "1234 / A1"
      const rank = registration.split("/")[1]?.trim() || "";
      const regNo = registration.split("/")[0]?.trim() || "";

      const branchLine = infos[1] || ""; // "群馬 / 群馬 55歳 / 52.0kg"
      const [branchRaw, ageWeightRaw] = branchLine.split(/(?=\d+歳)/); // 分離
      const branch = branchRaw.trim().replace(/\/.*/, ""); // "群馬"
      const ageMatch = ageWeightRaw?.match(/(\d+)歳/)?.[1];
      const weightMatch = ageWeightRaw?.match(/(\d+(?:\.\d+)?)kg/)?.[1];

      const age = ageMatch ? parseInt(ageMatch) : 0;
      const weight = weightMatch ? parseFloat(weightMatch) : 0;

      const winRate = infos[2] || "";
      const st = infos[3] || "";
      const fl = infos[4] || "";

      if (name) {
        result.push({
          lane,
          name,
          registration: regNo,
          rank,
          branch,
          age,
          weight,
          winRate,
          st,
          fl,
        });
      }
    });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch or parse data" }),
      { status: 500 }
    );
  }
}
