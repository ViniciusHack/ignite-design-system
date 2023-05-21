import { Text, TextProps } from "@ignite-ui/react"
import { Meta, StoryObj } from "@storybook/react"

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, sed diam euismod erat volutpat vel augue vel"
  }
} as Meta<TextProps>

export const Primary:StoryObj<TextProps> ={}

export const CustomTag:StoryObj<TextProps> ={
  args: {
    children: "Strong text",
    as: 'strong'
  }
}