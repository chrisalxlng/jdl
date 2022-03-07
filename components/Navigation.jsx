import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, Collapse, Menu, ChevronIcon, Text } from '@mantine/core';

const Navigation = ({ type, items }) => {
  const [opened, setOpened] = useState(-1);
  const router = useRouter();

  return type === 'navbar' ? (
    <>
      {items.map((item) =>
        item.items.length ? (
          <Menu
            control={
              <Button
                variant={
                  router.pathname.startsWith(item.path) ? 'light' : 'subtle'
                }
              >
                {item.label}
              </Button>
            }
            trigger="hover"
            delay={100}
          >
            {item.items.map((subitem) => (
              <Menu.Item>
                <Link href={item.path + subitem.path}>
                  <Text
                    size="sm"
                    color={
                      router.pathname === item.path + subitem.path
                        ? 'dark-teal'
                        : 'black'
                    }
                  >
                    {subitem.label}
                  </Text>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        ) : (
          <Link href={item.path}>
            <Button
              variant={router.pathname === item.path ? 'light' : 'subtle'}
            >
              {item.label}
            </Button>
          </Link>
        )
      )}
    </>
  ) : type === 'header' ? (
    <>
      {items.map((item, id) =>
        item.items.length ? (
          <div style={{ width: '100%' }}>
            <Button
              variant={
                router.pathname.startsWith(item.path) ? 'light' : 'subtle'
              }
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
              {item.items.map((subitem) => (
                <Link href={item.path + subitem.path}>
                  <Button
                    variant={
                      router.pathname === item.path + subitem.path
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
              ))}
            </Collapse>
          </div>
        ) : (
          <Link href={item.path}>
            <Button
              variant={router.pathname === item.path ? 'light' : 'subtle'}
              sx={() => ({
                div: {
                  justifyContent: 'start',
                },
              })}
            >
              {item.label}
            </Button>
          </Link>
        )
      )}
    </>
  ) : null;
};

export default Navigation;
