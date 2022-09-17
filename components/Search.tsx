import React, {useEffect} from "react";
import styles from "../styles/Search.module.css";

// @ts-ignore
export default function Search({recipe}) {
		const recipeTitle = recipe.map((item: any) => {
			return item.title;
		});
	
		const recipeTags = recipe.map((item: any) => {
			return item.tagsCollection;
		});

		const recipeIngredients = recipe.map((item: any) => {
			return item.ingredients;
		});

	useEffect(() => {
		// @ts-ignore
		let searchBar: HTMLInputElement = document.querySelector("#searchbar");

		searchBar.addEventListener("keyup", (event: KeyboardEvent) => {
			const el = event.target as HTMLInputElement;

			const titleResult: never[] = [];
			const tagsResult: never[] = [];
			const ingredientsResult: never[] = [];

			recipeTitle.map((item: any) => {
				setTimeout(() => {
					if (item.includes(el.value)) {
						console.log(item);
						// `item` cannot be used to be pushed into the array, something to do with types
						//titleResult.push(item);
					} 
				}, 3000);
			});
			console.log("titleResult",titleResult);

			/* recipeTags.map((item: any) => {
				setTimeout(() => {
					if (item.items.includes(el.value)) {
						item.push(tagsResult);
					}
				}, 5000);
			}); */

			/* recipeIngredients.map((item: any) => {
				setTimeout(() => {
					if (item.includes(el.value)) {
						item.push(ingredientsResult);
					}
				}, 5000);
			}); */

		
		});
	});

	return (
		<>
			<div className={styles.search}>
				<input type="text" className={styles.search__input} placeholder="Suche nach einem Rezept" id="searchbar" />
			</div>
		</>
	)
}