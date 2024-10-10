let products = {
  data: [
      {
          productName: "Sony WR-300",
          category: "Gaming",
          price: 120,
          brand: "Sony",
          image: "../images/Sony1.png",
      },
      {
          productName: "Sony23-9",
          category: "Casual",
          price: 60,
          brand: "HyperX",
          image: "../images/Sony1.png",
      },
      {
          productName: "Bose 787",
          category: "Sports",
          price: 85,
          brand: "Bose",
          image: "../images/Sony1.png",
      },
      {
          productName: "Razer Black Series",
          category: "Gaming",
          price: 150,
          brand: "Razer",
          image: "../images/Sony1.png",
      },
      {
          productName: "JBL Madbass",
          category: "Casual",
          price: 45,
          brand: "JBL",
          image: "../images/Sony1.png",
      },
      {
          productName: "Sports Over-Ear Headphones",
          category: "Sports",
          price: 95,
          brand: "Beats",
          image: "../images/Sony1.png",
      },
      {
          productName: "Wireless Gaming Headset",
          category: "Gaming",
          price: 200,
          brand: "SteelSeries",
          image: "../images/Sony1.png",
      },
      {
          productName: "Casual Foldable Headphones",
          category: "Casual",
          price: 55,
          brand: "AKG",
          image: "../images/Sony1.png",
      },
  ],
};

// Create product cards dynamically
function displayProducts(productList) {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = ""; // Clear previous results

  productList.forEach((product) => {
      const card = document.createElement("div");
      card.className = "card product"; // Adding 'product' class for hover effects
      card.innerHTML = `
          <div class="image-container">
              <img src="${product.image}" alt="${product.productName}">
              <div class="hidden-text">More info about ${product.productName}</div> <!-- Hidden text for reveal effect -->
          </div>
          <div class="container">
              <h3>${product.productName}</h3>
              <p>Price: $${product.price}</p>
              <p>Brand: ${product.brand}</p>
              <button class="view-details" data-product='${JSON.stringify(product)}'>View Details</button>
              <div class="brand-logo">
                  <img src="../images/logos/${product.brand.toLowerCase()}.png" alt="${product.brand} logo">
              </div>
          </div>
      `;
      productsContainer.appendChild(card);
  });

  // Add event listeners to "View Details" buttons
  document.querySelectorAll('.view-details').forEach(button => {
      button.addEventListener('click', openModal);
  });
}

// Filter products based on dropdown selection
function filterProducts() {
  let categoryValue = document.getElementById("category-filter").value;
  let budgetValue = document.getElementById("budget-filter").value;
  let brandValue = document.getElementById("brand-filter").value;

  let filteredProducts = products.data.filter(product => {
      return (categoryValue === "all" || product.category === categoryValue) &&
          (budgetValue === "all" || 
           (budgetValue === "0-50" && product.price <= 50) ||
           (budgetValue === "51-100" && product.price > 50 && product.price <= 100) ||
           (budgetValue === "101-200" && product.price > 100 && product.price <= 200)) &&
          (brandValue === "all" || product.brand === brandValue);
  });

  // Display filtered products
  if (filteredProducts.length > 0) {
      displayProducts(filteredProducts);
      document.getElementById("no-results-message").classList.add("hide");
  } else {
      document.getElementById("no-results-message").classList.remove("hide");
      document.getElementById("products").innerHTML = ""; // Clear previous results
  }
}

// Event listeners for dropdown filters
document.getElementById("category-filter").addEventListener("change", filterProducts);
document.getElementById("budget-filter").addEventListener("change", filterProducts);
document.getElementById("brand-filter").addEventListener("change", filterProducts);

// Initial display of all products
displayProducts(products.data);
