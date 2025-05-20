import { useState } from "react"
import { Link } from "react-router-dom"

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Planning", "Budget", "Themes", "Activities", "Food", "Venues"]

  const featuredPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Planning a Children's Party in London: 2025 Edition",
      excerpt:
        "Everything you need to know about planning the perfect children's party in London this year, from venues to entertainment.",
      image: "/blog-post-1.png",
      category: "Planning",
      date: "May 15, 2025",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 2,
      title: "How Much Does a Children's Party Cost in London? A Complete Breakdown",
      excerpt:
        "A detailed analysis of children's party costs in London, with budgeting tips and money-saving strategies for parents.",
      image: "/blog-post-2.png",
      category: "Budget",
      date: "May 10, 2025",
      readTime: "6 min read",
      featured: true,
    },
    {
      id: 3,
      title: "15 Trending Children's Party Themes in London for 2025",
      excerpt:
        "Discover the hottest party themes that London kids are loving this year, from tech-inspired celebrations to eco-friendly gatherings.",
      image: "/blog-post-3.png",
      category: "Themes",
      date: "May 5, 2025",
      readTime: "7 min read",
      featured: true,
    },
  ]

  const recentPosts = [
    {
      id: 4,
      title: "10 Outdoor Party Games That London Kids Can't Get Enough Of",
      excerpt: "Get kids moving with these popular outdoor party games that are perfect for London parks and gardens.",
      image: "/blog-post-4.png",
      category: "Activities",
      date: "April 28, 2025",
      readTime: "5 min read",
    },
    {
      id: 5,
      title: "DIY Party Decorations That Will Wow Your Guests",
      excerpt: "Create stunning party decorations on a budget with these simple DIY ideas that anyone can master.",
      image: "/blog-post-5.png",
      category: "Planning",
      date: "April 22, 2025",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Healthy Party Food Options That Kids Actually Love",
      excerpt:
        "Nutritious and delicious party food ideas that will keep both kids and parents happy at your next celebration.",
      image: "/images/blog-post-6.png",
      category: "Food",
      date: "April 15, 2025",
      readTime: "5 min read",
    },
  ]

  const allPosts = [...featuredPosts, ...recentPosts]

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-[#FDFDFB]">
     {/* Blog Hero */}
     <section className="relative py-12 md:py-20">
        {/* Hero Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FC6B57]/40 to-[#FC6B57]/30 z-10"></div>
          <img
            src="/blog-hero.png"
            alt="Children's party decorations and supplies"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl">
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-[#2F2F2F] mb-4">The BookABash Blog</h1>
                <p className="text-xl text-[#707070] mb-8">
                  Expert tips, ideas, and inspiration for planning the perfect children's party
                </p>
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full p-4 pl-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FC6B57] shadow-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-[#FC6B57] text-white"
                    : "bg-gray-100 text-[#707070] hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2F2F2F] mb-8 relative inline-block">
            Featured Articles
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-[#FC6B57] rounded-full"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedCategory === "All" || filteredPosts.some((post) => post.featured) ? (
              filteredPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#FC6B57] text-white text-xs font-bold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#2F2F2F] mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-[#707070] mb-4 line-clamp-3">{post.excerpt}</p>
                      <a
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-[#FC6B57] font-medium hover:underline"
                      >
                        Read more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-[#707070]">No featured articles found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2F2F2F] mb-8 relative inline-block">
            Recent Articles
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-[#FC6B57] rounded-full"></div>
          </h2>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts
                .filter((post) => !post.featured || selectedCategory !== "All")
                .map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#FC6B57] text-white text-xs font-bold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#2F2F2F] mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-[#707070] mb-4 line-clamp-3">{post.excerpt}</p>
                      <Link
  to={`/blog/${post.id}`}
  className="inline-flex items-center text-[#FC6B57] font-medium hover:underline"
>


                        Read more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">No articles found</h3>
              <p className="text-[#707070]">Try adjusting your search or filter to find what you're looking for.</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
                className="mt-4 bg-[#FC6B57] text-white px-4 py-2 rounded-full hover:bg-[#e55c48] transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#FFF8F7]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-3/5 p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2F2F2F] mb-4">
                  Get party planning tips in your inbox
                </h2>
                <p className="text-[#707070] mb-6">
                  Subscribe to our newsletter for the latest party trends, planning advice, and exclusive offers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC6B57]"
                  />
                  <button className="bg-[#FC6B57] text-white px-6 py-3 rounded-md hover:bg-[#e55c48] transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
                </p>
              </div>
              <div className="md:w-2/5 bg-[#FC6B57]/10 p-8 md:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#FC6B57]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-[#2F2F2F] font-medium">Join 5,000+ parents getting weekly party inspiration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
    </div>
  )
}

export default Blog
