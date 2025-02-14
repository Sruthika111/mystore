
//  let products = [
//         { id: 1, name: "P1", price: 80 },
//         { id: 2, name: "P2", price: 50 },
//         { id: 3, name: "P3", price: 40 },
//       ]
let products=[]
fetch("products.json")
.then((response)=>response.json())
.then((data)=>(showProducts(data)))
      let cart = {};
      let addToCart = (id) => {
       if(!cart[id])  cart[id] = 1; //to add items only when there is noitem in the cart with that id 
        showCart()
      }
      let del=(id)=>{
       delete cart[id] // to delete items in cart
        showCart()
      }
      let decrement=(id)=>{
        cart[id] =cart[id] - 1 // to decrement items in cart
        showCart()
      }
      let increment=(id)=>{
        cart[id] =cart[id] + 1 // to increment items in cart
        showCart()
      }
      let displayCart=()=>{
       cartBox.style.display="block"
        productBox.style.display="none"
      }
      let hideCart=()=>{
        cartBox.style.display="none"
        productBox.style.display="block"
      }
      let showTotal=()=>{
        // initially sum=0
        // reduce is used to add the product of items with its price in the array
        let total=products.reduce((sum,value)=>{
          return sum+value.price*(cart[value.id]??0);
        },0)
        order.innerHTML=total
      }
      let showCart = () => {
        let count=Object.keys(cart).length
        items.innerHTML=count
        showTotal()
        let str = "";
        products.map((value) => {
          if (cart[value.id]) {
            str += `<div>
            ${value.id}:${value.name}:${value.price}:
            <button onclick='decrement(${value.id})'>-</button>
            ${cart[value.id]}
            <button onclick='increment(${value.id})'>+</button>
            ${value.price*cart[value.id]}
            <button onclick='del(${value.id})'>Delete</button>
            </div>`;
          }
        });
        divCart.innerHTML = str;
      };
      let showProducts = (data) => {
        products=data
        let str = "<div class='row'>";
        products.map((value) => {
          str +=
           `<div class='box'>
          <img src='${value.url}'>
          <h3>${value.name}</h3>
          <p>${value.desc}</p>
          <h4>$${value.price}</h4>
          <button onclick='addToCart(${value.id})'>Add to Cart</button>
          </div>`;
        });
        divProducts.innerHTML = str+"</div>";
      };
   