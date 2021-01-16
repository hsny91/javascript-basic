let firstProductList = [
    {  name: "armut", calori:100, expDate:"01.01.2021",price: 2 },
    {  name: "elma", calori: 200, expDate:"01.01.2021", price: 2 },
    {  name: "muz", calori: 150, expDate:"01.01.2021", price: 3 },
    {  name: "ananas", calori:200 ,expDate:"01.01.2021", price: 5 },
    {  name: "kiraz", calori:300, expDate:"01.01.2021", price: 4 }
  ];

  let product=document.querySelector("#product-list")
   function showProductList(pList){
    let productList=`<table class="table">
                     <tr>
                     <th>Name</th>
                     <th> Calori</th>
                     <th>Exp Date</th>
                     <th>Price</th>
                     </tr>`
    pList.map((product)=>{
        productList+=`<tr>
                      <td>${product.name}</td> 
                      <td>${product.calori}</td>
                      <td>${product.expDate}</td>
                      <td>${product.price} Fr</td>
                      <td><button class="button" >Buy</button></td>
                      </tr> ` 
                                 
     })
     productList+=`</table>`
     console.log(productList)
     return productList
     

   }
   product.innerHTML=showProductList(firstProductList);