const products = [

{
id:1,
name:"Laptop",
price:50000
},

{
id:2,
name:"Mobile",
price:25000
},

{
id:3,
name:"Headphones",
price:3000
}

];

let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

const cartItems =
document.getElementById("cartItems");

let total = 0;

cart.forEach(id=>{

const product =
products.find(p=>p.id===id);

total += product.price;

cartItems.innerHTML += `

<div class="card">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

</div>

`;

});

cartItems.innerHTML +=
`<h2>Total: ₹${total}</h2>`;