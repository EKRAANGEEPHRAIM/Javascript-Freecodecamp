function makeGreeting (language){
    return function (lastName) {
        if(language === "en") return `hello , ${lastName}`;
        if(language === "fr") return `bonjour , ${lastName}`;
        if(language === "es") return `Hola , ${lastName}`

        return `hi, ${name}!`;
    }
}

const changeInEnglish = makeGreeting("en");
const changeInFrench = makeGreeting("fr");
const changeInEspagnol = makeGreeting("es");

console.log(changeInEnglish("Ephraim"));
console.log(changeInEspagnol("Ange"));
console.log(changeInFrench("Junior"))
