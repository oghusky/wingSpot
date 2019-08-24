window.addEventListener("scroll", function () {
    // adds paralax effect to jumbotron bg
    const pageTitle = document.querySelector(".jumbotron");
    let offset = window.pageYOffset;
    pageTitle.style.backgroundPositionY = offset * 0.4 + "px";
});
// close navbar after link click
$(".navbar-nav>li>a, .navbar-brand").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});
//================renders menu text on page=====================
// shows daily deals
function showDeal() {
    const today = new Date().getDay();
    const day = today;
    const dealType = menu.deals[day].dealType;
    const dealPrice = menu.deals[day].dealPrice;
    const dealOfDay = document.querySelector("#deals-div");
    dealOfDay.innerHTML = `
      <h5 class="my-0">Deal of the Day</h5>
      <h5 class="my-0">${dealType}</h5> <h5>$${dealPrice}</h5>
      `;
}

showDeal();
// map through each section and display text
// wings section
menu.wings.map(product => {
    // wings section
    const wingSection = document.querySelector("#wing-section");
    wingSection.classList.add("row");
    const productNumOfPieces = product.numOfPieces;
    const productType = product.typeOfItem;
    const productPrice = product.priceOfItem;
    const productDiv = document.createElement("div");
    const classesToAdd = ["col-lg-2", "col-sm-3", "my-1", "mx-0"];
    productDiv.classList.add(...classesToAdd);
    wingSection.appendChild(productDiv);
    productDiv.innerHTML = `
    <p class="mx-0 my-0 product-type"><span>${productNumOfPieces}</span> <span>${productType}</span></p>
    <p class="mx-0 my-0 product-price">$${productPrice}</p>
    `;
})
// more food section
menu.moreFood.map(product => {
    // // notwing section
    const notWingSection = document.querySelector("#notwing-section");
    notWingSection.classList.add("row");
    const productNumOfPieces = product.numOfPieces;
    const productType = product.typeOfItem;
    const productPrice = product.priceOfItem;
    const productDiv = document.createElement("div");
    const classesToAdd = ["col-md-3", "col-sm-4", "my-1"];
    productDiv.classList.add(...classesToAdd);
    notWingSection.appendChild(productDiv);
    productDiv.innerHTML = `
      <p class="mx-0 my-0 product-type"><span>${productNumOfPieces}</span> <span>${productType}</span></p>
      <p class="mx-0 my-0 product-price">$ ${productPrice}</p>`;
});
// sides section
menu.sides.map(product => {
    // // sides section
    const sidesSection = document.querySelector("#sides-section");
    const productType = product.typeOfItem;
    const regSize = product.regSize;
    const lgSize = product.lgSize;
    const famSize = product.famSize;
    const productDiv = document.createElement("div");
    sidesSection.appendChild(productDiv);
    productDiv.innerHTML = `
      <p class="ml-0 my-0 product-type">${productType}:</p>
       <p class="ml-0 my-0 product-price"> <span>REG:</span>
        <span class="product-price mx-1">$${regSize}</span> 
        <span>LG:</span> <span class="product-price mx-1">$${lgSize}</span> 
        <span  style="${famSize === "" ? "display: none;" : "display:inline;"}">FAM:</span> 
        <span class="product-price mx-1" style="${famSize === "" ? "display: none;" : "display:inline;"}">$${famSize}</span>
      </p>`;
});
// combos section
menu.combos.map(product => {
    // // combo section
    const comboSection = document.querySelector("#combo-section");
    comboSection.classList.add("row");
    const productNumOfPieces = product.numOfPieces;
    const productType = product.typeOfItem;
    const productPrice = product.priceOfItem;
    const productDiv = document.createElement("div");
    const classesToAdd = ["col-md-3", "col-sm-6", "my-1"];
    productDiv.classList.add(...classesToAdd);
    comboSection.appendChild(productDiv);
    productDiv.innerHTML = `
      <p class="mx-0 my-0 product-type"><span>${productNumOfPieces}</span> <span>${productType}</span></p>
      <p class="mx-0 my-0 product-price">$${productPrice}</p>`;
});
// drinks section
menu.drinks.map(product => {
    // // drinks section
    const drinksSection = document.querySelector("#drinks-section");
    const productType = product.typeOfItem;
    const regSize = product.regSize;
    const jumboSize = product.jumboSize;
    const halfSize = product.halfSize;
    const gallonSize = product.gallonSize;
    const productDiv = document.createElement("div");
    const classesToAdd = ["my-1"];
    productDiv.classList.add(...classesToAdd);
    drinksSection.appendChild(productDiv);
    productDiv.innerHTML = `
      <p class="mx-0 my-0 product-type">${productType}:</p>
      <p class="mx-0 my-0 product-price">
        <span>REG:</span>
        <span class="product-price">$${regSize}</span> 
        <span style="${jumboSize === "" ? "display: none;" : "display:inline;"}">JUMBO:</span>
        <span class="product-price" style="${jumboSize === "" ? "display: none;" : "display:inline;"}">$${jumboSize}</span> 
        <span style="${halfSize === "" ? "display: none;" : "display:inline;"}">HALF GALLON:</span>
        <span class="product-price" style="${halfSize === "" ? "display: none;" : "display:inline;"}> $${halfSize}</span>
        <span style="${gallonSize === "" ? "display: none;" : "display:inline;"}>GALLON:</span>
        <span class="product-price" style="${gallonSize === "" ? "visibility: hidden" : "visibility: visible"}">$${gallonSize}</span>
      </p>`;
})
// =================renders Order Form dynamically=============
document.querySelector("#menu-selects").addEventListener("change", function () {
    // first select. hard coded in html
    const chooseType = document.querySelector("#type-of-product");
    if (chooseType.value === "--Start your order here--") {
        let chooseCount = document.querySelector("#size-count");
        chooseCount.innerHTML = "<option>...</option>";
    }
    Object.keys(menu).map(product => {
        let showCount = menu[`${product}`].map(item => {
            return item.numOfPieces;
        });
        let showType = menu[`${product}`].map(item => {
            return item.typeOfItem;
        });
        let showPrice = menu[`${product}`].map(item => {
            return item.priceOfItem;
        });
        if (chooseType.value === `${product}`) {
            showCount.map((num, index) => {
                // second select will change dynamically
                let chooseCount = document.querySelector("#size-count");
                let option = document.createElement("option");
                option.setAttribute("value", num);
                option.setAttribute("style", `${num === undefined ? "display:none;" : "display:block;"}`);
                option.textContent = `${num} - ${showType[index]} - $${showPrice[index]}`;
                chooseCount.appendChild(option);
            });
            if (chooseType.value === "sides") {
                let newSelect = document.createElement("select");
                let classesToAdd = ["custom-select", "mb-3"];
                newSelect.classList.add(...classesToAdd);
                // newSelect.innerHTML = `<option>...</option>`;
                document.querySelector("#menu-selects").appendChild(newSelect);
                showType.map((nameOfProduct, index, arrOfProducts) => {
                    let chooseCount = document.querySelector("#size-count");
                    console.log(nameOfProduct);
                    console.log(index);
                    console.log(arrOfProducts);
                    let sideOptions = document.createElement("option");
                    sideOptions.setAttribute("value", nameOfProduct);
                    sideOptions.textContent = `${nameOfProduct}`;
                    chooseCount.appendChild(sideOptions);
                })
            }
        }
    })
});
