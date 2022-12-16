
let myShop = document.getElementById("shop")
myShop.addEventListener("click", render)


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
                ul1.appendChild(li1)
            })
        })
}