import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { AppLink, AppLinkTheme } from './AppLink'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Light = Template.bind({})
Light.args = {
    children: 'App Link'
}

export const Dark = Template.bind({})
Dark.args = {
    children: 'App Link'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Primary = Template.bind({})
Primary.args = {
    children: 'App Link',
    theme: AppLinkTheme.PRIMARY
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'App Link',
    theme: AppLinkTheme.PRIMARY
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'App Link',
    theme: AppLinkTheme.SECONDARY
}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    children: 'App Link',
    theme: AppLinkTheme.SECONDARY
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
