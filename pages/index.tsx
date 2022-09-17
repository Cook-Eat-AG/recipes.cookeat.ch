//@ts-nocheck
import Head from "next/head";
import CTFLData from "../lib/api";
import {GetStaticPaths, GetStaticPathsContext, GetStaticProps, InferGetStaticPropsType} from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import RecipeCard from "../components/RecipeCard";
import RecipeSubmit from "../components/RecipeSubmit";
import styles from "../styles/Index.module.css";

export default function Index({ recipes }: InferGetStaticPropsType<typeof getStaticProps>) {

	//tbd: make the recipes sorted by title, descending (A-Z)
	const recipe = recipes.map((item: any) => { 
		return item; 
	})

	return (
		<>
			<Head>
				<title>Cook Eat Rezepte</title>
			</Head>
			<div className={styles.layout}>
				<Header
					isDetailpage={false}
					isFullWidth={true}
					image={""} />
				{<Search
					recipe={recipe}
				/>}
				<main className={styles.main} key={recipes.slug}>
					<div className={styles.recipeCard}>
						{recipe.map((item: any, index: number) => {
							return (
								<>
									<RecipeCard
										key={index}
										title={item.title}
										excerpt={item.excerpt}
										tags={item.tagsCollection}
										image={item.image.url}
										imageCreditUrl={item.imageCreditUrl}
										imageCreditName={item.imageCreditName}
										persons={item.persons}
										ingredients={item.ingredients}
										directions={item.directions}
										slug={item.slug}
									/>
								</>
							)
						})}
					</div>
				</main>
				<RecipeSubmit />
				<Footer
					isDetailpage={false}
					isFullWidth={false} />
			</div>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (slug) => {
	const recipes = await CTFLData.getAllRecipes();

	return {
		props: {
			recipes
		},
		revalidate: 1,
	};
}