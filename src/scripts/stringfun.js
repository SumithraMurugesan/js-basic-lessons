//default value for parameter
function  yell(name='silly Goose') {
    return `HEY ${name.toUpperCase()}`
}

let greetings= yell('sumi');
console.log(greetings);
greetings =yell();
console.log(greetings);
