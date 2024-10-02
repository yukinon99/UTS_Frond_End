let products = {
    data: [
      {
        productName: "Sony WR-300",
        category: "Gaming",
        price: 120,
        brand: "Sony",
        image: "images/Sony1.png",
      },
      {
        productName: "Sony23-9",
        category: "Casual",
        price: 60,
        brand: "HyperX",
        image: "images/Sony1.png",
      },
      {
        productName: "JBL",
        category: "Sports",
        price: 85,
        brand: "Bose",
        image: "images/Sony1.png",
      },
      {
        productName: "JBL",
        category: "Gaming",
        price: 150,
        brand: "Razer",
        image: "images/Sony1.png",
      },
      {
        productName: "Casual On-Ear Headphones",
        category: "Casual",
        price: 45,
        brand: "JBL",
        image: "images/Sony1.png",
      },
      {
        productName: "Sports Over-Ear Headphones",
        category: "Sports",
        price: 95,
        brand: "Beats",
        image: "images/Sony1.png",
      },
      {
        productName: "Wireless Gaming Headset",
        category: "Gaming",
        price: 200,
        brand: "SteelSeries",
        image: "images/Sony1.png",
      },
      {
        productName: "Casual Foldable Headphones",
        category: "Casual",
        price: 55,
        brand: "AKG",
        image: "images/Sony1.png",
      },
    ],
  };
  
  // Create product cards dynamically
  for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    
    // Image
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    
    // Product details
    let container = document.createElement("div");
    container.classList.add("container");
    
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
  
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    
    let brand = document.createElement("h6");
    brand.innerText = i.brand;
    container.appendChild(brand);
  
    card.appendChild(imgContainer);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  // Filter products based on dropdown selection
  function filterProducts() {
    let categoryValue = document.getElementById("category-filter").value;
    let budgetValue = document.getElementById("budget-filter").value;
    let brandValue = document.getElementById("brand-filter").value;
    
    let elements = document.querySelectorAll(".card");
  
    elements.forEach((element) => {
      let isCategoryMatch = (categoryValue === "all" || element.classList.contains(categoryValue));
      let price = parseInt(element.querySelector("h6").innerText.replace("$", ""));
      let isBudgetMatch = (budgetValue === "all" ||
        (budgetValue === "0-50" && price <= 50) ||
        (budgetValue === "51-100" && price > 50 && price <= 100) ||
        (budgetValue === "101-200" && price > 100 && price <= 200)
      );
      let brand = element.querySelectorAll("h6")[1].innerText;
      let isBrandMatch = (brandValue === "all" || brand === brandValue);
      
      if (isCategoryMatch && isBudgetMatch && isBrandMatch) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    });
  
    // Show or hide the "No results found" message
    let visibleCards = document.querySelectorAll(".card:not(.hide)");
    document.getElementById("no-results-message").style.display = visibleCards.length ? "none" : "block";
  }
  
  // Search products by name
  document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput)) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });

    
  
    // Show or hide the "No results found" message
    let visibleCards = document.querySelectorAll(".card:not(.hide)");
    document.getElementById("no-results-message").style.display = visibleCards.length ? "none" : "block";
  });
  
  // Event listeners for dropdown filters
  document.getElementById("category-filter").addEventListener("change", filterProducts);
  document.getElementById("budget-filter").addEventListener("change", filterProducts);
  document.getElementById("brand-filter").addEventListener("change", filterProducts);
  
  // Show all products on page load
  window.onload = () => {
    filterProducts(); // Display all products initially
  };
  