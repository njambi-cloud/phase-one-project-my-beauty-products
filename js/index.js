// let paragraph = document.querySelector("h2")
// paragraph.textContent = "Beauty Products App"
// paragraph.style.color = "red"


// fetch("http://localhost:3000/toys")
//     .then((res) => res.json())
//     .then((toys) => {console.log(toys)
//         toys.map((toy) => {
//             let ul = document.createElement("ul")
//     document.body.append(ul)
//         let li = document.createElement("li")
//         li.textContent=toy.name
//         ul.appendChild(li)
//         li.style.listStyleType= "none"
//         li.style.color = "red"
//         li.addEventListener("click", ()=> {
//             let mdiv = document.createElement("div")
//             ul.appendChild(mdiv)
//             let name = document.createElement("h1")
//             name.textContent= toy.name
//             let likes = document.createElement("h4")
//             likes.textContent = toy.likes
//             let imag = document.createElement("img").src
//             imag.textContent = toy.image
//             mdiv.appendChild(name)
//             mdiv.appendChild(likes)
//             mdiv.appendChild(imag)
            
//         })
//         })}
//     )



function render () {
    fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((products) => {
            return products
            products.map((product)=> {
                let header4 = document.querySelector("h4")
                let ul1 = document.createElement("ul")
                header4.appendChild(ul1)
                let li1 = document.createElement("li")
                ul1.appendChild(li1)
            })
        })
}