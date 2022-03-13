/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Collapse, Menu, ChevronIcon, Text } from '@mantine/core';
import { isActivePath } from './routes';

const Navigation = ({ type, items }) => {
  const [opened, setOpened] = useState(-1);

  return type === 'navbar' ? (
    <>
      {items.map((item, index) =>
        item.items ? (
          <Menu
            key={index}
            control={
              <Button variant={isActivePath(item.path) ? 'light' : 'subtle'}>
                {item.label}
              </Button>
            }
            trigger="hover"
            delay={50}
          >
            {item.items.map((subitem, innerIndex) => (
              <Menu.Item key={innerIndex}>
                {subitem.path ? (
                  <Link href={item.path + subitem.path}>
                    <Text
                      size="sm"
                      color={
                        isActivePath(item.path + subitem.path)
                          ? 'dark-teal'
                          : 'black'
                      }
                    >
                      {subitem.label}
                    </Text>
                  </Link>
                ) : (
                  <Text
                    size="sm"
                    color={
                      isActivePath(item.path + subitem.path)
                        ? 'dark-teal'
                        : 'black'
                    }
                  >
                    {subitem.label}
                  </Text>
                )}
              </Menu.Item>
            ))}
          </Menu>
        ) : item.path ? (
          <Link key={index} href={item.path}>
            <Button variant={isActivePath(item.path) ? 'light' : 'subtle'}>
              {item.label}
            </Button>
          </Link>
        ) : (
          <Button
            key={index}
            variant={isActivePath(item.path) ? 'light' : 'subtle'}
          >
            {item.label}
          </Button>
        )
      )}
    </>
  ) : type === 'header' ? (
    <>
      {items.map((item, id) =>
        item.items ? (
          <div key={id} style={{ width: '100%' }}>
            <Button
              variant={isActivePath(item.path) ? 'light' : 'subtle'}
              fullWidth
              rightIcon={<ChevronIcon />}
              onClick={() => (id === opened ? setOpened(-1) : setOpened(id))}
              sx={() => ({
                div: {
                  justifyContent: 'space-between',
                },
              })}
            >
              {item.label}
            </Button>
            <Collapse in={id === opened}>
              {item.items.map((subitem, index) =>
                subitem.path ? (
                  <Link key={index} href={item.path + subitem.path}>
                    <Button
                      variant={
                        isActivePath(item.path + subitem.path)
                          ? 'light'
                          : 'subtle'
                      }
                      fullWidth
                      sx={() => ({
                        div: {
                          justifyContent: 'start',
                          paddingLeft: 20,
                        },
                      })}
                    >
                      {subitem.label}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    key={index}
                    variant={
                      isActivePath(item.path + subitem.path)
                        ? 'light'
                        : 'subtle'
                    }
                    fullWidth
                    sx={() => ({
                      div: {
                        justifyContent: 'start',
                        paddingLeft: 20,
                      },
                    })}
                  >
                    {subitem.label}
                  </Button>
                )
              )}
            </Collapse>
          </div>
        ) : item.path ? (
          <Link key={id} href={item.path}>
            <Button
              variant={isActivePath(item.path) ? 'light' : 'subtle'}
              sx={() => ({
                div: {
                  justifyContent: 'start',
                },
              })}
            >
              {item.label}
            </Button>
          </Link>
        ) : (
          <Button
            key={id}
            variant={isActivePath(item.path) ? 'light' : 'subtle'}
            sx={() => ({
              div: {
                justifyContent: 'start',
              },
            })}
          >
            {item.label}
          </Button>
        )
      )}
    </>
  ) : null;
};

export default Navigation;
