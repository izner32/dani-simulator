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
        color="gray.700"
        display={["flex", "flex", "flex", "flex", "flex", "none"]}
      >
        <RiArrowGoForwardLine size="1.3em" />
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
        color="gray.700"
        display={["none", null, "none", null, null, "flex"]}
      >
        <BsArrowClockwise size="2.2em" />
      </Box>
    </>
  );
};

export const ArrowBody = ({ w, top, left, rotate, text, textTop }) => {
  const adjustedRotate = rotate && rotate.length > 0
    ? rotate.map(value => `${360 - Math.abs(parseInt(value, 10))}`)
    : rotate;
  console.log(text, rotate)

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
      borderTopColor="gray.700"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box 
        translateY={textTop ? '1%' : '-100%'}
        {...(adjustedRotate && { rotate: adjustedRotate })} 
        transform='auto'
      >
        {text}
      </Box>
    </Box>
    </>
  );
};
