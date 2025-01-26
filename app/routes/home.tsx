import type { Route } from "./+types/home";

import BlogCard from "~/components/BlogCard";
import { motion } from "framer-motion";
import type { ArticleJson } from "type/articlejson";
import { Article } from "~/domain/Article";

export async function loader({ params }: Route.LoaderArgs) {
  const res = await fetch(`https://qiita.com/api/v2/authenticated_user/items`, {
    headers: {
      Authorization: `Bearer eb905f883c7279ad1a7f369307d0cd413bc1a1f1`,
    },
  });
  const articlesJson: ArticleJson[] = await res.json();
  const articles = articlesJson.map(
    (articleJson) =>
      new Article(
        articleJson.title,
        articleJson.url,
        articleJson.likes_count,
        articleJson.stocks_count,
        articleJson.created_at
      )
  );

  return { articles };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { articles } = loaderData;
  return (
    <div className="flex-1 sm:ml-64">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <h2 className="mb-6 text-3xl font-bold text-gray-800">記事検索</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <BlogCard key={article.url} article={article} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
