// 1. SELECT DOM ELEMENTS
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const recipesContainer = document.getElementById('recipesContainer');

// 2. FETCH RECIPES FROM API
async function getRecipes(query) {
    try {
        
        const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
        const data = await response.json();

        if (data.recipes) {
            displayRecipes(data.recipes);
        } else {
            recipesContainer.innerHTML = `<h4 class="text-center text-white w-100">No recipes found!</h4>`;
        }
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

// 3. DISPLAY RECIPES IN DOM
function displayRecipes(recipesList) {
    let cartona = '';

    recipesList.forEach(recipe => {
        cartona += `
            <div class="col-md-3 col-sm-6">
                <div class="recipe-card text-center text-white">
                    <img src="${recipe.image_url}" class="w-100 rounded mb-2" style="height: 140px; object-fit: cover;" alt="${recipe.title}">
                    <h6 class="fw-bold fs-6">${recipe.title}</h6>
                </div>
            </div>
        `;
    });

    recipesContainer.innerHTML = cartona;
}

// 4. EVENT LISTENERS
// Change Category from Dropdown
categorySelect.addEventListener('change', (e) => {
    getRecipes(e.target.value);
});

// Search on Enter Key
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getRecipes(searchInput.value.trim());
    }
});

// 5. INITIAL LOAD
getRecipes('carrot');