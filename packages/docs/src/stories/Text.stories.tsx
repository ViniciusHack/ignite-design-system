import { Text, TextProps } from "@ignite-ui/react"
import { Meta, StoryObj } from "@storybook/react"

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, sed diam euismod erat volutpat vel augue vel",
    size: "md",
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: "inline-radio"
      }
    },
  }
} as Meta<TextProps>

export const Primary:StoryObj<TextProps> ={}

export const CustomTag:StoryObj<TextProps> ={
  args: {
    children: "Strong text",
    as: 'strong'
  }
}