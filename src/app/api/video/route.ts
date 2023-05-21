import { Video } from "@/interface/interface";
import { NextRequest } from "next/server";
import ytdl from "ytdl-core";
import ytpl from "ytpl";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const link = searchParams.get("q")!;

  const videos: Video[] = [];

  if (link.length > 70) {
    const playlist = await ytpl(link);

    for (let item of playlist.items) {
      const info = await ytdl.getInfo(item.id);

      const video = JSON.parse(JSON.stringify(info)) as Video;

      videos.push(video);
    }
  } else {
    const info = await ytdl.getInfo(link!);

    const video = JSON.parse(JSON.stringify(info)) as Video;

    videos.push(video);
  }

  return new Response(JSON.stringify(videos));
}
