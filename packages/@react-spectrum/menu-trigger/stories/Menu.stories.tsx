import {action} from '@storybook/addon-actions';
import AlignCenter from '@spectrum-icons/workflow/AlignCenter';
import AlignLeft from '@spectrum-icons/workflow/AlignLeft';
import AlignRight from '@spectrum-icons/workflow/AlignRight';
import Blower from '@spectrum-icons/workflow/Blower';
import Book from '@spectrum-icons/workflow/Book';
import ChevronRightMedium from '@spectrum-icons/ui/ChevronRightMedium';
import Copy from '@spectrum-icons/workflow/Copy';
import Cut from '@spectrum-icons/workflow/Cut';
import {Item, Menu, Section} from '../';
import {Keyboard, Text} from '@react-spectrum/typography';
import Paste from '@spectrum-icons/workflow/Paste';
import {Popover} from '@react-spectrum/overlays';
import React from 'react';
import {storiesOf} from '@storybook/react';

let iconMap = {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Blower,
  Book,
  Copy,
  Cut,
  Paste
};

let hardModeProgrammatic = [
  {name: 'Section 1', children: [
    {name: 'Copy', icon: 'Copy', shortcut: '⌘C'},
    {name: 'Cut', icon: 'Cut', shortcut: '⌘X'},
    {name: 'Paste', icon: 'Paste', shortcut: '⌘V'}
  ]},
  {name: 'Section 2', children: [
    {name: 'Puppy', icon: 'AlignLeft', shortcut: '⌘P'},
    {name: 'Doggo', icon: 'AlignCenter', shortcut: '⌘D'},
    {name: 'Floof', icon: 'AlignRight', shortcut: '⌘F'},
    {name: 'hasChildren', children: [
      {name: 'Thailand', icon: 'Blower', shortcut: '⌘T'},
      {name: 'Germany', icon: 'Book', shortcut: '⌘G'}
    ]}
  ]}
];

let flatMenu = [
  {name: 'Aardvark'},
  {name: 'Kangaroo'},
  {name: 'Snake'},
  {name: 'Danni'},
  {name: 'Devon'},
  {name: 'Ross'},
  {name: 'Puppy'},
  {name: 'Doggo'},
  {name: 'Floof'}
];

let withSection = [
  {name: 'Animals', children: [
    {name: 'Aardvark'},
    {name: 'Kangaroo'},
    {name: 'Snake'}
  ]},
  {name: 'People', children: [
    {name: 'Danni'},
    {name: 'Devon'},
    {name: 'Ross', children: [
      {name: 'Tests'}
    ]}
  ]}
];

