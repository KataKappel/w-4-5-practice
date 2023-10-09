const arr = ["egy", "kettő", "három", "négy"]

console.log(arr.includes("kettő"))

console.log(["one", "two", "three", "four"].includes("four"))

const str = "Hello world"

console.log(str.substring(3))
console.log(str.charAt(4))
//ez ugyanaz, mint a (str[4])

const obj = {
    name: "Gipsz Jakab",
    age: 27,
    pets: [
        "Mirci",
        "Lajcsi",
        "Géza"
    ],
    children: [
        {
            name: "Gipsz Jancsi",
            age: 5
        },
        {
            name: "Gipsz Juli",
            age: 11
        }
    ] 
}

//console.log(Object.keys(obj))

for(const key of Object.keys(obj)) {
    console.log(key, obj[key])
}

//adott object kulcsain így tudunk végig iterálni és az összes kulcs értékét megkapni

const users = [
    {
        name: "John Doe",
        age: 33
    },
    {
        name: "Kis Pista",
        age: 33
    },
    {
        name: "Kovács János",
        age: 54
    },
    {
        name: "Márta Richárd",
        age: 28
    }
]

//users.forEach((user) => console.log(user.name)) 

//const userNames = []

//users.forEach((user) => userNames.push(user.name)) 

const userNames = users.map((user,index) =>
    console.log(index, user.name)
)

console.log(userNames)