import { Video } from "@/interfaces/interfaces";
import {
  Badge,
  HStack,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

const DownloadTable = ({
  headers,
  videos,
}: {
  headers: string[];
  videos: Video[];
}) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          {headers.map((header) => (
            <Th key={header}>{header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {videos.map((video, index) => (
          <Tr
            key={index}
            _hover={{
              bgColor: "gray.400",
            }}
          >
            <Td>{index + 1}</Td>
            <Td>
              <Image
                src={video.videoDetails.thumbnails![0].url}
                width={video.videoDetails.thumbnails![0].width}
                height={video.videoDetails.thumbnails![0].height}
                alt={video.videoDetails.title}
              />
            </Td>
            <Td>
              <VStack align={"self-start"}>
                <Text>{video.videoDetails.title}</Text>
                <Text color={"gray.500"}>
                  {Math.floor(parseInt(video.videoDetails.lengthSeconds) / 60)}:
                  {parseInt(video.videoDetails.lengthSeconds) % 60}
                </Text>
              </VStack>
            </Td>
            <Td align="left">
              <VideoLabels video={video} />
            </Td>
            <Td align="left">
              <AudioLabels video={video} />
            </Td>
            <Td>
              <Badge colorScheme="red">
                <Link
                  href={`/api/video/caption?q=${
                    video.player_response.captions
                      .playerCaptionsTracklistRenderer.captionTracks![0].baseUrl
                  }`}
                  download={`${video.videoDetails.title}.srt`}
                >
                  Caption
                </Link>
              </Badge>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default DownloadTable;

const VideoLabels = ({ video }: { video: Video }) => {
  return (
    <HStack align={"flex-start"}>
      {video
        .formats!.filter((video) => video.hasAudio && video.qualityLabel)
        .sort((a, b) => a.qualityLabel!.localeCompare(b.qualityLabel!))
        .map((format) => (
          <Badge
            key={format.url}
            _hover={{
              bgColor: "red",
            }}
            colorScheme="blue"
          >
            <Link href={format.url!} download={video.videoDetails.title}>
              {format.qualityLabel}
            </Link>
          </Badge>
        ))}
    </HStack>
  );
};

const AudioLabels = ({ video }: { video: Video }) => {
  return (
    <VStack align={"flex-start"}>
      {video
        .formats!.filter((video) => video.hasAudio && !video.qualityLabel)
        .map((format) => (
          <Badge
            key={format.url}
            _hover={{
              bgColor: "red",
            }}
            colorScheme="green"
          >
            <Link
              href={format.url!}
              download={`${video.videoDetails.title}.mp4`}
            >
              {format.mimeType}
            </Link>
          </Badge>
        ))}
    </VStack>
  );
};
