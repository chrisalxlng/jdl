import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Collapse, Menu, ChevronIcon, Text } from '@mantine/core';
import { isActivePath } from './routes';

const Navigation = ({ type, items }) => {
  const [opened, setOpened] = useState(-1);

  return type === 'navbar' ? (
    <>
      {items.map((item) =>
        item.items ? (
          <Menu
            key={item.path}
            control={
              <Button variant={isActivePath(item.path) ? 'light' : 'subtle'}>
                {item.label}
              </Button>
            }
            trigger="hover"
            delay={100}
          >
            {item.items.map((subitem) => (
              <Menu.Item key={subitem.path}>
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
              </Menu.Item>
            ))}
          </Menu>
        ) : (
          <Link key={item.path} href={item.path}>
            <Button variant={isActivePath(item.path) ? 'light' : 'subtle'}>
              {item.label}
            </Button>
          </Link>
        )
      )}
    </>
  ) : type === 'header' ? (
    <>
      {items.map((item, id) =>
        item.items ? (
          <div key={item.path} style={{ width: '100%' }}>
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
              {item.items.map((subitem) => (
                <Link key={subitem.path} href={item.path + subitem.path}>
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
              ))}
            </Collapse>
          </div>
        ) : (
          <Link key={item.path} href={item.path}>
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
        )
      )}
    </>
  ) : null;
};

export default Navigation;
