
let myShop = document.getElementById("shop")
myShop.addEventListener("click", render, {once : true})


function render () {
    fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((products) => {
            console.log(products)
            products.map((product)=> {
                let header4 = document.querySelector("h4")
                let ul1 = document.createElement("ul")
                header4.appendChild(ul1)
                let li1 = document.createElement("li")
                li1.textContent=product.name
                li1.style.listStyleType= "none"
                ul1.appendChild(li1)
                li1.addEventListener("click", display)
                function display() {
                    let diV = document.createElement("div")
                    li1.appendChild(diV)
                    let image = document.createElement("img")
                    image.src= product.image
                    let headerS= document.createElement("h5")
                    headerS.textContent= product.name
                    let desc = document.createElement("p")
                    desc.textContent= product.description
                    let prc = document.createElement("p")
                    prc.textContent= product.price
                    let lks = document.createElement("p")
                    lks.textContent= product.likes
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