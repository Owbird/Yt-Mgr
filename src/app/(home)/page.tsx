"use client";

import Description from "@/components/Description";
import DownloadTable from "@/components/DownloadTable";
import Hero from "@/components/Hero";
import { Video } from "@/interfaces/interfaces";
import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { Fragment, useState } from "react";

export default function Home() {
  const HEADERS = ["#", "", "Title", "Video", "Audio Only", "Caption"];

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

  const readClipboard = async () => {
    const text = await navigator.clipboard.readText();
    const regex =
      /(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=)?([A-Za-z0-9_-]{11})/;
    const matches = text.match(regex);

    if (matches) {
      setLink(matches[0]);
    }
  };

  return (
    <Fragment>
      <Hero />
      <Box p={8} maxW="md" mx="auto">
        <Stack direction="row" justifyContent="center">
          <Input
            type="text"
            name="q"
            value={link}
            onChange={(event) => setLink(event.target.value)}
            onClick={readClipboard}
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
      </Box>
      {videos.length > 0 && <DownloadTable headers={HEADERS} videos={videos} />}

      <Description />
    </Fragment>
  );
}
