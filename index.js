
const messageNames = [];

function writeCards(names, value) {
    for (let i = 0; i < names.length; i++) {
        messageNames.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
    }
    return messageNames
}

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
    console.log(countDown--)
}
}
