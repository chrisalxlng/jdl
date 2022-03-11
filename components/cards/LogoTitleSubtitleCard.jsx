import React, { useCallback, useState } from 'react';
import { Card, Container, Divider, Group, Text, Tooltip } from '@mantine/core';
import Image from '../utils/Image';

const LogoTitleSubtitleCard = ({ logo, title, subtitle = null }) => {
  const [isTitleClamped, setTitleClamped] = useState(false);
  const [isSubtitleClamped, setSubtitleClamped] = useState(false);

  const isTextClamped = (element) =>
    element?.scrollHeight > element?.clientHeight;

  const titleRef = useCallback((node) => {
    if (node !== null) {
      setTitleClamped(isTextClamped(node));
    }
  }, []);

  const subtitleRef = useCallback((node) => {
    if (node !== null) {
      setSubtitleClamped(isTextClamped(node));
    }
  }, []);

  return (
    <div style={{ width: 270, margin: 'auto' }}>
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Container sx={{ padding: '30px' }}>
            <Image src={logo} height={70} fit="contain" />
          </Container>
        </Card.Section>
        <Divider />
        <Group
          direction="column"
          align="center"
          mt={20}
          sx={{ height: '120px' }}
        >
          <Tooltip
            label={title}
            opened={isTitleClamped ? null : false}
            width={220}
            wrapLines
            transition="fade"
            transitionDuration={200}
          >
            <Text
              weight={500}
              lineClamp={3}
              align="center"
              sx={{ lineHeight: 1.25 }}
              ref={titleRef}
            >
              {title}
            </Text>
          </Tooltip>
          <Tooltip
            label={subtitle}
            opened={isSubtitleClamped ? null : false}
            width={220}
            wrapLines
            transition="fade"
            transitionDuration={200}
          >
            <Text
              size="sm"
              color="dimmed"
              lineClamp={2}
              align="center"
              sx={{ lineHeight: 1.25 }}
              ref={subtitleRef}
            >
              {subtitle}
            </Text>
          </Tooltip>
        </Group>
      </Card>
    </div>
  );
};

export default LogoTitleSubtitleCard;
