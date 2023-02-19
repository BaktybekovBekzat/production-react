import { classNames } from './classNames'

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('some-class')).toBe('some-class ')
    })

    test('with additional class', () => {
        const expected = 'some-class class1 class2 '

        expect(classNames('some-class', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('with mods', () => {
        const expected = 'some-class class1 class2 hover'

        expect(classNames('some-class', { hover: true, scrollabe: false }, ['class1', 'class2'])).toBe(expected)
    })

    test('with mods changes', () => {
        let expected = 'some-class class1 class2 hover'
        const mods = {
            hover: true,
            scrollable: false
        }

        expect(classNames('some-class', mods, ['class1', 'class2'])).toBe(expected)

        mods.hover = false
        mods.scrollable = true

        expected = 'some-class class1 class2 scrollable'

        expect(classNames('some-class', mods, ['class1', 'class2'])).toBe(expected)
    })
})
