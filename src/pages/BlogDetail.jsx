import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { allPosts } from "../content/blogPost";
import { Helmet } from 'react-helmet';
import Seo from "../components/Seo";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [email, setEmail] = useState("");

  // Convert ID to number for matching
  const post = allPosts.find((p) => String(p.id) === id);

  if (!post) {
    return <div className="text-center py-16 text-xl">Post not found.</div>;
  }

  const related = allPosts.filter((p) => post.relatedPosts?.includes(p.id));

  return (
    <div className="min-h-screen bg-[#FDFDFB]">
         {/* Meta Tags for SEO */}
         <Seo
  title={post.metaTitle}
  description={post.metaDescription}
  image={post.image}
/>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 relative z-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-[#707070]">
            <Link to="/" className="hover:text-[#FC6B57] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-[#FC6B57] transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#FC6B57] font-medium truncate max-w-[200px] md:max-w-none">
              {post.title}
            </span>
          </div>
        </div>
      </div>

      {/* Your existing content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <span className="bg-[#FC6B57] text-white text-xs font-bold px-3 py-1 rounded-full">
            {post.category}
          </span>
          <div className="flex items-center text-sm text-gray-500 mt-2 space-x-3">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-[#2F2F2F] mb-6">
          {post.title}
        </h1>
        <p className="text-xl text-[#707070] mb-6">{post.excerpt}</p>

        <div className="flex items-center mb-10">
          <img
            src={post.author?.image || "/placeholder.svg"}
            alt={post.author?.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-medium text-[#2F2F2F]">{post.author?.name}</h3>
            <p className="text-sm text-[#707070]">{post.author?.role}</p>
          </div>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="rounded-xl shadow-lg mb-10"
        />

        <div
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-[#2F2F2F] mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-[#707070] px-3 py-1 rounded-full text-sm hover:bg-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <div className="bg-[#FFF8F7] py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#2F2F2F] mb-8">You Might Also Like</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((r) => (
                <div key={r.id} className="bg-white p-4 rounded-xl shadow">
                  <img src={r.image} alt={r.title} className="rounded-md h-40 w-full object-cover mb-4" />
                  <div className="text-sm text-gray-500 mb-1">
                    {r.date} • {r.readTime}
                  </div>
                  <h3 className="text-lg font-bold text-[#2F2F2F] mb-2">{r.title}</h3>
                  <p className="text-[#707070] mb-3">{r.excerpt}</p>
                  <Link
                    to={`/blog/${r.id}`}
                    className="text-[#FC6B57] font-medium hover:underline inline-flex items-center"
                  >
                    Read more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl bg-[#FFF8F7] p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-[#2F2F2F] mb-4">Get more party planning tips</h2>
          <p className="text-[#707070] mb-6">
            Subscribe to our newsletter for the latest party trends, planning advice, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC6B57]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-[#FC6B57] text-white px-6 py-3 rounded-md hover:bg-[#e55c48] transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
