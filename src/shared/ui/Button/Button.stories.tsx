import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Button, ButtonSize, ButtonTheme } from './Button'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text'
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'CLEAR',
    theme: ButtonTheme.CLEAR
}

export const ClearDark = Template.bind({})
ClearDark.args = {
    children: 'Clear',
    theme: ButtonTheme.CLEAR
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline = Template.bind({})
Outline.args = {
    children: 'OUTLINE',
    theme: ButtonTheme.OUTLINE
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: 'OUTLINE',
    theme: ButtonTheme.OUTLINE
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
    children: 'Background',
    theme: ButtonTheme.BACKGROUND
}

export const BackgroundThemeDark = Template.bind({})
BackgroundThemeDark.args = {
    children: 'Background',
    theme: ButtonTheme.BACKGROUND
}
BackgroundThemeDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundInvertedTheme = Template.bind({})
BackgroundInvertedTheme.args = {
    children: 'BackgroundInverted',
    theme: ButtonTheme.BACKGROUND_INVERTED
}

export const BackgroundInvertedThemeDark = Template.bind({})
BackgroundInvertedThemeDark.args = {
    children: 'BackgroundInverted',
    theme: ButtonTheme.BACKGROUND_INVERTED
}
BackgroundInvertedThemeDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareButton = Template.bind({})
SquareButton.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND,
    square: true
}

export const SquareButtonL = Template.bind({})
SquareButtonL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
}

export const SquareButtonM = Template.bind({})
SquareButtonM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M
}

export const SquareButtonXL = Template.bind({})
SquareButtonXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
}

export const OutlineButtonL = Template.bind({})
OutlineButtonL.args = {
    children: 'OUTLINE',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
}

export const OutlineButtonM = Template.bind({})
OutlineButtonM.args = {
    children: 'OUTLINE',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M
}

export const OutlineButtonXL = Template.bind({})
OutlineButtonXL.args = {
    children: 'OUTLINE',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
}
