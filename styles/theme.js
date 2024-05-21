import { extendTheme } from "@chakra-ui/react";
import { Button, Heading, Tag, Flex, Input, Text } from "./overrides";
import { Badge } from "./badgeStyles";

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "pink.600" : "gray.50",
      },
      p: {
        color: "pink.600",
      },
      "h1, h2, h3, h4": {
        color: "pink.600",
      },
    }),
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  textStyles: {
    Primary: {
      color: "pink.600",
    },
  },
  layerStyles: {
    Primary: {
      bgColor: "pink.600",
    },
  },
  components: {
    Button,
    Badge,
    Heading,
    Tag,
    Flex,
    Input,
    Text,
  },
});
