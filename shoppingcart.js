const cart = []

//to add item
function addcart(name,price)
{
    let item = {}
    item.name = name
    item.price = price
    cart.push(item)
    console.log(`${name} added to cart`)
}

//to remove item
function remove(name)
{
    let index = cart.findIndex(r_item => r_item.name === name)
    if (index!==-1){
        cart.splice(index,1)
        console.log(`${name} removed from the cart`)
    }
    else{
        console.log(`${name} does not exist`)
    }
}

//to show items of cart 
function showcart()
{
    if(cart.length === 0){
        console.log("Cart is empty")
    }
    else{
        console.log("Cart contains:")
        cart.forEach((s_item,s_index) => {
            console.log(`${s_index+1}.${s_item.name}:$${s_item.price}`)
        })
    }
}

//total 
function showtotal() 
{
    let total=0
    cart.forEach(t_item=>{
        total += t_item.price
    })
    console.log(`Your total is: ${total}`)
} 
