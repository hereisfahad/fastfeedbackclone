import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Switch,
  useToast,
  useDisclosure,
  IconButton
} from '@chakra-ui/react';

import { updateSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';
import { SettingsIcon } from '@chakra-ui/icons';

const EditSiteModal = ({ settings = { icons: true, timestamp: true, ratings: false }, siteId }) => {
  const toast = useToast();
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register } = useForm();

  const onUpdateSite = async (newSettings) => {
    await updateSite(siteId, {
      settings: newSettings
    });
    toast({
      title: 'Success!',
      description: "We've updated your site.",
      status: 'success',
      duration: 5000,
      isClosable: true
    });
    mutate(['/api/sites', user.token]);
    onClose();
  };

  return (
    <>
      <IconButton
        aria-label="Configure Sites"
        icon={<SettingsIcon />}
        variant="ghost"
        color="purple.500"
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onUpdateSite)}>
          <ModalHeader fontWeight="bold">Configure Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={0}>
            <FormControl display="flex">
              <Switch
                key={settings?.timestamp}
                name="timestamp"
                id="show-timestamp"
                ref={register()}
                colorScheme="purple"
                defaultIsChecked={settings?.timestamp}
              />
              <FormLabel ml={2} htmlFor="show-timestamp" cursor="pointer">
                Show Timestamp
              </FormLabel>
            </FormControl>
            <FormControl display="flex">
              <Switch
                key={settings?.icons}
                name="icons"
                id="show-icons"
                ref={register()}
                colorScheme="purple"
                defaultIsChecked={settings?.icons}
              />
              <FormLabel ml={2} htmlFor="show-icons" cursor="pointer">
                Show Provider
              </FormLabel>
            </FormControl>
            <FormControl display="flex">
              <Switch
                key={settings?.ratings}
                name="ratings"
                id="show-ratings"
                ref={register()}
                colorScheme="purple"
                defaultIsChecked={settings?.ratings}
              />
              <FormLabel ml={2} htmlFor="show-ratings" cursor="pointer">
                Show Ratings
              </FormLabel>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button
              colorScheme="purple"
              fontWeight="medium"
              type="submit"
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditSiteModal;
