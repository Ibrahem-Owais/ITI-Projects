import { nanoid } from 'nanoid';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";

function RecipeContainer({ recipe }) {
    return (
        <div className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm border-0">
                <img
                    src={recipe.image_url}
                    alt={recipe.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                    <h5 className="card-title text-truncate">{recipe.title}</h5>
                    <p className="card-text text-muted small">{recipe.publisher}</p>
                    <span className="badge bg-dark">ID: {recipe.customId}</span>
                </div>
            </div>
        </div>
    );
}

export default function Pizza() {
    const [recipesArray, setRecipesArray] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPizza("pizza");
    }, []);

    async function getPizza(searchTerm = "pizza") {
        try {
            let { data } = await axios.get(
                `https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`
            );

            const recipesWithNanoid = data.data.recipes.map((recipe) => ({
                ...recipe,
                customId: nanoid(6)
            }));

            console.log(recipesWithNanoid);
            setRecipesArray(recipesWithNanoid);
            setLoading(false);
        } catch (error) {
            console.error(`Error: ${error}`);
            setLoading(false);
        }
    }

    return (
        <div className="container py-4">
            <div className="row">
                {!loading ? (
                    recipesArray.length > 0 ? (
                        recipesArray.map((recipe) => (
                            <RecipeContainer key={recipe.customId} recipe={recipe} />
                        ))
                    ) : (
                        <h3 className="text-center">No recipes found</h3>
                    )
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
}