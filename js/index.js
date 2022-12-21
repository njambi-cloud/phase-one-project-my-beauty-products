
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
                    let div1 = document.createElement("div")
                    let diV = document.createElement("div")
                    let div2 =document.createElement("div")
                    div1.appendChild(diV)
                    diV.appendChild(div2)
                    diV.style.display="flex"
                    diV.style.padding="15px"
                    li1.addEventListener("click", hide)

                    function hide() {
                        diV.textContent=""
                        diV.style.backgroundColor=""
                    }
                    diV.style.backgroundColor="rgb(216, 243, 251)"
                    diV.style.width= "750px"
                    diV.style.borderRadius="20px"
                    diV.style.marginLeft="200px"
                    li1.appendChild(diV)
                    let image = document.createElement("img")
                    image.src= product.image
                    image.style.width="300px"
                    image.style.borderRadius="20px"
                    image.style.marginLeft="20px"
                    let headerS= document.createElement("h5")
                    headerS.textContent= product.name
                    let desc = document.createElement("p")
                    desc.textContent= product.description
                    desc.style.width = "400px"
                    desc.style.fontWeight= "normal"
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
                    lks.style.fontWeight= "normal"
                    lks.style.fontStyle="italic"
                    liking.appendChild(lkIcon)
                    liking.appendChild(lks)
                    diV.appendChild(image)
                    div2.appendChild(headerS)
                    div2.appendChild(desc)
                    div2.appendChild(prc)
                    div2.appendChild(liking)
                lkIcon.addEventListener("click", handleClick)
                    function handleClick(e){
                        e.preventDefault()
                        let lkCount = product.likes + 1
                        lks.textContent = `${lkCount} likes`
                        fetch(`http://localhost:3000/products/${product.id}`,{
                             method: "PATCH",
                             headers: {
                                 'Content-Type': 'application/json'
            
                                    },
                             body: JSON.stringify({likes:lkCount})
                                }).then(res => res.json()).then(product => product.likes.textContent = product.likes )
                    }
                
                let form = document.createElement("form")
                div2.appendChild(form)
                let amount = document.createElement("input")
                amount.setAttribute("placeholder", "Quantity") 
                amount.style.width= "65px"
                amount.setAttribute("type", "number") 
                amount.style.marginRight="10px"
                form.appendChild(amount)
                let add= document.createElement("input")
                add.setAttribute("type", "submit")
                add.textContent= "Add to Cart"
                form.appendChild(add)
                form.addEventListener("submit",handleSubmit, {once : true})

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
                        ourDiv.textContent=""
                        let antDiv = document.createElement("div")
                        document.body.append(antDiv)
                        let parDiv = document.createElement("div")
                        antDiv.appendChild(parDiv)
                        let par = document.createElement("h6")
                        let array= []
                        array.push(product.price)
                        let count=0
                        for(let i=0; i<array.length; i++){
                            count= count + array[i]
                        }
                        let nwP = document.createElement("p")
                        antDiv.appendChild(nwP)
                        nwP.textContent=count
                        par.textContent= product.name
                        parDiv.appendChild(par)
                        let deleteBtn = document.createElement("button")
                        deleteBtn.textContent="X"
                        deleteBtn.style.marginLeft="10px"

                        deleteBtn.addEventListener("click", () =>antDiv.innerHTML="")
                        par.appendChild(deleteBtn)
                        // cartDiv.appendChild(par)
                        console.log(par)
                    }
                    function handleSubmit(e){
                        e.preventDefault()
                        let myInput =e.target.value
                        let newStock = product.stock - parseInt(myInput, 10)
                        fetch(`http://localhost:3000/products/${product.id}`,{
                             method: "PATCH",
                             headers: {
                                 'Content-Type': 'application/json'
            
                                    },
                             body: JSON.stringify({stock:newStock})
                                }).then(res => res.json()).then(product => product.stock.textContent = product.stock )
                    }
                }
            })
        })
let homebtn= document.getElementById("home")
homebtn.addEventListener("click", handleClear)
function handleClear (){
ourDiv.textContent=""
}
}


