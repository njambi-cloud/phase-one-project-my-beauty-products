
let myShop = document.getElementById("shop")
myShop.addEventListener("click", render, {once : true})


function render () {
    let ourDiv = document.querySelector(".ourdiv")
    fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((products) => {
            console.log(products)
            let header4 = document.createElement("h4")
                header4.textContent= "Our products"
                ourDiv.appendChild(header4)
            products.map((product)=> {
                let ul1 = document.createElement("ul")
                header4.appendChild(ul1)
                let li1 = document.createElement("li")
                li1.textContent=product.name
                li1.style.listStyleType= "none"
                ul1.appendChild(li1)
                li1.addEventListener("click", display, {once : true})
                function display() {
                    let diV = document.createElement("div")
                    li1.appendChild(diV)
                    let image = document.createElement("img")
                    image.src= product.image
                    image.style.width="150px"
                    let headerS= document.createElement("h5")
                    headerS.textContent= product.name
                    let desc = document.createElement("p")
                    desc.textContent= product.description
                    let prc = document.createElement("p")
                    prc.textContent= `Kshs. ${product.price}`
                    let lks = document.createElement("p")
                    lks.textContent= `${product.likes} likes`
                    diV.appendChild(image)
                    diV.appendChild(headerS)
                    diV.appendChild(desc)
                    diV.appendChild(prc)
                    diV.appendChild(lks)


                }
                
            })
        })
}
let homebtn= document.getElementById("home")
homebtn.addEventListener("click", ()=> myShop.removeChild(myShop.children[0]) )