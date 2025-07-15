import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Titre from "../Components/UI/Titre";
import { blogArticles, blogCategories } from "../data/blogData";
import MySeoComP from "./MySeoComP";

const Blog = () => {
  const [filteredArticles, setFilteredArticles] = useState(blogArticles);
  const [activeCategory, setActiveCategory] = useState("all");

  // Filtrer les articles par catégorie
  const filterArticles = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredArticles(blogArticles);
    } else {
      setFilteredArticles(
        blogArticles.filter((article) => article.category === category)
      );
    }
  };

  // Animation d'entrée progressive
  useEffect(() => {
    const cards = document.querySelectorAll(".article-card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 100);
    });
  }, [filteredArticles]);

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

  const getCategoryColor = (category) => {
    const categoryData = blogCategories.find((cat) => cat.key === category);
    return categoryData ? categoryData.color : "primaryColor";
  };

  return (
    <>
      <MySeoComP
        title="Blog Technique - Mohamed Zeinoudini | Articles et Tutoriels"
        description="Découvrez mes articles techniques sur le développement web, les réseaux, l'infrastructure et les dernières tendances technologiques."
        url={`${window.location.origin}/blog`}
      />

      <div className="bg-[#0A0A0A] min-h-screen">
        <Titre />

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Blog <span className="text-primaryColor">Technique</span>
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                Mes articles, tutoriels et analyses sur le développement web, les réseaux
                informatiques et les dernières tendances technologiques.
              </p>
            </div>

            {/* Filtres par catégorie */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
                {blogCategories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => filterArticles(category.key)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                      activeCategory === category.key
                        ? `bg-${category.color} text-white shadow-lg`
                        : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    <i className={`${category.icon} mr-2`}></i>
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Description de la catégorie active */}
              <div className="text-center">
                <p className="text-gray-500 text-sm sm:text-base">
                  {blogCategories.find((cat) => cat.key === activeCategory)?.description}
                </p>
              </div>
            </div>

            {/* Grille d'articles */}
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article, index) => (
                <article
                  key={article.id}
                  className="article-card opacity-0 transform translate-y-4 transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    to={`/blog/${article.id}`}
                    className="group block bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-primaryColor/50 hover:shadow-xl hover:shadow-primaryColor/10 hover:-translate-y-2"
                  >
                    {/* Header de l'article */}
                    <div className="p-6 border-b border-gray-700/30">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(
                            article.level
                          )}`}
                        >
                          {article.level}
                        </span>
                        <span
                          className={`text-${getCategoryColor(
                            article.category
                          )} text-sm font-medium`}
                        >
                          {
                            blogCategories.find((cat) => cat.key === article.category)
                              ?.label
                          }
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primaryColor transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h2>

                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Footer de l'article */}
                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>
                          <i className="ri-calendar-line mr-1"></i>
                          {new Date(article.date).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span>
                          <i className="ri-time-line mr-1"></i>
                          {article.readTime}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 3 && (
                          <span className="px-2 py-1 text-xs bg-gray-700/50 text-gray-400 rounded">
                            +{article.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          <i className="ri-eye-line mr-1"></i>
                          {article.views.toLocaleString()} vues
                        </span>
                        <span className="text-primaryColor text-sm font-medium group-hover:text-white transition-colors duration-300">
                          Lire l'article <i className="ri-arrow-right-line ml-1"></i>
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Message si aucun article */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <i className="ri-article-line text-6xl text-gray-600 mb-4 block"></i>
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  Aucun article trouvé
                </h3>
                <p className="text-gray-500">
                  Essayez de sélectionner une autre catégorie.
                </p>
              </div>
            )}

            {/* Newsletter CTA */}
            <div className="mt-16 lg:mt-20 bg-gradient-to-r from-primaryColor/10 to-purple-500/10 border border-primaryColor/20 rounded-2xl p-8 sm:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Restez informé
              </h3>
              <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
                Recevez mes derniers articles et tutoriels directement dans votre boîte
                mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primaryColor transition-colors duration-300"
                />
                <button className="px-6 py-3 bg-primaryColor text-white font-semibold rounded-lg hover:bg-primaryColor/90 transition-colors duration-300">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
