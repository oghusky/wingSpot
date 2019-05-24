// points to wing file
$.ajax({
  type: "GET",
  url: "./assets/scripts/wings.json",
  dataType: "json"
})
  .then(response => {
    productArray = response;
    productArray.forEach(product => {
      const wingSection = document.querySelector("#wing-section");
      const productImageUrl = product.productImage;
      const productNumOfPieces = product.numOfPieces;
      const productType = product.typeOfItem;
      const productPrice = product.priceOfItem;
      const productDiv = document.createElement("div");
      wingSection.classList.add("row");
      let productClassesToAdd = ["product-div"];
      productDiv.classList.add(...productClassesToAdd);
      wingSection.appendChild(productDiv);
      productDiv.innerHTML = `
      <div class="card-body">
      <h5 class="card-title"><span>${productNumOfPieces}</span> <span>${productType}</span></h5>
      <hr/>
      <h5 class="card-text product-price">$${productPrice}</h5>
      </div>`;
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
    productArray.forEach(product => {
      const notWingSection = document.querySelector("#notwing-section");
      const productImageUrl = product.productImage;
      const productNumOfPieces = product.numOfPieces;
      const productType = product.typeOfItem;
      const productPrice = product.priceOfItem;
      const productDiv = document.createElement("div");
      notWingSection.classList.add("row");
      let productClassesToAdd = ["product-div"];
      productDiv.classList.add(...productClassesToAdd);
      notWingSection.appendChild(productDiv);
      productDiv.innerHTML = `
      <div class="card-body">
      <h5 class="card-title"><span>${productNumOfPieces}</span> <span>${productType}</span></h5>
      <hr/>
      <h5 class="card-text product-price">$ ${productPrice}</h5>
      </div>`;
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
    productArray.forEach(product => {
      const sidesSection = document.querySelector("#sides-section");
      const productType = product.typeOfItem;
      const regSize = product.regSize;
      const lgSize = product.lgSize;
      const famSize = product.famSize;
      const productDiv = document.createElement("div");
      let productClassesToAdd = ["sides-div"];
      productDiv.classList.add(...productClassesToAdd);
      sidesSection.appendChild(productDiv);
      productDiv.innerHTML = `
      <h5><strong>${productType}:</strong></h5>
      <p><span><strong>REG:</strong></span> <span class="product-price">$${regSize}</span> <span><strong>LG:</strong></span> <span class="product-price">$${lgSize}</span> <span><strong>FAM:</strong></span> <span class="product-price">$${famSize}</span></p>`;
    });
  })
  .catch(err => console.log(err));
$.ajax({
  type: "GET",
  url: "./assets/scripts/combos.json",
  dataType: "json"
}).then(response => {
  productArray = response;
  productArray.forEach(product => {
    const comboSection = document.querySelector("#combo-section");
    const productImageUrl = product.productImage;
    const productNumOfPieces = product.numOfPieces;
    const productType = product.typeOfItem;
    const productPrice = product.priceOfItem;
    const productDiv = document.createElement("div");
    comboSection.classList.add("row");
    let productClassesToAdd = ["product-div"];
    productDiv.classList.add(...productClassesToAdd);
    comboSection.appendChild(productDiv);
    productDiv.innerHTML = `
      <div class="card-body mb-3">
      <h6 class="card-title"><span>${productNumOfPieces}</span> <span>${productType}</span></h6>
      <hr/><h6 class="card-text product-price">$${productPrice}</h6>
      </div>`;
  });
});
$.ajax({
  type: "GET",
  url: "./assets/scripts/drinks.json",
  dataType: "json"
})
  .then(response => {
    productArray = response;
    productArray.forEach(product => {
      const drinksSection = document.querySelector("#drinks-section");
      const productType = product.typeOfItem;
      const regSize = product.regSize;
      const jumboSize = product.jumboSize;
      const halfSize = product.halfSize;
      const gallonSize = product.gallonSize;
      const productDiv = document.createElement("div");
      let productClassesToAdd = ["drinks-div"];
      productDiv.classList.add(...productClassesToAdd);
      drinksSection.appendChild(productDiv);
      productDiv.innerHTML = `
      <h5><strong>${productType}:</strong></h5>
      <p><span><strong>REG:</strong></span> <span class="product-price">$${regSize}</span> <span><strong>JUMBO:</strong></span> <span class="product-price">$${jumboSize}</span> <span><strong>HALF GALLON:</strong></span> <span class="product-price">$${halfSize}</span>
      <span><strong>GALLON:</strong></span> <span class="product-price">$${gallonSize}</span></p>`;
    });
  })
  .catch(err => console.log(err));
