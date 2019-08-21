
// adds paralax effect to jumbotron bg
const pageTitle = document.querySelector(".jumbotron");
const pageBreakImg = document.querySelector(".page-break-img");
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    pageTitle.style.backgroundPositionY = offset * 0.4 + "px";
});
// close navbar after link click
$(".navbar-nav>li>a, .navbar-brand").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});
//================shows menu text on page=====================
// wings section
const wingSection = document.querySelector("#wing-section");
wingSection.classList.add("row");
menu.wings.forEach(product => {
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
});
// notwing section
const notWingSection = document.querySelector("#notwing-section");
notWingSection.classList.add("row");
menu.moreFood.forEach(product => {
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
const sidesSection = document.querySelector("#sides-section");
menu.sides.forEach(product => {
    const productType = product.typeOfItem;
    const regSize = product.regSize;
    const lgSize = product.lgSize;
    const famSize = product.famSize;
    const productDiv = document.createElement("div");
    const classesToAdd = ["my-1"];
    productDiv.classList.add(...classesToAdd);
    sidesSection.appendChild(productDiv);
    productDiv.innerHTML = `
      <p class="mx-0 my-0 product-type">${productType}:</p>
      <p class="mx-0 my-0 product-price"><span>REG:</span> <span class="product-price">$${regSize}</span> <span>LG:</span> <span class="product-price">$${lgSize}</span> <span>FAM:</span> <span class="product-price">$${famSize}</span></p>`;
});
// combo section
const comboSection = document.querySelector("#combo-section");
comboSection.classList.add("row");
menu.combos.forEach(product => {
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
const drinksSection = document.querySelector("#drinks-section");
menu.drinks.forEach(product => {
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
      <p class="mx-0 my-0 product-price"><span>REG:</span> <span class="product-price">$${regSize}</span> <span>JUMBO:</span> <span class="product-price">$${jumboSize}</span> <span>HALF GALLON:</span> <span class="product-price">$${halfSize}</span>
      <span>GALLON:</span> <span class="product-price">$${gallonSize}</span></p>`;
});

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
// selects and options in order form
const sizeCountDiv = document.querySelector("#size-count");
const menuSelects = document.querySelector("#menu-selects");
$("#type-of-product").on("change", function () {
    let selectValue = $(this).val();
    sizeCountDiv.innerHTML = `<option selected>...</option>`;

    if (selectValue === "wings") {
        menu.wings.forEach(wing => {
            const option = document.createElement("option");
            option.textContent = `${wing.numOfPieces} ${wing.typeOfItem}`;
            option.setAttribute("value", `${wing.numOfPieces} ${wing.typeOfItem}`);
            option.classList.add("count-option");
            sizeCountDiv.appendChild(option);
        })
    }
    if (selectValue === "more-than-wings") {
        menu.moreFood.forEach(food => {
            const option = document.createElement("option");
            option.textContent = `${food.numOfPieces} ${food.typeOfItem}`;
            option.setAttribute("value", `${food.numOfPieces} ${food.typeOfItem}`);
            option.classList.add("count-option");
            sizeCountDiv.appendChild(option);
        })
    }
    if (selectValue === "combos") {
        menu.combos.forEach(combo => {
            const option = document.createElement("option");
            option.textContent = `${combo.numOfPieces} ${combo.typeOfItem}`;
            option.setAttribute("value", `${combo.numOfPieces} ${combo.typeOfItem}`);
            option.classList.add("count-option");
            sizeCountDiv.appendChild(option);
        })
    }
    if (selectValue === "drinks-and-desserts") {
        menu.drinks.forEach(drink => {
            const option = document.createElement("option");
            option.textContent = `${drink.typeOfItem}`;
            option.setAttribute("value", `${drink.typeOfItem}`);
            option.classList.add("count-option");
            sizeCountDiv.appendChild(option);
        })
    }
    if (selectValue === "sides") {
        menu.sides.forEach(side => {
            const option = document.createElement("option");
            option.textContent = `${side.typeOfItem}`;
            option.setAttribute("value", `${side.typeOfItem}`);
            option.classList.add("count-option");
            sizeCountDiv.appendChild(option);
        })
    }
})
// checks value of size-count select and makes dynamic changes
$("#size-count").on("change", function () {
    let selectValue = $(this).val();
    if (selectValue === "Tea/Lemonade") {
        const newSelect = document.createElement("select");
        newSelect.innerHTML = "<option>...</option>";
        let classesToAdd = ["custom-select", "mt-3"];
        newSelect.classList.add(...classesToAdd);
        menuSelects.appendChild(newSelect);
        menu.drinks.map(drink => {
            if (drink.hasOwnProperty("typeOfItem") && Object.values(drink).indexOf("Tea/Lemonade") > -1) {
                newSelect.innerHTML = `
                    <option>$${drink.regSize} - Reg Size</option>
                    <option>$${drink.jumboSize} - Jumbo Size</option>
                    <option>$${drink.halfSize} - Half Gallon</option>
                    <option>$${drink.gallonSize} - Gallon</option>
                `;
            }
        })
    }
})