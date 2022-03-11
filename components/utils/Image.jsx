/* eslint-disable import/no-named-default */
import React, { useState } from 'react';
import { default as NextImage } from 'next/image';
import { Container, Skeleton, Text } from '@mantine/core';

const Image = ({
  src,
  height = null,
  width = null,
  caption = null,
  radius = null,
  placeholder = 'skeleton',
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <Container
      padding={0}
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      sx={
        radius
          ? (theme) => ({
              img: {
                width: 'auto',
                borderRadius: theme.radius[radius],
              },
            })
          : null
      }
    >
      <div
        style={{
          position: 'relative',
          height: height || '100%',
          width: width || '100%',
          flexGrow: 1,
          padding: '0 auto',
        }}
      >
        {placeholder === 'skeleton' ? (
          <Skeleton visible={loading} sx={{ height: '100%' }}>
            <NextImage
              src={src}
              layout="fill"
              objectFit="contain"
              onLoadingComplete={() => setLoading(false)}
            />
          </Skeleton>
        ) : placeholder === 'blur' ? (
          <NextImage
            src={src}
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL={src}
          />
        ) : null}
      </div>
      {caption ? (
        <Text align="center" mt={20} color="dimmed" size="sm">
          {caption}
        </Text>
      ) : null}
    </Container>
  );
};

export default Image;
