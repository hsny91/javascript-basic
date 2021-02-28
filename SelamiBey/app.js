const mainElement = document.querySelector("#app");
let currentCustomer;
showStartPage();
enterTheSystem();
addCustomerHandler();


mainElement.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.className === "customer-list-name") {
        currentCustomer = event.target.id
        showVictimPage();
    }
})