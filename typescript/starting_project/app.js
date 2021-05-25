let uesrInput;
let userName;
uesrInput = 5;
uesrInput = 'Adrian';
if (typeof uesrInput === 'string') {
    userName = uesrInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
