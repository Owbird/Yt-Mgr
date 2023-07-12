"use client";

import { Video } from "@/interfaces/interfaces";
import {
  Badge,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Input,
  Link,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

export default function Home() {
  const [link, setLink] = useState<string>();
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setVideos([]);
    setIsLoading(true);

    const res = await fetch(`/api/video?q=${link}`);

    const data = (await res.json()) as Video[];

    setIsLoading(false);
    setVideos(data);
  };

  return (
    <Fragment>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box p={8} maxW="md">
          <Stack spacing={4}>
            <Center>
              <Heading>YouTube Manager</Heading>
            </Center>
            <Center>
              <Stack direction="row">
                <Input
                  type="text"
                  name="q"
                  onChange={(event) => setLink(event.target.value)}
                  placeholder="YouTube Link"
                  focusBorderColor="blue.500"
                />
                <Button
                  isLoading={isLoading}
                  onClick={handleSearch}
                  type="submit"
                  colorScheme="blue"
                >
                  Search
                </Button>
              </Stack>
            </Center>
          </Stack>
        </Box>
      </Box>
      {videos.length > 0 && (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th></Th>
              <Th>Title</Th>
              <Th>Video</Th>
              <Th>Audio Only</Th>
              <Th>Caption</Th>
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
                  {
                    <Image
                      src={video.videoDetails.thumbnails![0].url}
                      width={video.videoDetails.thumbnails![0].width}
                      height={video.videoDetails.thumbnails![0].height}
                      alt={video.videoDetails.title}
                    />
                  }
                </Td>
                <Td>
                  <VStack align={"self-start"}>
                    <Text>{video.videoDetails.title}</Text>
                    <Text color={"gray.500"}>
                      {Math.floor(
                        parseInt(video.videoDetails.lengthSeconds) / 60
                      )}
                      :{parseInt(video.videoDetails.lengthSeconds) % 60}
                    </Text>
                  </VStack>
                </Td>
                <Td align="left">
                  <HStack align={"flex-start"}>
                    {video
                      .formats!.filter(
                        (video) => video.hasAudio && video.qualityLabel
                      )
                      .sort((a, b) =>
                        a.qualityLabel!.localeCompare(b.qualityLabel!)
                      )
                      .map((format) => (
                        <Badge
                          key={format.url}
                          _hover={{
                            bgColor: "red",
                          }}
                          colorScheme="blue"
                        >
                          <Link
                            href={format.url!}
                            download={video.videoDetails.title}
                          >
                            {format.qualityLabel}
                          </Link>
                        </Badge>
                      ))}
                  </HStack>
                </Td>
                <Td align="left">
                  <VStack align={"flex-start"}>
                    {video
                      .formats!.filter(
                        (video) => video.hasAudio && !video.qualityLabel
                      )
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
                </Td>
                <Td>
                  <Badge colorScheme="red">
                    <Link
                      href={`/api/video/caption?q=${
                        video.player_response.captions
                          .playerCaptionsTracklistRenderer.captionTracks![0]
                          .baseUrl
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
      )}
    </Fragment>
  );
}
