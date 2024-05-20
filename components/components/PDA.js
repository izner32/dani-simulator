

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useBreakpointValue,
  Button,
  Image
} from '@chakra-ui/react'

const PDA = ({ prob2 }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const modalSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <>
      <Button onClick={onOpen}>Show PDA</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
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