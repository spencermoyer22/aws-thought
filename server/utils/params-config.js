const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];

    const imageParams = {
        Bucket: 'user-images-5f787b42-a0bc-40f7-a639-329b919e1bbb',
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer
    };

    return imageParams;
}

module.exports = params;