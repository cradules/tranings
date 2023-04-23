const textareaEl = document.querySelector('textarea')
const charactersNumberEl = document.querySelector('.stat__number--characters')
const twitterNumberEl = document.querySelector('.stat__number--twitter')
const facebookNumberEl = document.querySelector('.stat__number--facebook')
const wordsNumberEl = document.querySelector('.stat__number--words')
textareaEl.addEventListener('input', () => {
    // input validation
    if (textareaEl.value.includes('<script>')) {
        alert('Forbidden input!')
        textareaEl.value = textareaEl.value.replace('<script>', '')

    }
    // determine new numbers
    charactersNumberEl.textContent = textareaEl.value.length
    let twitterCharactersLeft = 280 - textareaEl.value.length
    let facebookCharactersLeft = 2200 - textareaEl.value.length
    let numberOfWords = textareaEl.value.split(' ').length
    if (textareaEl.value.length === 0) {
        numberOfWords = 0
    }
    twitterNumberEl.textContent = twitterCharactersLeft
    facebookNumberEl.textContent = facebookCharactersLeft

    if (twitterCharactersLeft < 0) {
        twitterNumberEl.classList.add('stat__number--limit')
    }else {
        twitterNumberEl.classList.remove('stat__number--limit')
    }

    if (facebookCharactersLeft < 0) {
        facebookNumberEl.classList.add('stat__number--limit')
    }else {
        facebookNumberEl.classList.remove('stat__number--limit')
    }

   wordsNumberEl.textContent = numberOfWords

})