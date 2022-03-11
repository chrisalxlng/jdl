import React from 'react';
import { Modal } from '@mantine/core';
import Image from '../utils/Image';

const ImagePreviewModal = ({
  opened,
  setOpened,
  image,
  title,
  caption = null,
}) => (
  <Modal
    opened={opened}
    onClose={() => setOpened(false)}
    title={title}
    centered
    sx={() => ({
      '.mantine-Modal-body': {
        height: '60vh',
      },
    })}
  >
    <Image src={image} caption={caption} radius="md" />
  </Modal>
);

export default ImagePreviewModal;
