import { NextRequest } from "next/server";
import { DOMParser } from "xmldom";

/**
 * Generates a download link for a subtitle file based on the provided URL query parameter.
 *
 * @param {NextRequest} req - The request object containing the URL with query parameters.
 * @return {Response} The response object containing the subtitle file as a download.
 */
export async function GET(req: NextRequest): Promise<Response> {
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

/**
 * Converts an XML string to an SRT string.
 *
 * @param {string} xml - The XML string to convert.
 * @return {string} The converted SRT string.
 */
function convertXmlToSrt(xml: string): string {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, "text/xml");
  const textNodes = xmlDoc.getElementsByTagName("text");

  return Array.from(textNodes)
    .map((textNode, index) => {
      const start = parseFloat(textNode.getAttribute("start")!)
        .toFixed(3)
        .replace(".", ",");
      const duration = parseFloat(textNode.getAttribute("dur")!)
        .toFixed(3)
        .replace(".", ",");
      const text = textNode.textContent!.trim().replace(/<\/?[^>]+(>|$)/g, "");

      return `${index + 1}
${start} --> ${(parseFloat(start) + parseFloat(duration))
        .toFixed(3)
        .replace(".", ",")}
${text}\n\n`;
    })
    .join("");
}