storiesOf('Menu', module)
  .add(
    'Default Menu',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} onSelectionChange={action('onSelectionChange')} items={flatMenu} itemKey="name">
          {item => <Item>{item.name}</Item>}
        </Menu>
      </Popover>
    )
  )
  .add(
    'Menu w/ sections',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} items={withSection} itemKey="name" onSelectionChange={action('onSelectionChange')}>
          {item => (
            <Section items={item.children} title={item.name}>
              {item => <Item childItems={item.children}>{item.name}</Item>}
            </Section>
          )}
        </Menu>
      </Popover>
    )
  )
  .add(
    'Static',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} onSelectionChange={action('onSelectionChange')}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
        </Menu>
      </Popover>
    )
  )
  .add(
    'Static with sections',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} onSelectionChange={action('onSelectionChange')}>
          <Section title="Section 1">
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
          </Section>
          <Section title="Section 2">
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
          </Section>
        </Menu>
      </Popover>
    )
  )
  .add(
    'with default selected menu items',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} onSelectionChange={action('onSelectionChange')} items={withSection} itemKey="name" defaultSelectedKeys={['Kangaroo']}>
          {item => (
            <Section items={item.children} title={item.name}>
              {item => <Item childItems={item.children}>{item.name}</Item>}
            </Section>
          )}
        </Menu>
      </Popover>
    )
  )
  .add(
    'static with default selected menu items',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} onSelectionChange={action('onSelectionChange')} defaultSelectedKeys={['2']}>
          <Section key="section1" title="Section 1">
            <Item key="1">
              One
            </Item>
            <Item key="2">
              Two
            </Item>
            <Item key="3">
              Three
            </Item>
          </Section>
          <Section key="section2" title="Section 2">
            <Item key="4">
              Four
            </Item>
            <Item key="5">
              Five
            </Item>
            <Item key="6">
              Six
            </Item>
            <Item key="7">
              Seven
            </Item>
          </Section>
        </Menu>
      </Popover>
    )
  )
  .add(
    'with selected menu items (controlled)',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} onSelectionChange={action('onSelectionChange')} items={withSection} itemKey="name" selectedKeys={['Kangaroo']}>
          {item => (
            <Section items={item.children} title={item.name}>
              {item => <Item childItems={item.children}>{item.name}</Item>}
            </Section>
          )}
        </Menu>
      </Popover>
    )
  )
  .add(
    'static with selected menu items (controlled)',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} onSelectionChange={action('onSelectionChange')} selectedKeys={['2']}>
          <Section key="sec1" title="Section 1">
            <Item key="1">
              One
            </Item>
            <Item key="2">
              Two
            </Item>
            <Item key="3">
              Three
            </Item>
          </Section>
          <Section key="sec2" title="Section 2">
            <Item key="4">
              Four
            </Item>
            <Item key="5">
              Five
            </Item>
            <Item key="6">
              Six
            </Item>
            <Item key="7">
              Seven
            </Item>
          </Section>
        </Menu>
      </Popover>
    )
  )
  .add(
    'with disabled menu items',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} onSelectionChange={action('onSelectionChange')} items={withSection} itemKey="name" disabledKeys={['Kangaroo', 'Ross']}>
          {item => (
            <Section items={item.children} title={item.name}>
              {item => <Item childItems={item.children}>{item.name}</Item>}
            </Section>
          )}
        </Menu>
      </Popover>
    )
  )
  .add(
    'static with disabled menu items',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} onSelectionChange={action('onSelectionChange')} disabledKeys={['3', '5']}>
          <Section key="sec1" title="Section 1">
            <Item key="1">
              One
            </Item>
            <Item key="2">
              Two
            </Item>
            <Item key="3">
              Three
            </Item>
          </Section>
          <Section key="sec2" title="Section 2">
            <Item key="4">
              Four
            </Item>
            <Item key="5">
              Five
            </Item>
            <Item key="6">
              Six
            </Item>
            <Item key="7">
              Seven
            </Item>
          </Section>
        </Menu>
      </Popover>
    )
  )
  .add(
    'Multiselect menu',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} items={withSection} itemKey="name" onSelectionChange={action('onSelectionChange')} selectionMode="multiple" defaultSelectedKeys={['Aardvark', 'Snake']} disabledKeys={['Kangaroo', 'Ross']}>
          {item => (
            <Section items={item.children} title={item.name}>
              {item => <Item childItems={item.children}>{item.name}</Item>}
            </Section>
          )}
        </Menu>
      </Popover>
    )
  )
  .add(
    'Multiselect menu, static',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} onSelectionChange={action('onSelectionChange')} selectionMode="multiple">
          <Section title="Section 1">
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
          </Section>
          <Section title="Section 2">
            <Item>Four</Item>
            <Item>Five</Item>
            <Item>Six</Item>
          </Section>
        </Menu>
      </Popover>
    )
  )
  .add(
    'No selection allowed menu',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} items={withSection} itemKey="name" onSelectionChange={action('onSelectionChange')} selectionMode="none">
          {item => (
            <Section items={item.children} title={item.name}>
              {item => <Item childItems={item.children}>{item.name}</Item>}
            </Section>
          )}
        </Menu>
      </Popover>
    )
  )
  .add(
    'No selection allowed menu, static',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} onSelectionChange={action('onSelectionChange')} selectionMode="none">
          <Section title="Section 1">
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
          </Section>
          <Section title="Section 2">
            <Item>Four</Item>
            <Item>Five</Item>
            <Item>Six</Item>
          </Section>
        </Menu>
      </Popover>
    )
  )
  .add(
    'Menu with role="listbox"',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} items={withSection} itemKey="name" onSelectionChange={action('onSelectionChange')} role="listbox">
          {item => (
            <Section items={item.children} title={item.name}>
              {item => <Item childItems={item.children}>{item.name}</Item>}
            </Section>
          )}
        </Menu>
      </Popover>
    )
  )
  .add(
    'Menu with role="listbox", static',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} onSelectionChange={action('onSelectionChange')} role="listbox">
          <Section title="Section 1">
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
          </Section>
          <Section title="Section 2">
            <Item>Four</Item>
            <Item>Five</Item>
            <Item>Six</Item>
          </Section>
        </Menu>
      </Popover>
    )
  )
  .add(
    'with semantic elements (static)',
    () => (
      <Popover isOpen hideArrow>
        <Menu autoFocus={false} onSelectionChange={action('onSelectionChange')}>
          <Section title="Section 1">
            <Item>
              <Copy size="S" />
              <Text>Copy</Text>
              <Keyboard>⌘C</Keyboard>
            </Item>
            <Item>
              <Cut size="S" />
              <Text>Cut</Text>
              <Keyboard>⌘X</Keyboard>
            </Item>
            <Item>
              <Paste size="S" />
              <Text>Paste</Text>
              <Keyboard>⌘V</Keyboard>
            </Item>
          </Section>
          <Section title="Section 2">
            <Item>
              <AlignLeft size="S" />
              <Text>Puppy</Text>
              <Text slot="description">Puppy description super long as well geez</Text>
            </Item>
            <Item>
              <AlignCenter size="S" />
              <Text>Doggo with really really really long long long text</Text>
              <Text slot="end">Value</Text>
              <ChevronRightMedium slot="keyboard" />
            </Item>
            <Item>
              <AlignRight size="S" />
              <Text>Floof</Text>
            </Item>
            <Item>
              Basic Item
            </Item>
          </Section>
        </Menu>
      </Popover>
    )
  )
  .add(
    'with semantic elements (generative)',
    () => (
      <Popover isOpen hideArrow> 
        <Menu autoFocus={false} items={hardModeProgrammatic} itemKey="name" onSelectionChange={action('onSelectionChange')} selectionMode="multiple">
          {item => (
            <Section items={item.children} title={item.name}>
              {item => customMenuItem(item)}
            </Section>
          )}
        </Menu>
      </Popover>
    )
  );
  
let customMenuItem = (item) => {
  let Icon = iconMap[item.icon];
  return (
    <Item childItems={item.children}>
      {item.icon && <Icon size="S" />}
      <Text>{item.name}</Text>
      {item.shortcut && <Keyboard>{item.shortcut}</Keyboard>}
    </Item>
  );	
};
