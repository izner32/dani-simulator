// import {
//     Box,
//     VStack,
//     Text,
//     Button,
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//     PopoverHeader,
//     PopoverBody,
//     PopoverArrow,
//     PopoverCloseButton,
//     Image
//   } from "@chakra-ui/react";

// import { useState } from 'react'
// import { FullScreen, useFullScreenHandle } from "react-full-screen";
  
//   const PDA = ({ prob2 }) => {
//     const [isFullScreen, setIsFullScreen] = useState(false);
//     const handle = useFullScreenHandle();

//     const toggleFullScreen = () => {
//       setIsFullScreen(!isFullScreen);
//       handle.enter();
//     };

//     return (

//       <>
//       <Popover isLazy placement="top" >
//         <PopoverTrigger>
//           <Button mx="2">Show PDA</Button>
//         </PopoverTrigger>
//         <PopoverContent
//           maxW={isFullScreen ? "50em" : ["17em", null, "16em", null, null, "16em"]}
//           maxH={isFullScreen ? "50em" : "none"}
//           _focus=""
//           bg="gray.50"
//           fontSize={["0.7em", "0.7em", "0.9em"]}
//         >
//           <PopoverArrow />
//           <PopoverCloseButton />
//           <PopoverHeader fontWeight="semibold">
//             PDA
//           </PopoverHeader>
//           <PopoverBody align="center">
//             <Image
//               src={!prob2 ? "/views/regex1.JPG" : "/views/regex2.JPG"}
//               alt={!prob2 ? "Description for image 1" : "Description for image 2"}
//               width={isFullScreen ? "100%" : "auto"}
//               height={isFullScreen ? "100%" : "auto"}
//               style={{ cursor: "pointer" }}
//               onClick={toggleFullScreen}
//             />
//           </PopoverBody>
//         </PopoverContent>
//       </Popover>
//       </>
//     );
//   };
  
//   export default PDA;

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image
} from '@chakra-ui/react'

const PDA = ({ prob2 }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Show PDA</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>PDA</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={!prob2 ? "/views/pda1.png" : "/views/pda2.png"}
              alt={!prob2 ? "PDA" : "PDA"}
              width={"auto"}
              height={"auto"}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
};

export default PDA;