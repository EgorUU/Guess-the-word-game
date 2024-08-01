const word = document.querySelector('#word');
const userInput = document.querySelector('#user-input')
const newWordButton = document.querySelector('button')
const elems = document.querySelector('.word-elems')
let elemsDiv
let elemsDivText

let words = ["яблоко","дыня","машина","кружка","корова","мандарин","хомяк","цифра","отель",
    "горничная", "банан", "сушки", "книга", "компьютер", "море", "собака", "кот", "дерево", "гора", 
    "цветок", "машина", "солнце", "луна", "звезда", "ветер", "музыка", "танец", "свет", "тень", 
    "дождь", "улыбка", "друг", "вода", "земля", "небо", "птица", "рыба", "жираф", "слон", 
    "кролик", "фрукты", "овощи", "шар", "мяч", "снег", "зима", "лето", "осень", "весна", 
    "снура", "папа", "мама", "дедушка", "бабушка", "день", "ночь", "путешествие", "светильник", 
    "комната", "гитара", "удовольствие", "завтрак", "обед", "ужин", "суп", "пирог", "торт", 
    "кекс", "печенье", "сок", "чай", "кофе", "клубника", "малина", "апельсин", "арбузы", "лимон", 
    "чашка", "тарелка", "вилка", "ложка", "нож", "бутылка", "стол", "стул", "диван", "кресло"
];
let newWord
newWordButton.addEventListener('click', () => {
    elems.innerHTML = ''
    newWord = words[Math.floor(Math.random() * ((words.length - 1) - 0 + 1)) + 0];
    userInput.style.display = 'block'
    newWordButton.style.display = 'none'
    word.textContent = 'Угадай слово'
    for (let i = 0;i < newWord.length; i++) {
        let el = document.createElement('div');
        elems.append(el)
        elemsDiv = document.querySelectorAll('.word-elems>div')
        elems.style.width = `${(50 * i)}px`
        elems.style.padding =  '0px 10px'
    }
})
let a
userInput.addEventListener('input', (e) => {
    if (userInput.value) {
        a = userInput.value[userInput.value.length - 1].toLowerCase()
    }
    if (newWord.includes(a)) {
        // console.log(`Буква ${userInput.value[userInput.value.length - 1]} найдена!`)
        for (let i = 0; i < newWord.length; i++) {
            if (newWord[i] == a) {
                // let newLetter = document.createElement('h1')
                // elemsDiv[i].prepend(newLetter)
                // newLetter.textContent = a;
                // newLetter.style.color = 'green'
                if (!elemsDiv[i].hasChildNodes()) {
                    let newLetter = document.createElement('h1')
                    elemsDiv[i].prepend(newLetter)
                    newLetter.textContent = a;
                    newLetter.style.color = 'green'
                }
            }
        }
    }
    elemsDivText = document.querySelectorAll('.word-elems>div>h1')
    if (elemsDivText.length == newWord.length) {
        word.textContent = 'Вы угадали слово!'
        userInput.style.display = 'none'
        newWordButton.style.display = 'block'
        userInput.value = ''
    }
})

