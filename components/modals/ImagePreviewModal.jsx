import { Image, Modal } from '@mantine/core';
import React from 'react';

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
  >
    <Image src={image} caption={caption} radius="md" />
  </Modal>
);

export default ImagePreviewModal;
