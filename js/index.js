
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
                    let liking = document.createElement("div")
                    liking.style.display="flex"
                    liking.style.flexDirection="row"
                    let lkIcon = document.createElement("div")
                    lkIcon.innerHTML='<i class="fa fa-heart" style="font-size:20px;color:blue"></i>'
                    lkIcon.style.paddingTop="15px"
                    lkIcon.style.paddingRight="10px"
                    let lks = document.createElement("p")
                    // lkIcon.appendChild(lks)
                    lks.textContent= `${product.likes} likes`
                    liking.appendChild(lkIcon)
                    liking.appendChild(lks)
                    diV.appendChild(image)
                    diV.appendChild(headerS)
                    diV.appendChild(desc)
                    diV.appendChild(prc)
                    diV.appendChild(liking)
                lkIcon.addEventListener("click", handleClick)
                    function handleClick(){
                        product.likes += 1
                        lks.textContent = `${product.likes} likes`
                        fetch(`http://localhost:3000/products/${product.id}`,{
                             method: "PATCH",
                             headers: {
                                 'Content-Type': 'application/json'
            
                                    },
                             body: JSON.stringify({likes:product.likes})
                                }).then(res => res.json()).then(product => product.likes.textContent = product.likes )
                    
                    }
                
                let form = document.createElement("form")
                diV.appendChild(form)
                let amount = document.createElement("input")
                amount.setAttribute("placeholder", "Quantity") 
                amount.style.width= "65px"
                amount.setAttribute("type", "number") 
                form.appendChild(amount)
                let add= document.createElement("input")
                add.setAttribute("type", "submit")
                add.textContent= "Add to Cart"
                form.appendChild(add)
                form.addEventListener("submit",handleSubmit, {once : true})
                    function handleSubmit(e){
                        e.preventDefault()
                        let newObj = {
                            // stock: e.target.value
                            name: product.name,
                            price: product.price,
                            stock: product.stock - e.target.value,
                            description: product.desc,
                            image: product.image,
                            likes: product.likes
                        }
                        fetch(`http://localhost:3000/products/${product.id}`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(newObj)
                        })
                            .then((res)=> res.json())
                            .then((products)=> console.log(products))
                    
                    }
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
                
            })
        })
}


let homebtn= document.getElementById("home")
homebtn.addEventListener("click", ()=> myShop.removeChild(myShop.children[0]) )