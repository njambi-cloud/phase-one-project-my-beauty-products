
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

                let amount = document.createElement("input")
                amount.setAttribute("placeholder", "Quantity") 
                amount.style.width= "65px"
                amount.setAttribute("type", "number") 
                diV.appendChild(amount)
                let add= document.createElement("button")
                add.textContent= "Add to Cart"
                diV.appendChild(add)
                add.addEventListener("click", onAdd, {once : true})
                function onAdd() {
                    let cart = document.querySelector("#icon")
                    let cartDiv = document.createElement("div")
                    cartDiv.textContent = 2
                    cartDiv.style.display="none"
                    cart.appendChild(cartDiv)
                    cart.style.position="relative"
                    let post = cartDiv.style.position= "absolute"
                    post.top="20px"

                    cart.addEventListener("click", onclickCart, {once : true} )
                    function onclickCart() {
                        let par = document.createElement("p")
                        par.textContent= product.name
                        cartDiv.appendChild(par)
                        console.log(par)
                    }
                }



                }
                
            })
        })
}

function handleSubmit(){

}
let homebtn= document.getElementById("home")
homebtn.addEventListener("click", ()=> myShop.removeChild(myShop.children[0]) )