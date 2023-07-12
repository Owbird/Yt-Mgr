import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Hero() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          YouTube Downloads{" "}
          <Text as={"span"} color={"green.400"}>
            made easy
          </Text>
        </Heading>

        <Flex w={"full"} justify={"center"}>
          <Image
            src={"/yt-mgr-logo.png"}
            height={100}
            width={100}
            alt="YT-Mgr logo"
            style={{ borderRadius: "50%" }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
