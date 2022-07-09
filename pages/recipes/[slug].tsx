import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import {
	GetStaticPaths, GetStaticPathsContext,
	GetStaticProps,
	GetStaticPropsContext,
	InferGetStaticPropsType,
	PreviewData
} from "next";
import CTFLData from "../../lib/api";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RecipeDetail from "../../components/RecipeDetail";
import styles from "../../styles/Index.module.css";
import {ParsedUrlQuery} from "querystring";

export default function Recipe({ recipes }: InferGetStaticPropsType<typeof getStaticProps>) {
	const router = useRouter();
	const { slug } = router.query;

	const recipe = recipes.map((item: any) => {
		return item;
	})
	return (
		<>
			<Head>
				<title>Cook Eat Rezepte | {recipe[0].title}</title>
				<meta name="description" content={recipe[0].description}/>
				<meta property="og:url" content={`https://rezepte.cookeat.ch/recipes/${slug}`}/>
				<meta property="og:type" content="recipe"/>
				<meta property="og:title" content={recipe[0].title}/>
				<meta property="og:description" content={recipe[0].description}/>
				<meta property="og:image" content={recipe[0].image.url}/>
			</Head>
			<div className={styles.layout}>
				{recipe.map((item: any) => {
					return (
						<>
						<Header
							isDetailpage={true}
							isFullWidth={false}
							image={item.image} />
							
						</>
					)
				})}
				<main className={styles.main} itemScope itemType="https://schema.org/Recipe">
					{recipes.map((item: any) => {
						return (
							<>
							<RecipeDetail
								title={item.title}
								excerpt={item.excerpt}
								date={item.date}
								imageCreditUrl={item.imageCreditUrl}
								imageCreditName={item.imageCreditName}
								tags={item.tagsCollection}
								persons={item.persons}
								ingredients={item.ingredients}
								directions={item.directions}
								description={item.description} />
							</>
						)
					})}
				</main>
				<Footer
					isDetailpage={true}
					isFullWidth={false} />
			</div>
		</>
	)
}

interface IParams extends ParsedUrlQuery {
	slug: string | undefined;
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { slug } = context.params! as IParams;
	const recipes = await CTFLData.getRecipeBySlug(`${slug}`);

	return {
		props: {
			slug, recipes
		},
		revalidate: 1,
	};
}

export const getStaticPaths: GetStaticPaths = async () => {
	const pages = await CTFLData.getAllRecipes();
	const paths = pages.map((item: any) => {
		return {
			params: { slug: item.slug }
		}
	});

	return {
		paths,
		fallback: false,
	}
}