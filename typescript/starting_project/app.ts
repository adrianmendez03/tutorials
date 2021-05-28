let uesrInput: unknown
let userName: string

uesrInput = 5
uesrInput = "Adrian"

if (typeof uesrInput === "string") {
  userName = uesrInput
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
}

generateError("An error occurred!", 500)
