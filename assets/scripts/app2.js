
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
menu.wings.map(wing => {
  // wings section
  const wingSection = document.querySelector("#wing-section");
  wingSection.classList.add("row");
  const wingDiv = document.createElement("div");
  const classesToAdd = ["col-lg-2", "col-sm-3", "my-1", "mx-0"];
  wingDiv.classList.add(...classesToAdd);
  wingSection.appendChild(wingDiv);
  wingDiv.innerHTML = `
    <p class="mx-0 my-0 product-type"><span>${wing.numOfWings}</span> <span>${wing.typeOfWing}</span></p>
    <p class="mx-0 my-0 product-price">$${wing.priceOfWing}</p>
    `;
})
// more food section
menu.moreFood.map(moreFood => {
  // // notwing section
  const moreFoodSection = document.querySelector("#notwing-section");
  moreFoodSection.classList.add("row");
  const moreFoodDiv = document.createElement("div");
  const classesToAdd = ["col-md-3", "col-sm-4", "my-1"];
  moreFoodDiv.classList.add(...classesToAdd);
  moreFoodSection.appendChild(moreFoodDiv);
  moreFoodDiv.innerHTML = `
      <p class="mx-0 my-0 product-type"><span>${moreFood.numOfMoreFood}</span> <span>${moreFood.typeOfMoreFood}</span></p>
      <p class="mx-0 my-0 product-price">$ ${moreFood.priceOfMoreFood}</p>`;
})
// sides section
menu.sides.map(side => {
  // // sides section
  const sidesSection = document.querySelector("#sides-section");
  const productDiv = document.createElement("div");
  sidesSection.appendChild(productDiv);
  productDiv.innerHTML = `
      <p class="ml-0 my-0 product-type">${side.typeOfSide}:</p>
       <p class="ml-0 my-0 product-price"> <span>REG:</span>
        <span class="product-price mx-1">$${side.regSize}</span> 
        <span>LG:</span> <span class="product-price mx-1">$${side.lgSize}</span> 
        <span  style="${side.famSize === "" ? "display: none;" : "display:inline;"}">FAM:</span> 
        <span class="product-price mx-1" style="${side.famSize === "" ? "display: none;" : "display:inline;"}">$${side.famSize}</span>
      </p>`;
});
// combos section
menu.combos.map(combo => {
  // // combo section
  const comboSection = document.querySelector("#combo-section");
  comboSection.classList.add("row");
  const productDiv = document.createElement("div");
  const classesToAdd = ["col-md-3", "col-sm-6", "my-1"];
  productDiv.classList.add(...classesToAdd);
  comboSection.appendChild(productDiv);
  productDiv.innerHTML = `
      <p class="mx-0 my-0 product-type"><span>${combo.numOfCombo}</span> <span>${combo.typeOfCombo}</span></p>
      <p class="mx-0 my-0 product-price">$${combo.priceOfCombo}</p>`;
})
// drinks section
menu.drinks.map(drink => {
  // // drinks section
  const drinksSection = document.querySelector("#drinks-section");
  const productDiv = document.createElement("div");
  const classesToAdd = ["my-1"];
  productDiv.classList.add(...classesToAdd);
  drinksSection.appendChild(productDiv);
  productDiv.innerHTML = `
      <p class="mx-0 my-0 product-type">${drink.typeOfDrink}:</p>
      <p class="mx-0 my-0 product-price">
        <span>REG:</span>
        <span class="product-price">$${drink.regSize}</span> 
        <span style="${drink.jumboSize === "" ? "display: none;" : "display:inline;"}">JUMBO:</span>
        <span class="product-price" style="${drink.jumboSize === "" ? "display: none;" : "display:inline;"}">$${drink.jumboSize}</span> 
        <span style="${drink.halfSize === "" ? "display: none;" : "display:inline;"}">HALF GALLON:</span>
        <span class="product-price" style="${drink.halfSize === "" ? "display: none;" : "display:inline;"}>$${drink.halfSize}</span>
        <span style="${drink.gallonSize === "" ? "display: none;" : "display:inline;"}>GALLON:</span>
        <span class="product-price" style="${drink.gallonSize == "" ? "visibility: hidden" : "visibility: visible"}">$${drink.gallonSize}</span>
      </p>`;
})
// =================renders Order Form dynamically=============
// initially hide size choose select element
hideSizeSelect();
document.querySelector("#menu-selects").addEventListener("change", function () {
  hideOrShowSelect();
  const selectProduct = document.querySelector("#type-of-product");
  const selectCount = document.querySelector("#size-count");
  const selectSize = document.querySelector("#drink-size");
  const hiddenValue = document.querySelector("#cost");
  const itemID = document.querySelector("#item-id");
  selectProduct.addEventListener("change", function () {
    selectCount.innerHTML = `<option>...</option>`
  });
  selectCount.addEventListener("change", function () {
    selectSize.innerHTML = `<option>...</option>`
  });
  for (products in menu) {
    if (selectProduct.value === products && selectProduct.value !== "") {
      menu[`${products}`].filter(wing => {
        if (wing.hasOwnProperty("typeOfWing")) {
          let wingOption = document.createElement("option");
          wingOption.setAttribute("value", `${wing.priceOfWing}`);
          wingOption.textContent = `${wing.numOfWings} ${wing.typeOfWing} $${wing.priceOfWing}`;
          selectCount.appendChild(wingOption);
          hiddenValue.value = Number(selectCount.value);
        }
      });
      menu[`${products}`].filter(moreFood => {
        if (moreFood.hasOwnProperty("typeOfMoreFood")) {
          let moreFoodOption = document.createElement("option");
          moreFoodOption.setAttribute("value", `${moreFood.priceOfMoreFood}`);
          moreFoodOption.textContent = `${moreFood.numOfMoreFood} ${moreFood.typeOfMoreFood} $${moreFood.priceOfMoreFood}`;
          selectCount.appendChild(moreFoodOption);
          hiddenValue.value = Number(selectCount.value);
        }
      });
      menu[`${products}`].filter(combo => {
        if (combo.hasOwnProperty("typeOfCombo")) {
          let comboOption = document.createElement("option");
          comboOption.setAttribute("value", `${combo.priceOfCombo}`);
          comboOption.textContent = `${combo.numOfCombo} ${combo.typeOfCombo} $${combo.priceOfCombo}`;
          selectCount.appendChild(comboOption);
          hiddenValue.value = Number(selectCount.value);
        }
      });
      menu[`${products}`].filter(side => {
        if (side.hasOwnProperty("typeOfSide")) {
          let sideOption = document.createElement("option");
          sideOption.setAttribute("value", `${side.typeOfSide}`);
          sideOption.textContent = `${side.typeOfSide}`;
          selectCount.appendChild(sideOption);
          if (selectCount.value === side.typeOfSide) {
            let sideRegSizeOption = document.createElement("option");
            let sideLgSizeOption = document.createElement("option");
            let sideFamSizeOption = document.createElement("option");
            sideRegSizeOption.setAttribute("value", `${side.regSize}`);
            sideLgSizeOption.setAttribute("value", `${side.lgSize}`);
            sideFamSizeOption.setAttribute("value", `${side.famSize}`);
            sideRegSizeOption.setAttribute("style", `${side.regSize === "" ? "display:none;" : "display:block"}`);
            sideLgSizeOption.setAttribute("style", `${side.lgSize === "" ? "display:none;" : "display:block"}`);
            sideFamSizeOption.setAttribute("style", `${side.famSize === "" ? "display:none;" : "display:block"}`);
            sideRegSizeOption.innerHTML = `$<span class="cost-value">${side.regSize}</span> - Regular`;
            sideLgSizeOption.innerHTML = `$<span class="cost-value">${side.lgSize}</span> - Large`;
            sideFamSizeOption.innerHTML = `$<span class="cost-value">${side.famSize}</span> - Family Size`;
            let sizeOptionsToAppend = [sideRegSizeOption, sideLgSizeOption, sideFamSizeOption];
            selectSize.append(...sizeOptionsToAppend);
            hiddenValue.value = parseFloat(selectSize.value).toFixed(2);
          }
        }
      });
      menu[`${products}`].filter(drink => {
        if (drink.hasOwnProperty("typeOfDrink")) {
          let drinkOption = document.createElement("option");
          drinkOption.setAttribute("value", `${drink.typeOfDrink}`);
          drinkOption.textContent = `${drink.typeOfDrink}`;
          selectCount.appendChild(drinkOption);
          if (selectCount.value === drink.typeOfDrink) {
            let drinkRegSizeOption = document.createElement("option");
            let drinkJumboSizeOption = document.createElement("option");
            let drinkHalfGSizeOption = document.createElement("option");
            let drinkGallonSizeOption = document.createElement("option");
            drinkRegSizeOption.setAttribute("value", `${drink.regSize}`);
            drinkJumboSizeOption.setAttribute("value", `${drink.jumboSize}`);
            drinkHalfGSizeOption.setAttribute("value", `${drink.halfSize}`);
            drinkGallonSizeOption.setAttribute("value", `${drink.gallonSize}`);
            drinkRegSizeOption.setAttribute("style", `${drink.regSize === "" ? "display:none;" : "display:block"}`);
            drinkJumboSizeOption.setAttribute("style", `${drink.jumboSize === "" ? "display:none;" : "display:block"}`);
            drinkHalfGSizeOption.setAttribute("style", `${drink.halfSize === "" ? "display:none;" : "display:block"}`);
            drinkGallonSizeOption.setAttribute("style", `${drink.gallonSize === "" ? "display:none;" : "display:block"}`);
            drinkRegSizeOption.textContent = `$${drink.regSize} - Regular`;
            drinkJumboSizeOption.textContent = `$${drink.jumboSize} - Jumbo`;
            drinkHalfGSizeOption.textContent = `$${drink.halfSize} - Half Gallon`;
            drinkGallonSizeOption.textContent = `$${drink.gallonSize} - Gallon`;
            let drinkOptionsToAppend = [drinkRegSizeOption, drinkJumboSizeOption, drinkHalfGSizeOption, drinkGallonSizeOption]
            selectSize.append(...drinkOptionsToAppend);
            hiddenValue.value = parseFloat(selectSize.value).toFixed(2);
          }
        }
      });
    }
  }
});
// ============= show/hide size choose select ===============
function hideSizeSelect() {
  let chooseSize = document.querySelector("#drink-size");
  chooseSize.style.display = "none";
}
function showSizeSelect() {
  let chooseSize = document.querySelector("#drink-size");
  chooseSize.style.display = "block";
}
// ============== Add to order =====================

