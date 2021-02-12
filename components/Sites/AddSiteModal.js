import { useState } from 'react'
import { useForm } from "react-hook-form";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'

import { createSite } from '@/lib/db'
import { useAuth } from '@/lib/auth'

const AddSiteModal = ({ buttonText }) => {
  const auth = useAuth()
  const { register, handleSubmit, errors } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [loading, setLoading] = useState(false)

  const onSubmit = async ({ name, link }) => {
    setLoading(true)
    try {
      await createSite({
        authorId: auth.user.uid,
        createdAt: new Date().toISOString(),
        name,
        link
      })
      toast({
        title: "Site created.",
        description: "Your site is created.",
        status: "success",
      })
      onClose()
    } catch (error) {
      toast({
        title: "Failed.",
        description: error?.message,
        status: "error",
      })
    }
    setLoading(false)
  };

  return (
    <>
      <Button onClick={onOpen}>{buttonText}</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)} mx="2rem">
          <ModalHeader userSelect="none">Add site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isInvalid={errors?.name?.message}>
              <FormLabel htmlFor="name" userSelect="none">Name</FormLabel>
              <Input autoFocus placeholder="My site" id="name" name="name" ref={register({ required: "Name of site is required" })} />
              <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isInvalid={errors?.link?.message}>
              <FormLabel htmlFor="link" userSelect="none">Link</FormLabel>
              <Input placeholder="https://website.com" id="link" name="link" ref={register({ required: "Site link is required" })} />
              <FormErrorMessage>{errors?.link?.message}</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3} type="submit" id="create-site-button" isLoading={loading} loadingText="adding..">
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddSiteModal
