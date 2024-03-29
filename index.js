const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordOneEl = document.getElementById("passwordOne")
const passwordTwoEl = document.getElementById("passwordTwo")
let passwordLength = 15

function generateFirstPassword() {
    for (let i = 0; i < passwordLength; i++) {
        let randomPasswordOne = Math.floor(Math.random() * characters.length)
        passwordOneEl.textContent += characters[randomPasswordOne]
    }
}

function generateSecondPassword() {
    for (let i = 0; i < passwordLength; i ++) {
        let randomPasswordTwo = Math.floor(Math.random() * characters.length)
        passwordTwoEl.textContent += characters[randomPasswordTwo]
    }
}

function removePasswords() {
    passwordOneEl.textContent = ""
    passwordTwoEl.textContent = ""
}

function generatePasswords() {
    removePasswords()
    generateFirstPassword()
    generateSecondPassword()
}