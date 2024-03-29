import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@lj-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ea animi cupiditate optio ab doloribus rem, est facilis, nobis quis porro voluptates aspernatur quaerat veniam, non nam sint doloremque sit!',
    size: 'md',
  },
  argTypes: {
    variant: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {},
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
