import {
  Box,
  VStack,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const CFG = ({ prob2 }) => {
  return (
    <>
      <Popover isLazy placement="top">
        <PopoverTrigger>
          <Button mx="2">Show CFG</Button>
        </PopoverTrigger>
        <PopoverContent
          maxW={["17em", null, "16em", null, null, "16em"]}
          _focus=""
          bg="gray.50"
          fontSize={["0.7em", "0.7em", "0.9em"]}
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="semibold">
            Context-Free Grammar
          </PopoverHeader>
          <PopoverBody align="center">
            {!prob2 ? (
              <VStack>
                <Text>{"S → bX | aaX | abX"}</Text>
                <Text>{"X → aX | bX | aaaY | bbbY"}</Text>
                <Text>{"Y → aZ | bZ"}</Text>
                <Text>{"Z → aZ | bZ | ^"}</Text>
              </VStack>
            ) : (
              <VStack>
                <Text>{"S → 1S | 0S | 11X | 00X | 101X | 010X"}</Text>
                <Text>{"X → 1X | 0X | 11Y | 00Y"}</Text>
                <Text>{"Y → 1Z | 0Z"}</Text>
                <Text>{"Z → 1Z | 0Z | ^"}</Text>
              </VStack>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CFG;
