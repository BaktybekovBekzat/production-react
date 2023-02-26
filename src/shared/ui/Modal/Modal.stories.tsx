import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Modal } from './Modal'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Light = Template.bind({})
Light.args = {
    isOpen: true,
    children: 'Lorem impsum sewsau duj nwsah nuwias wdbuiywasbdipuhwadiuh aiudhsiua'
}

export const Dark = Template.bind({})
Dark.args = {
    isOpen: true,
    children: 'Lorem impsum sewsau duj nwsah nuwias wdbuiywasbdipuhwadiuh aiudhsiua'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
