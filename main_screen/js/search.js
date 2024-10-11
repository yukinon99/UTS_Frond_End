let products = {
    data: [
        { productName: "Sony WR-300", category: "Gaming", price: 120, brand: "Sony", image: "../images/Sony1.png" },
        { productName: "Sony23-9", category: "Casual", price: 60, brand: "HyperX", image: "../images/Sony1.png" },
        { productName: "Bose 787", category: "Sports", price: 85, brand: "Bose", image: "../images/Sony1.png" },
        { productName: "Razer Black Series", category: "Gaming", price: 150, brand: "Razer", image: "../images/Sony1.png" },
        { productName: "JBL Madbass", category: "Casual", price: 45, brand: "JBL", image: "../images/Sony1.png" },
        { productName: "Sports Over-Ear Headphones", category: "Sports", price: 95, brand: "Beats", image: "../images/Sony1.png" },
        { productName: "Wireless Gaming Headset", category: "Gaming", price: 200, brand: "SteelSeries", image: "../images/Sony1.png" },
        { productName: "Casual Foldable Headphones", category: "Casual", price: 55, brand: "AKG", image: "../images/Sony1.png" },
    ],
};

// Function to display products with brand logos
function displayProducts(productList) {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = ""; // Clear previous results

    productList.forEach(product => {
        const card = document.createElement("div");
        card.className = "card product";
        card.innerHTML = `
            <div class="image-container">
                <img src="${product.image}" alt="${product.productName}">
                <div class="hidden-text">More info about ${product.productName}</div>
            </div>
            <div class="container">
                <h3>${product.productName}</h3>
                <p>Price: $${product.price}</p>
                <p>Brand: ${product.brand}</p>
                <div class="brand-logo">
                    <img src="../images/logos/${product.brand.toLowerCase()}.png" alt="${product.brand} logo">
                </div>
            </div>
        `;
        productsContainer.appendChild(card);
    });
}

// Function to filter products based on dropdown values
function filterProducts() {
    const categoryValue = document.getElementById("category-filter").value.toLowerCase();
    const budgetValue = document.getElementById("budget-filter").value;
    const brandValue = document.getElementById("brand-filter").value.toLowerCase();

    const filteredProducts = products.data.filter(product => {
        const categoryMatch = (categoryValue === "all" || product.category.toLowerCase() === categoryValue);
        const brandMatch = (brandValue === "all" || product.brand.toLowerCase() === brandValue);
        const budgetMatch = (budgetValue === "all" ||
            (budgetValue === "0-50" && product.price <= 50) ||
            (budgetValue === "51-100" && product.price > 50 && product.price <= 100) ||
            (budgetValue === "101-200" && product.price > 100 && product.price <= 200));

        return categoryMatch && brandMatch && budgetMatch;
    });

    // Display filtered products or "No Results" message
    if (filteredProducts.length > 0) {
        displayProducts(filteredProducts);
        document.getElementById("no-results-message").classList.add("hide");
    } else {
        document.getElementById("no-results-message").classList.remove("hide");
        document.getElementById("products").innerHTML = ""; // Clear previous results
    }
}

// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Initialize and filter products based on URL parameters
window.onload = function() {
    const brandFromUrl = getUrlParameter("brand"); // Get brand from URL
    if (brandFromUrl) {
        const filteredByBrand = products.data.filter(product => product.brand.toLowerCase() === brandFromUrl.toLowerCase());
        displayProducts(filteredByBrand); // Display products for the specified brand
    } else {
        displayProducts(products.data); // Display all products if no brand specified
    }

    // Event listeners for dropdown filters
    document.getElementById("category-filter").addEventListener("change", filterProducts);
    document.getElementById("budget-filter").addEventListener("change", filterProducts);
    document.getElementById("brand-filter").addEventListener("change", filterProducts);
};
