import { Box } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowGoForwardLine } from "react-icons/ri";
import { BsArrowClockwise } from "react-icons/bs";

export const ArrowHead = ({ top, left, rotate }) => {
  return (
    <>
      <Box
        top={top}
        left={left}
        rotate={rotate}
        pos="absolute"
        translateX="-50%"
        translateY="-50%"
        color="pink.600"
        transform="auto"
      >
        <MdKeyboardArrowRight size="1.2em" />
      </Box>
    </>
  );
};

export const ArrowLoopSm = ({ top, left, rotate }) => {
  return (
    <>
      <Box
        top={top}
        left={left}
        rotate={rotate}
        pos="absolute"
        translateX="-50%"
        translateY="-50%"
        transform="auto"
        color="pink.600"
        display={["flex", "flex", "flex", "flex", "flex", "none"]}
      >
        <RiArrowGoForwardLine size="4.3em" />
      </Box>
    </>
  );
};

export const ArrowLoopLg = ({ top, left, rotate }) => {
  return (
    <>
      <Box
        top={top}
        left={left}
        rotate={rotate}
        pos="absolute"
        translateX="-50%"
        translateY="-50%"
        transform="auto"
        color="pink.600"
        display={["flex", "flex", "flex", "flex", "flex", "flex"]}
      >
        <BsArrowClockwise size="2em" />
      </Box>
    </>
  );
};

export const ArrowBody = ({ w, top, left, rotate }) => {
  return (
    <>
      <Box
        top={top}
        left={left}
        rotate={rotate}
        w={w}
        h="2em"
        pos="absolute"
        translateX="-50%"
        translateY="-50%"
        transform="auto"
        borderTop="solid 2px"
        borderTopColor="pink.600"
      />
    </>
  );
};