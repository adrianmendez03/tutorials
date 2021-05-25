// EXPLICIT
// const person: {
//     name: string,
//     age: number
// } = {
//     name: "Adrian",
//     age: 21
// }

// INFERED 
// const person : {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: "Adrian",
//     age: 21,
//     hobbies: ['Cooking', 'Video Games'],
//     role: [2, 'author']
// }

enum Role { ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: "Adrian",
    age: 21,
    hobbies: ['Cooking', 'Video Games'],
    role: Role.AUTHOR
}

let favoriteActivities: string[]

for (const hobby of person.hobbies) {
    console.log(hobby)
}

if (person.role === Role.AUTHOR) {
    console.log(' is author')
} 