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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Adrian",
    age: 21,
    hobbies: ['Cooking', 'Video Games'],
    role: Role.AUTHOR
};
let favoriteActivities;
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.AUTHOR) {
    console.log(' is author');
}
