import { NextRequest } from "next/server";
import { DOMParser } from "xmldom";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const link = searchParams.get("q");

  const res = await fetch(link!);
  const xml = await res.text();
  const srt = convertXmlToSrt(xml);

  const filename = "subtitle.srt";
  const contentType = "text/plain";

  const responseHeaders = {
    "Content-Disposition": `attachment; filename="${filename}"`,
    "Content-Type": contentType,
  };

  return new Response(srt, { headers: responseHeaders });
}

function convertXmlToSrt(xml: string): string {
  let srt = "";
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, "text/xml");
  const textNodes = xmlDoc.getElementsByTagName("text");

  for (let i = 0; i < textNodes.length; i++) {
    const start = parseFloat(textNodes[i].getAttribute("start")!)
      .toFixed(3)
      .replace(".", ",");
    const duration = parseFloat(textNodes[i].getAttribute("dur")!)
      .toFixed(3)
      .replace(".", ",");
    const text = textNodes[i]
      .textContent!.trim()
      .replace(/<\/?[^>]+(>|$)/g, "");

    srt += i + 1 + "\n";
    srt +=
      start +
      " --> " +
      (parseFloat(start) + parseFloat(duration)).toFixed(3).replace(".", ",") +
      "\n";
    srt += text + "\n\n";
  }

  return srt;
}
