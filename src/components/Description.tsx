import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const features = [
  { title: "Playlist support", text: "Download all content from a playlist" },
  { title: "Video download", text: "Download your preferred video quality" },
  { title: "Audio download", text: "Download audio only content" },
  { title: "Caption download", text: "Download captions of a video" },
];

export default function Description() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Welcome to YouTube Manager.</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Download YouTube videos, audio, and captions with playlist support.
          Simplifying access to your favorite content.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature, index) => (
            <HStack key={index} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