function OrderItem(orderItemID, numOfOrderItems, typeOfOrderItems, sizeOfOrderItems, costOfItem) {
  this.orderItemID = orderItemID;
  this.numOfOrderItems = numOfOrderItems;
  this.typeOfOrderItems = typeOfOrderItems;
  this.sizeOfOrderItems = sizeOfOrderItems;
  this.costOfItem = costOfItem;
}
document.querySelector("#add-to-order-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const selectProduct = document.querySelector("#type-of-product");
  const selectCount = $("#size-count option:selected").text();
  const selectSize = $("#drink-size option:selected").text();
  const costOfItem = document.querySelector("#cost");
  if (costOfItem.value !== "") {
    pushToOrder(order.length, selectProduct.value, selectCount, selectSize, Number(costOfItem.value));
  }
  clearOrderToAddToOrder();
  addItemToPage();
  console.log(order);
})
function pushToOrder(id, product, count, size, cost) {
  let orderItem = new OrderItem(id, product, count, size, cost);
  order.push(orderItem);
  let sum = 0;
  order.forEach(item => {
    return sum += item.costOfItem
  });
  document.querySelector("#total-cost").textContent = `${sum.toFixed(2)}`
}

function hideOrShowSelect() {
  const selectProduct = document.querySelector("#type-of-product");
  hideSizeSelect();
  if (selectProduct.value === "sides" || selectProduct.value === "drinks") {
    showSizeSelect();
  }
}
function clearOrderToAddToOrder() {
  const confirmOrder = document.querySelector("#confirm-order");
  confirmOrder.innerHTML = " ";
}
function addItemToPage() {
  const confirmOrder = document.querySelector("#confirm-order");
  for (i = 0; i < order.length; i++) {
    let itemToShow = document.createElement("div");
    itemToShow.innerHTML = `
      <input type="hidden" value="${order[i].orderItemID}">
      <p class="ordered-items"><span class="pl-3">${order[i].typeOfOrderItems}</span>
        <span style=${order[i].sizeOfOrderItems === "..." ? "display:none" : "display:block"}>${order[i].sizeOfOrderItems}</span>
        <span class="float-right text-danger pr-3 deleted" value="${order[i].orderItemID}"><i class="fas fa-times"></i></span>
        </p> 
    `;
    confirmOrder.appendChild(itemToShow);
  }
}

// delete particular item from order
$(document).on("click", ".deleted", function () {
  let getValueOfID = parseFloat(this.getAttribute("value"));
  if (order.length !== 0) {
    let sum = 0;
    console.log(getValueOfID);
    order.splice(getValueOfID, 1);
    order.map(item => {
      sum += item.costOfItem
    });
    clearOrderToAddToOrder();
    addItemToPage();
    document.querySelector("#total-cost").textContent = `${sum.toFixed(2)}`
  }
});
