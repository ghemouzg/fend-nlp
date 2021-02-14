import { validateURL } from '../js/validateURL'

describe('Testing URL validation functionality', () => {
    test('test wether the function is defined or not', () => {
        expect(validateURL).toBeDefined()
    })
    

    test('test if the function return false upon getting a wrong input', () => {
        expect(validateURL('Hey')).toBeFalsy()
    })
    test('test if the function return true upon getting a correct input', () => {
        expect(validateURL('https://www.google.com')).toBeTruthy()
    })
})