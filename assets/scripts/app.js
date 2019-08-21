

// ============= OLD CODE ====================


//points to wing file
$.ajax({
	type: "GET",
	url: "./assets/scripts/wings.json",
	dataType: "json",
})
	.then(response => {
		productArray = response;
		const wingSection = document.querySelector("#wing-section");
		wingSection.classList.add("row");
		// 	productArray.forEach(product => {
		// 		const productNumOfPieces = product.numOfPieces;
		// 		const productType = product.typeOfItem;
		// 		const productPrice = product.priceOfItem;
		// 		const productDiv = document.createElement("div");
		// 		const classesToAdd = ["col-lg-2", "col-sm-3", "my-1", "mx-0"];
		// 		productDiv.classList.add(...classesToAdd);
		// 		wingSection.appendChild(productDiv);
		// 		productDiv.innerHTML = `
		//   <p class="mx-0 my-0 product-type"><span>${productNumOfPieces}</span> <span>${productType}</span></p>
		//   <p class="mx-0 my-0 product-price">$${productPrice}</p>
		//   `;
		// 	});
	})
	.catch(err => console.log(err));
// points to notwing file
$.ajax({
	type: "GET",
	url: "./assets/scripts/notwings.json",
	dataType: "json",
})
	.then(response => {
		productArray = response;
		// 	const notWingSection = document.querySelector("#notwing-section");
		// 	notWingSection.classList.add("row");
		// 	productArray.forEach(product => {
		// 		const productNumOfPieces = product.numOfPieces;
		// 		const productType = product.typeOfItem;
		// 		const productPrice = product.priceOfItem;
		// 		const productDiv = document.createElement("div");
		// 		const classesToAdd = ["col-md-3", "col-sm-4", "my-1"];
		// 		productDiv.classList.add(...classesToAdd);
		// 		notWingSection.appendChild(productDiv);
		// 		productDiv.innerHTML = `
		//   <p class="mx-0 my-0 product-type"><span>${productNumOfPieces}</span> <span>${productType}</span></p>
		//   <p class="mx-0 my-0 product-price">$ ${productPrice}</p>`;
		// 	});
	})
	.catch(err => console.log(err));
// points to sides file
$.ajax({
	type: "GET",
	url: "./assets/scripts/sides.json",
	dataType: "json",
})
	.then(response => {
		// 	productArray = response;
		// 	const sidesSection = document.querySelector("#sides-section");
		// 	productArray.forEach(product => {
		// 		const productType = product.typeOfItem;
		// 		const regSize = product.regSize;
		// 		const lgSize = product.lgSize;
		// 		const famSize = product.famSize;
		// 		const productDiv = document.createElement("div");
		// 		const classesToAdd = ["my-1"];
		// 		productDiv.classList.add(...classesToAdd);
		// 		sidesSection.appendChild(productDiv);
		// 		productDiv.innerHTML = `
		//   <p class="mx-0 my-0 product-type">${productType}:</p>
		//   <p class="mx-0 my-0 product-price"><span>REG:</span> <span class="product-price">$${regSize}</span> <span>LG:</span> <span class="product-price">$${lgSize}</span> <span>FAM:</span> <span class="product-price">$${famSize}</span></p>`;
		// 	});
	})
	.catch(err => console.log(err));
// points to combo file
$.ajax({
	type: "GET",
	url: "./assets/scripts/combos.json",
	dataType: "json",
}).then(response => {
	productArray = response;
	// const comboSection = document.querySelector("#combo-section");
	// comboSection.classList.add("row");
	// productArray.forEach(product => {
	// 	const productNumOfPieces = product.numOfPieces;
	// 	const productType = product.typeOfItem;
	// 	const productPrice = product.priceOfItem;
	// 	const productDiv = document.createElement("div");
	// 	const classesToAdd = ["col-md-3", "col-sm-6", "my-1"];
	// 	productDiv.classList.add(...classesToAdd);
	// 	comboSection.appendChild(productDiv);
	// 	productDiv.innerHTML = `
	//   <p class="mx-0 my-0 product-type"><span>${productNumOfPieces}</span> <span>${productType}</span></p>
	//   <p class="mx-0 my-0 product-price">$${productPrice}</p>`;
	// });
});
// points to drink file
$.ajax({
	type: "GET",
	url: "./assets/scripts/drinks.json",
	dataType: "json",
})
	.then(response => {
		productArray = response;
		// 	const drinksSection = document.querySelector("#drinks-section");
		// 	productArray.forEach(product => {
		// 		const productType = product.typeOfItem;
		// 		const regSize = product.regSize;
		// 		const jumboSize = product.jumboSize;
		// 		const halfSize = product.halfSize;
		// 		const gallonSize = product.gallonSize;
		// 		const productDiv = document.createElement("div");
		// 		const classesToAdd = ["my-1"];
		// 		productDiv.classList.add(...classesToAdd);
		// 		drinksSection.appendChild(productDiv);
		// 		productDiv.innerHTML = `
		//   <p class="mx-0 my-0 product-type">${productType}:</p>
		//   <p class="mx-0 my-0 product-price"><span>REG:</span> <span class="product-price">$${regSize}</span> <span>JUMBO:</span> <span class="product-price">$${jumboSize}</span> <span>HALF GALLON:</span> <span class="product-price">$${halfSize}</span>
		//   <span>GALLON:</span> <span class="product-price">$${gallonSize}</span></p>`;
		// 	});
	})
	.catch(err => console.log(err));
// points to deals file
$.ajax({
	type: "GET",
	url: "./assets/scripts/deals.json",
	dataType: "json",
})
	.then(response => {
		// 	const today = new Date().getDay();
		// 	function showDeal() {
		// 		const day = today;
		// 		const dealType = response[day].dealType;
		// 		const dealPrice = response[day].dealPrice;
		// 		const dealOfDay = document.querySelector("#deals-div");
		// 		dealOfDay.innerHTML = `
		//   <h5 class="my-0">Deal of the Day</h5>
		//   <h5 class="my-0">${dealType}</h5> <h5>$${dealPrice}</h5>
		//   `;
		// 	}
		// 	showDeal();
	})
	.catch(err => console.log(err));

//parallax effect on jumbotron
// const pageTitle = document.querySelector(".jumbotron");
// const pageBreakImg = document.querySelector(".page-break-img");
// window.addEventListener("scroll", function () {
// 	let offset = window.pageYOffset;
// 	pageTitle.style.backgroundPositionY = offset * 0.4 + "px";
// });
// // close navbar after link click
// $(".navbar-nav>li>a, .navbar-brand").on("click", function () {
// 	$(".navbar-collapse").collapse("hide");
// });
