
var arr =   [];

function myFunction(e){
e.preventDefault();

let form1 = document.getElementById("product")
//   var cat = document.getElementById("category").value

let cat = form1.category.value;
// console.log(cat)
let name = form1.name.value;
// console.log(name)
let price = form1.price.value;
// console.log(price);
let img1 = form1.img.value;
let data = new product(cat,name,price,img1);
arr.push(data);
         
       


console.log(data)
}




function product(c,n,p,i){
    this.category=c;
    this.name =n;
    this.price=p;
    this.image=i
}
