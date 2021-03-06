
 createHeader=()=> {
    return `
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand text-light" href="#">
      <img src="./img/iconfinder_stroke_letter_r_uppercase_gestureworks_80646.png" alt="> width="100" height="100" class="d-inline-block align-top" alt="">
      Raziye's Online Shop
    </a>
  </nav>`
}

 createProductList=(pList)=> {
    let productTable = " "
    productTable = `
  <h2>Product List</h2>
  <table class="table">
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Calori</th>
            <th scope="col">EXP</th>
            <th scope="col">Price</th>
            <th scope="col">Product</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>`
    pList.map(product => {
        productTable +=
            `<tr>
        <td><strong>${product.productName}<strong></td>
        <td>${product.totalCalories}</td>
        <td>${product.expireDate.toLocaleDateString("ch-CH")}</td>
        <td>${product.price}</td>
        <td><img src="${product.productImage}" width=40px></img></td>
        <td><button id="${product.productName}" type="button" class="add btn btn-secondary">Buy</button></td>
      </tr>`
    })
    productTable +=
        `</tbody>
                  </table>`
    return productTable
}

 showShoppingBox=(pShopList)=> {
    let totalPrice = 0;
    let shoppingTable = " "
    shoppingTable = `
  <h2>Shopping Box</h2>
  <table class="table">
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Calori</th>
            <th scope="col">Price</th>
            <th scope="col">Product</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>`
    pShopList.map((product, index) => {
        totalPrice += product.price;
        shoppingTable +=
            `<tr class="sil">
        <td><strong>${product.productName}<strong></td>
        <td>${product.totalCalories}</td>
        <td>${product.price}</td>
        <td><img src="${product.productImage}" width=50px></img></td>
        <td><button id="delete-${index}" type="button" class="delete btn btn-secondary">Delete</button></td>
    </tr>`
    })
    shoppingTable +=
        `<tr>
  <td><strong>Total Price<strong></td>
  <td id="total-price">${totalPrice.toFixed(2)}</td>
  </tr> 
    </tbody>
    </table>`
    return shoppingTable
}
 createEmptyShoppingSide=()=> {
    return `
    <section id="empty-box">
    <p>Sepetiniz Bos</p>
    <div><img src="https://www.libresensor.com/Content/Icons/icon-basket.png"></img></div>
    </section>  `
}

 createUI=(pList)=> {
    headerElement.innerHTML = createHeader();
    productElement.innerHTML = createProductList(pList);
}

createShoppingList=(event)=> {
    productList.filter(product => {
        if (event.target.id === product.productName) {
            shoppingList.push(product);
        }
    })
    return shoppingList
}

 deleteProduct=(event)=> {
    shoppingList.map((product, index) => {
        if (event.target.id === `delete-${index}`) {
            const productIndex = shoppingList.indexOf(product);
            shoppingList.splice(productIndex, 1);
            shoppingElement.innerHTML = showShoppingBox(shoppingList);
           
        }
    })
}


 addProduct=()=> {
    productElement.addEventListener("click", (event) => {
        if (event.target.className === "add btn btn-secondary"){
            createShoppingList(event)
        shoppingElement.innerHTML = showShoppingBox(shoppingList);
        }
    })
}

deleteProductEvent=()=> {
    shoppingElement.addEventListener("click", (event) => {
        if (event.target.className === "delete btn btn-secondary") {
            deleteProduct(event);
        }
    })
}

 start=()=> {
    createUI(productList);
    addProduct();
    deleteProductEvent();
}