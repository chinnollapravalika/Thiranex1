const products = [

{
id:1,
name:"Laptop",
price:50000,
image:"images/laptop.jpg"
},

{
id:2,
name:"Mobile",
price:25000,
image:"images/mobile.jpg"
},

{
id:3,
name:"Headphones",
price:3000,
image:"images/headphones.jpg"
}

];

const container =
document.getElementById("productContainer");

products.forEach(product=>{

container.innerHTML += `

<div class="card">

<img src="${product.image}"
alt="${product.name}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>

`;

});

function addToCart(id){

let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

cart.push(id);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert("Product Added Successfully");

}