import { Avatar, AvatarProps } from "@ignite-ui/react"
import { Meta, StoryObj } from "@storybook/react"

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/ViniciusHack.png",
    alt: "Vinicius Hack",
  },
  argTypes: {
    src: {
      control: {
        type: "text"
      },
    },
    alt: {
      control: {
        type: "text"
      }
    },
    },
} as Meta<AvatarProps>

export const Primary:StoryObj<AvatarProps> ={}

export const WithFallback:StoryObj<AvatarProps> ={
  args: {
    src: undefined,
  }
}