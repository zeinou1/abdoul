import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Titre from "../Components/UI/Titre";
import { getArticleById } from "../data/blogData";
import MySeoComP from "./MySeoComP";

const BlogPost = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Récupérer l'article par son ID
    const foundArticle = getArticleById(id);
    setArticle(foundArticle);
  }, [id]);

  // Si l'article n'existe pas, afficher 404
  if (!article) {
    return (
      <div className="bg-[#0A0A0A] min-h-screen">
        <Titre />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <i className="ri-file-text-line text-6xl text-gray-600 mb-4 block"></i>
            <h1 className="text-2xl font-bold text-white mb-2">Article non trouvé</h1>
            <p className="text-gray-400 mb-6">
              L&apos;article que vous recherchez n&apos;existe pas.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-primaryColor text-white font-semibold rounded-lg hover:bg-primaryColor/90 transition-colors duration-300"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Retour au blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const getLevelColor = (level) => {
    switch (level) {
      case "Débutant":
        return "text-green-400 bg-green-400/20";
      case "Intermédiaire":
        return "text-yellow-400 bg-yellow-400/20";
      case "Avancé":
        return "text-red-400 bg-red-400/20";
      default:
        return "text-gray-400 bg-gray-400/20";
    }
  };

  // Fonction pour rendre le contenu markdown (simplifiée)
  const renderContent = (content) => {
    return content.split("\n").map((line, index) => {
      // Titres
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-lg sm:text-xl font-bold text-white mt-6 mb-3">
            {line.slice(4)}
          </h3>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-xl sm:text-2xl font-bold text-primaryColor mt-8 mb-4"
          >
            {line.slice(3)}
          </h2>
        );
      }
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-2xl sm:text-3xl font-bold text-white mt-8 mb-6">
            {line.slice(2)}
          </h1>
        );
      }

      // Code blocks
      if (line.startsWith("```")) {
        return (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-lg border border-gray-700 my-4 overflow-x-auto"
          ></div>
        );
      }

      // Listes
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="text-gray-300 ml-4 mb-1">
            • {line.slice(2)}
          </li>
        );
      }

      // Paragraphes normaux
      if (line.trim() && !line.startsWith("```")) {
        return (
          <p key={index} className="text-gray-300 mb-4 leading-relaxed">
            {line}
          </p>
        );
      }

      return null;
    });
  };

  return (
    <>
      <MySeoComP
        title={`${article.title} - Blog Technique Mohamed Zeinoudini`}
        description={article.excerpt}
        url={`${window.location.origin}/blog/${article.id}`}
      />

      <div className="bg-[#0A0A0A] min-h-screen">
        <Titre />

        <article className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Link
                  to="/blog"
                  className="hover:text-primaryColor transition-colors duration-300"
                >
                  Blog
                </Link>
                <i className="ri-arrow-right-s-line"></i>
                <span className="text-white">{article.title}</span>
              </div>
            </nav>

            {/* Article Header */}
            <header className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden mb-8">
              <div className="p-6 sm:p-8 lg:p-10 border-b border-gray-700/50">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(
                      article.level
                    )}`}
                  >
                    {article.level}
                  </span>
                  <span className="text-sm text-gray-400">
                    <i className="ri-calendar-line mr-1"></i>
                    {new Date(article.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-sm text-gray-400">
                    <i className="ri-time-line mr-1"></i>
                    {article.readTime}
                  </span>
                  <span className="text-sm text-gray-400">
                    <i className="ri-eye-line mr-1"></i>
                    {article.views.toLocaleString()} vues
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  {article.title}
                </h1>

                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-primaryColor/20 text-primaryColor rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contenu de l'article */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="prose prose-invert max-w-none">
                  {renderContent(article.content)}
                </div>

                {/* Actions de partage */}
                <div className="mt-12 pt-8 border-t border-gray-700/50">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Partager cet article
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      <i className="ri-linkedin-fill mr-2"></i>
                      LinkedIn
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        article.title
                      )}&url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    >
                      <i className="ri-twitter-x-fill mr-2"></i>
                      Twitter
                    </a>
                    <button
                      onClick={() => navigator.clipboard.writeText(window.location.href)}
                      className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
                    >
                      <i className="ri-link mr-2"></i>
                      Copier le lien
                    </button>
                  </div>
                </div>
              </div>
            </header>

            {/* Navigation vers d'autres articles */}
            <div className="flex justify-center">
              <Link
                to="/blog"
                className="inline-flex items-center px-6 py-3 bg-primaryColor/20 text-primaryColor font-semibold rounded-lg hover:bg-primaryColor/30 transition-colors duration-300"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                Retour au blog
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
