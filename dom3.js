// let data = [
//     {
//         "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         "rating": {
//             "rate": 3.9,
//             "count": 120
//         }
//     },
//     {
//         "id": 2,
//         "title": "Mens Casual Premium Slim Fit T-Shirts ",
//         "price": 22.3,
//         "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//         "rating": {
//             "rate": 4.1,
//             "count": 259
//         }
//     },
//     {
//         "id": 3,
//         "title": "Mens Cotton Jacket",
//         "price": 55.99,
//         "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//         "rating": {
//             "rate": 4.7,
//             "count": 500
//         }
//     },
//     {
//         "id": 4,
//         "title": "Mens Casual Slim Fit",
//         "price": 15.99,
//         "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//         "rating": {
//             "rate": 2.1,
//             "count": 430
//         }
//     },

let container=document.getElementById("container");
let div1=document.createElement("div");
let img=document.createElement("img");
img.setAttribute("src","https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg");
img.style.width="200px";
img.style.height="200px";
div1.style.border="1px solid black";
div1.style.width="300px";
div1.style.textAlign="center";
div1.style.alignItems="center";
div1.style.display="flex";
div1.style.flexDirection="column";
let p=document.createElement("p");
p.textContent="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops";
let span=document.createElement("span");
span.textContent="$ 109.95";
let button=document.createElement("button");
button.textContent="Buy Now";
button.style.marginBottom="10px";
button.style.marginTop="10px";


let div2=document.createElement("div");
let img1=document.createElement("img");
img1.setAttribute("src","https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg");
img1.style.width="200px";
img1.style.height="200px";
div2.style.border="1px solid black";
div2.style.width="300px";
div2.style.textAlign="center";
div2.style.alignItems="center";
div2.style.display="flex";
div2.style.flexDirection="column";
let p1=document.createElement("p");
p1.textContent="Mens Casual Premium Slim Fit T-Shirts";
let span1=document.createElement("span");
span1.textContent="$ 22.3";
let button1=document.createElement("button");
button1.textContent="Buy Now";
button1.style.marginBottom="10px";
button1.style.marginTop="10px";


let div3=document.createElement("div");
let img2=document.createElement("img");
img2.setAttribute("src","https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg");
img2.style.width="200px";
img2.style.height="200px";
div3.style.border="1px solid black";
div3.style.width="300px";
div3.style.textAlign="center";
div3.style.alignItems="center";
div3.style.display="flex";
div3.style.flexDirection="column";
let p2=document.createElement("p");
p2.textContent="Mens Cotton Jacket";
let span2=document.createElement("span");
span2.textContent="$ 55.99";
let button2=document.createElement("button");
button2.textContent="Buy Now";
button2.style.marginBottom="10px";
button2.style.marginTop="10px";



let div4=document.createElement("div");
let img3=document.createElement("img");
img3.setAttribute("src","https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg");
img3.style.width="200px";
img3.style.height="200px";
div4.style.border="1px solid black";
div4.style.width="300px";
div4.style.textAlign="center";
div4.style.alignItems="center";
div4.style.display="flex";
div4.style.flexDirection="column";
let p3=document.createElement("p");
p3.textContent="Mens Casual Slim Fit";
let span3=document.createElement("span");
span3.textContent="$ 15.99";
let button3=document.createElement("button");
button3.textContent="Buy Now";
button3.style.marginBottom="10px";
button3.style.marginTop="10px";

div1.append(img,p,span,button);
div2.append(img1,p1,span1,button1);
div3.append(img2,p2,span2,button2);
div4.append(img3,p3,span3,button3);
container.append(div1,div2,div3,div4);
