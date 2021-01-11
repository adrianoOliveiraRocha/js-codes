const getRandomLetter = () => {
    const min = "a".charCodeAt();
    const max = "z".charCodeAt();
    return String.fromCharCode(
        Math.floor(Math.random() * (1 + max - min)) + min
    );
};

const getRandomFileName = (fileExtension = "") => {
    const NAME_LENGTH = 12;
    let namePart = new Array(NAME_LENGTH);
    for (let i = 0; i < NAME_LENGTH; i++) {
        namePart[i] = getRandomLetter();
    }
    return namePart.join("") + fileExtension;
};

const getRandomFileName2 = (fileExtension = "", randomLetterFunc) => {
    const NAME_LENGTH = 12;
    let namePart = new Array(NAME_LENGTH);
    for (let i = 0; i < NAME_LENGTH; i++) {
        namePart[i] = randomLetterFunc();
    }
    return namePart.join("") + fileExtension;
};

module.exports.getRandomFileName = getRandomFileName;
module.exports.getRandomFileName2 = getRandomFileName2;