// points to wing file
$.ajax({
  type: "GET",
  url: "./assets/scripts/wings.json",
  dataType: "json"
})
  .then(response => {
    productArray = response;
    const wingSection = document.querySelector("#wing-section");
    wingSection.classList.add("row");
    productArray.forEach(product => {
      const productNumOfPieces = product.numOfPieces;
      const productType = product.typeOfItem;
      const productPrice = product.priceOfItem;
      const productDiv = document.createElement("div");
      productDiv.classList.add("col-md-2");
      wingSection.appendChild(productDiv);
      productDiv.innerHTML = `
      <h5><span>${productNumOfPieces}</span> <span>${productType}</span></h5>
      <h5>$${productPrice}</h5>
      `;
    });
  })
  .catch(err => console.log(err));
// points to notwing file
$.ajax({
  type: "GET",
  url: "./assets/scripts/notwings.json",
  dataType: "json"
})
  .then(response => {
    productArray = response;
    const notWingSection = document.querySelector("#notwing-section");
    notWingSection.classList.add("row");
    productArray.forEach(product => {
      const productNumOfPieces = product.numOfPieces;
      const productType = product.typeOfItem;
      const productPrice = product.priceOfItem;
      const productDiv = document.createElement("div");
      productDiv.classList.add("col-md-3");
      notWingSection.appendChild(productDiv);
      productDiv.innerHTML = `
      <h5><span>${productNumOfPieces}</span> <span>${productType}</span></h5>
      <h5>$ ${productPrice}</h5>`;
    });
  })
  .catch(err => console.log(err));
// points to sides file
$.ajax({
  type: "GET",
  url: "./assets/scripts/sides.json",
  dataType: "json"
})
  .then(response => {
    productArray = response;
    const sidesSection = document.querySelector("#sides-section");
    productArray.forEach(product => {
      const productType = product.typeOfItem;
      const regSize = product.regSize;
      const lgSize = product.lgSize;
      const famSize = product.famSize;
      const productDiv = document.createElement("div");
      sidesSection.appendChild(productDiv);
      productDiv.innerHTML = `
      <h5>${productType}:</h5>
      <h6><span>REG:</span> <span class="product-price">$${regSize}</span> <span>LG:</span> <span class="product-price">$${lgSize}</span> <span>FAM:</span> <span class="product-price">$${famSize}</span></h6>`;
    });
  })
  .catch(err => console.log(err));
// points to combo file
$.ajax({
  type: "GET",
  url: "./assets/scripts/combos.json",
  dataType: "json"
}).then(response => {
  productArray = response;
  const comboSection = document.querySelector("#combo-section");
  comboSection.classList.add("row");
  productArray.forEach(product => {
    const productNumOfPieces = product.numOfPieces;
    const productType = product.typeOfItem;
    const productPrice = product.priceOfItem;
    const productDiv = document.createElement("div");
    productDiv.classList.add("col-md-3");
    comboSection.appendChild(productDiv);
    productDiv.innerHTML = `
      <h5 class="combo-name"><span>${productNumOfPieces}</span> <span>${productType}</span></h5>
      <h5 class="combo-price">$${productPrice}</h5>`;
  });
});
// points to drink file
$.ajax({
  type: "GET",
  url: "./assets/scripts/drinks.json",
  dataType: "json"
})
  .then(response => {
    productArray = response;
    const drinksSection = document.querySelector("#drinks-section");
    productArray.forEach(product => {
      const productType = product.typeOfItem;
      const regSize = product.regSize;
      const jumboSize = product.jumboSize;
      const halfSize = product.halfSize;
      const gallonSize = product.gallonSize;
      const productDiv = document.createElement("div");
      drinksSection.appendChild(productDiv);
      productDiv.innerHTML = `
      <h5>${productType}:</h5>
      <h6><span>REG:</span> <span class="product-price">$${regSize}</span> <span>JUMBO:</span> <span class="product-price">$${jumboSize}</span> <span>HALF GALLON:</span> <span class="product-price">$${halfSize}</span>
      <span>GALLON:</span> <span class="product-price">$${gallonSize}</span></h6>`;
    });
  })
  .catch(err => console.log(err));
// points to deals file
$.ajax({
  type: "GET",
  url: "./assets/scripts/deals.json",
  dataType: "json"
})
  .then(response => {
    const today = new Date().getDay();
    function showDeal() {
      const day = today;
      const dayOfWeek = response[day].dayOfWeek;
      const dealType = response[day].dealType;
      const dealPrice = response[day].dealPrice;
      const dealOfDay = document.querySelector("#deals-div");
      dealOfDay.innerHTML = `<div class="col-md-6">
      <h5>${dayOfWeek} Deal Of The Day</h5>
      <h5>${dealType}</h5> <h5>${dealPrice}</h5>
      </div>`;
    }
    showDeal();
  })
  .catch(err => console.log(err));
