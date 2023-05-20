const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {

    const rootElement = document.getElementById("root")
    const h1Element = document.createElement("h1")
    h1Element.innerHTML = "FREELANCER"
    rootElement.appendChild(h1Element)
    let unorderedList = document.createElement("ul")
    
    for(let i =0; i< users.length; i++){
        let listElement = document.createElement("li")
        listElement.innerHTML = `Freelancer name: ${users[i].name}, Age:  ${users[i].age}, Occupation: ${users[i].occupation}`
        unorderedList.appendChild(listElement)
        }
    rootElement.appendChild(unorderedList)
         
    }
//call the main function
main();