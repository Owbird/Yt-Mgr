/**
 * Formats the given time in seconds into a string representation of hours,
 * minutes, and seconds.
 *
 * @param {number} timeInSeconds - The time to format in seconds.
 * @return {string} The formatted time in the format "hh:mm:ss.SSS".
 */
function formatTime(timeInSeconds: number): string {
  const hours = Math.floor(timeInSeconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeInSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeInSeconds % 60).toFixed(3).replace(".", ",");
  return `${hours}:${minutes}:${seconds.padStart(6, "0")}`;
}

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
      const startInSeconds = parseFloat(textNode.getAttribute("start")!);
      const endInSeconds =
        startInSeconds + parseFloat(textNode.getAttribute("dur")!);
      const text = textNode.textContent!.trim().replace(/<\/?[^>]+>/g, "");

      return `${index + 1}
${formatTime(startInSeconds)} --> ${formatTime(endInSeconds)}
${text}\n\n`;
    })
    .join("");
}
