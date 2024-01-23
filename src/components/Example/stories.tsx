import { Meta, Story } from '@storybook/react/types-6-0';
import { Example, HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Example,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<HeadingProps> = (args) => <Example {...args} />;
