/**
 * Converts an XML string to an SRT string.
 *
 * @param {string} xml - The XML string to convert.
 * @return {string} The converted SRT string.
 */
export default function convertXmlToSrt(xml: string): string {
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
