import { handleFormSubmit } from './js/formHandler'
import { validateURL } from './js/validateURL'
import './styles/style.scss'

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
         handleFormSubmit(validateURL)
    })
});
export {
    handleFormSubmit,
    validateURL
}