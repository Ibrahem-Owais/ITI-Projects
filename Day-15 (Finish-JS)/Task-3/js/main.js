const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const productCategory = document.getElementById('productCategory');
const productDescription = document.getElementById('productDescription');
const mainBtn = document.getElementById('mainBtn');
const searchInput = document.getElementById('searchInput');


let productsContainer = JSON.parse(localStorage.getItem('productsList')) || [];
let tmpIndex; // Stores index when updating
let mode = 'create'; // Mode switcher: 'create' or 'update'

// DISPLAY PRODUCTS IN CONSOLE
displayProducts(productsContainer);

// ADD PRODUCT FUNCTION
mainBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Validation IF DATA COMPLET OR NO
    if (productName.value.trim() === '' || productPrice.value.trim() === '') {
        alert('Please fill in Name and Price at least!');
        return;
    }

    const product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        description: productDescription.value,
    };

    if (mode === 'create') {
        productsContainer.push(product);
        console.log('Task Added:', product);
    } else {
        productsContainer[tmpIndex] = product;
        mode = 'create';
        mainBtn.textContent = 'Add Product';
        mainBtn.classList.replace('btn-warning', 'btn-primary');
        console.log('Task Updated at index:', tmpIndex);
    }

    localStorage.setItem('productsList', JSON.stringify(productsContainer));
    displayProducts(productsContainer);
    clearForm();
});

// CLEAR FORM INPUTS
function clearForm() {
    productName.value = '';
    productPrice.value = '';
    productCategory.value = '';
    productDescription.value = '';
}

// DISPLAY PRODUCTS IN CONSOLE
function displayProducts(list) {
    console.clear();
    console.log('Current Products List in LocalStorage:');
    console.table(list); // TO DISPLAY THE PRODUCTS IN TABLE VIEW
}

function setFormForUpdate(index) {
    if (index >= 0 && index < productsContainer.length) {
        tmpIndex = index;
        mode = 'update';

        productName.value = productsContainer[index].name;
        productPrice.value = productsContainer[index].price;
        productCategory.value = productsContainer[index].category;
        productDescription.value = productsContainer[index].description;

        mainBtn.textContent = 'Update Product';
        mainBtn.classList.replace('btn-primary', 'btn-warning');
        console.log('Edit mode activated for index:', index);
    }
}

// SEARCH PRODUCTS
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filteredProducts = productsContainer.filter(prod =>
        prod.name.toLowerCase().includes(term)
    );
    console.log(`Search Results for "${term}":`);
    console.table(filteredProducts);
});