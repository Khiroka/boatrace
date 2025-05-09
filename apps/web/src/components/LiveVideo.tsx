export default function LiveVideo({ jcd }: { jcd: string }) {
  const venueLiveUrls: Record<string, string> = {
    "01": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=01",
    "02": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=02",
    "03": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=03",
    "04": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=04",
    "05": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=05",
    "06": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=06",
    "07": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=07",
    "08": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=08",
    "09": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=09",
    "10": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=10",
    "11": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=11",
    "12": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=12",
    "13": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=13",
    "14": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=14",
    "15": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=15",
    "16": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=16",
    "17": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=17",
    "18": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=18",
    "19": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=19",
    "20": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=20",
    "21": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=21",
    "22": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=22",
    "23": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=23",
    "24": "https://livebb.jlc.ne.jp/bb_top/sp_bb/streamer/streamer.php?jo=24",
  };

  const url = venueLiveUrls[jcd];

  return url ? (
    <div className="w-full aspect-video">
      <iframe
        src={url}
        className="w-full h-full rounded border"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  ) : (
    <p className="text-red-600 text-center py-4">ライブ映像は見つかりません</p>
  );
}
