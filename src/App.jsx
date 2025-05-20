import { useState } from "react"

const App = () => {
  const [category, setCategory] = useState("")
  const [postcode, setPostcode] = useState("")
  const [budget, setBudget] = useState(200)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "BookABash saved me so much time! I found an amazing magician and ordered the cake all in one go. My son's 7th birthday was a huge hit!",
      author: "Sophie, mum of two in North London",
      rating: 5
    },
    {
      quote: "I was panicking about my daughter's birthday until I found BookABash. Within an hour I had everything sorted. The face painter was incredible!",
      author: "James, dad of three in Manchester",
      rating: 5
    },
    {
      quote: "The transparent pricing was such a relief. No hidden costs and I could stick to my budget while still giving my twins an amazing 5th birthday party.",
      author: "Priya, mum of twins in Birmingham",
      rating: 5
    },
    {
      quote: "BookABash made planning my son's superhero party so easy. Found an amazing entertainer and venue in just one evening!",
      author: "Michael, dad in Leeds",
      rating: 5
    },
    {
      quote: "As a busy working mum, I don't have time to call dozens of providers. BookABash let me book everything in one evening!",
      author: "Emma, mum in Edinburgh",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-[#FDFDFB] overflow-hidden relative">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        <div className="flex items-center">
          <div className="flex items-center">
            <svg
              width="40"
              height="48"
              viewBox="0 0 100 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M50 10C30 10 20 30 20 50C20 70 30 90 50 90C70 90 80 70 80 50C80 30 70 10 50 10Z"
                fill="#FC6B57"
              />
              <path d="M35 30C35 30 40 40 40 50C40 60 35 70 35 70" stroke="white" strokeWidth="5" />
              <path d="M50 90L45 120" stroke="#FC6B57" strokeWidth="2" />
              <path d="M75 15L85 5" stroke="#FC6B57" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="text-[#FC6B57] text-2xl font-bold">BookABash</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-[#707070] hover:text-[#FC6B57] transition-colors">
            Browse
          </a>
          <a href="#" className="text-[#707070] hover:text-[#FC6B57] transition-colors">
            How It Works
          </a>
          <a href="#" className="text-[#707070] hover:text-[#FC6B57] transition-colors">
            Blog
          </a>
          <a href="#" className="text-[#707070] hover:text-[#FC6B57] transition-colors">
            Log In
          </a>
          <a href="#" className="bg-[#FC6B57] text-white px-4 py-2 rounded-full hover:bg-[#e55c48] transition-colors">
            Get Started
          </a>
        </div>
        <button className="md:hidden text-[#3A3A3A]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        {/* Hero Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FC6B57]/40 to-[#FC6B57]/30"></div>
          <img
            src="colorful-childrens-party.png"
            alt="Children celebrating at a colorful birthday party with cake and balloons"
            className="w-full h-full object-cover md:object-center object-right-top"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl">
              <div className="text-center mb-6">
                <h1 className="text-3xl md:text-5xl font-bold text-[#2F2F2F] mb-4">
                  Why search five sites when one will do?
                </h1>
                <p className="text-xl text-[#707070]">
                  Book every part of your child's party — from entertainers to balloons — all in one place.
                </p>
              </div>

              {/* Search Box */}
              <div className="bg-white p-4 rounded-lg shadow-md mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <select
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC6B57]"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Select Category</option>
                      <option value="entertainers">Entertainers</option>
                      <option value="venues">Venues</option>
                      <option value="cakes">Cakes</option>
                      <option value="decorations">Decorations</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Enter Postcode"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC6B57]"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <label className="text-sm text-[#707070] mb-1">Budget: £{budget}</label>
                      <input
                        type="range"
                        min="50"
                        max="500"
                        step="10"
                        value={budget}
                        onChange={(e) => setBudget(Number.parseInt(e.target.value))}
                        className="w-full accent-[#FC6B57]"
                      />
                    </div>
                  </div>
                  <button className="bg-[#FC6B57] text-white px-6 py-3 rounded-md hover:bg-[#e55c48] transition-colors">
                    Search
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#"
                  className="bg-[#FC6B57] text-white px-6 py-3 rounded-full hover:bg-[#e55c48] transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="border border-[#FC6B57] text-[#FC6B57] px-6 py-3 rounded-full hover:bg-[#FC6B57] hover:text-white transition-colors"
                >
                  Browse Categories
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-[#FFF8F7] z-0"></div>
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#FC6B57]/5 z-0"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#FC6B57]/5 z-0"></div>
        <div className="absolute top-1/4 right-1/3 w-16 h-16 rounded-full bg-[#FC6B57]/5 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-4 relative inline-block">
              Booking a party should feel like magic
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FC6B57] rounded-full"></div>
            </h2>
            <p className="text-[#707070] max-w-2xl mx-auto mt-6">
              Our simple three-step process takes the stress out of planning your child's perfect celebration
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#FC6B57]/20 via-[#FC6B57] to-[#FC6B57]/20 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="relative bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl z-10 h-full">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#FC6B57] w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  1
                </div>
                <div className="mt-8 text-center">
                  <div className="bg-[#FFF8F7] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#FC6B57]"
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
                  <h3 className="text-xl font-semibold text-[#2F2F2F] mb-3">Browse local party providers</h3>
                  <p className="text-[#707070]">
                    Find the perfect entertainers, venues, and more in your area with our verified local listings.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl z-10 h-full">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#FC6B57] w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  2
                </div>
                <div className="mt-8 text-center">
                  <div className="bg-[#FFF8F7] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#FC6B57]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#2F2F2F] mb-3">Book instantly — no endless calls</h3>
                  <p className="text-[#707070]">
                    Secure your booking online in minutes, not days. Real-time availability and instant confirmation.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl z-10 h-full">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#FC6B57] w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="mt-8 text-center">
                  <div className="bg-[#FFF8F7] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#FC6B57]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#2F2F2F] mb-3">Relax and enjoy the big day</h3>
                  <p className="text-[#707070]">
                    We handle the details so you can focus on the celebration. Our support team is available if you need
                    anything.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center text-[#FC6B57] font-medium hover:underline">
              Learn more about our booking process
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FFF8F7] to-[#FDFDFB] z-0"></div>
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#FC6B57]/5 z-0"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-[#FC6B57]/5 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-4 relative inline-block">
              Parents love BookABash because it's…
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FC6B57] rounded-full"></div>
            </h2>
            <p className="text-[#707070] max-w-2xl mx-auto mt-6">
              We've designed our platform with busy parents in mind, making party planning a breeze
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
              <div className="text-[#FC6B57] mb-6 transform transition-transform duration-300 group-hover:scale-110">
                <div className="bg-[#FFF8F7] w-16 h-16 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#2F2F2F] mb-3">Fast and stress-free</h3>
              <p className="text-[#707070]">Book everything you need in minutes, not hours. Our streamlined process saves you valuable time.</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-[#FC6B57] font-medium">Average booking time: 15 minutes</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
              <div className="text-[#FC6B57] mb-6 transform transition-transform duration-300 group-hover:scale-110">
                <div className="bg-[#FFF8F7] w-16 h-16 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#2F2F2F] mb-3">Trusted, vetted providers</h3>
              <p className="text-[#707070]">Every provider is verified and reviewed by real parents. We only work with the best in the business.</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-[#FC6B57] font-medium">500+ verified providers nationwide</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
              <div className="text-[#FC6B57] mb-6 transform transition-transform duration-300 group-hover:scale-110">
                <div className="bg-[#FFF8F7] w-16 h-16 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#2F2F2F] mb-3">Transparent pricing</h3>
              <p className="text-[#707070]">No hidden fees or surprises — see exactly what you'll pay. Compare options easily to stay within budget.</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-[#FC6B57] font-medium">Average savings of £75 per booking</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
              <div className="text-[#FC6B57] mb-6 transform transition-transform duration-300 group-hover:scale-110">
                <div className="bg-[#FFF8F7] w-16 h-16 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#2F2F2F] mb-3">Built just for kids' parties</h3>
              <p className="text-[#707070]">Specialized for children's events, not generic bookings. We understand what makes a great kids' party.</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-[#FC6B57] font-medium">10,000+ successful parties</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-[#FFF8F7]/50 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-4 relative inline-block">
              Popular Categories
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FC6B57] rounded-full"></div>
            </h2>
            <p className="text-[#707070] max-w-2xl mx-auto mt-6">Find everything you need for the perfect party</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 to-transparent z-10"></div>
              <img 
                src="face-painter.png" 
                alt="Face painter with child" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                <div className="text-white mb-2 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white text-center">Face Painters</h3>
                <div className="mt-2 flex justify-center">
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                    From £85
                  </span>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 to-transparent z-10"></div>
              <img 
                src="/bouncy-castle.png" 
                alt="Bouncy castle" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                <div className="text-white mb-2 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white text-center">Bouncy Castles</h3>
                <div className="mt-2 flex justify-center">
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                    From £120
                  </span>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 to-transparent z-10"></div>
              <img 
                src="party-host.jpg" 
                alt="Party host" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                <div className="text-white mb-2 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white text-center">Party Hosts</h3>
                <div className="mt-2 flex justify-center">
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                    From £150
                  </span>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 to-transparent z-10"></div>
              <img 
                src="/birthday-cake.png" 
                alt="Birthday cake" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                <div className="text-white mb-2 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white text-center">Cakes & Catering</h3>
                <div className="mt-2 flex justify-center">
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                    From £65
                  </span>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 to-transparent z-10"></div>
              <img 
                src="balloons.png" 
                alt="Party decorations" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                <div className="text-white mb-2 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white text-center">Decor & Extras</h3>
                <div className="mt-2 flex justify-center">
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                    From £45
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-[#FC6B57] text-white px-6 py-3 rounded-full hover:bg-[#e55c48] transition-colors"
            >
              View All Categories
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#FFF8F7] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#FC6B57]/5"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#FC6B57]/5"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-[#FC6B57]/5"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-4 relative inline-block">
              What Parents Say
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FC6B57] rounded-full"></div>
            </h2>
            <p className="text-[#707070] max-w-2xl mx-auto mt-6">
              Don't just take our word for it — hear from parents who've used BookABash
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-xl">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[#FC6B57] text-7xl">"</div>
              
              <div className="mt-6 text-center">
                <p className="text-xl md:text-2xl text-[#2F2F2F] italic mb-8">
                  {testimonials[activeTestimonial].quote}
                </p>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="text-[#FC6B57] text-xl">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <span key={i} className="inline-block">★</span>
                    ))}
                  </div>
                </div>
                
                <p className="font-semibold text-[#2F2F2F] text-lg">
                  {testimonials[activeTestimonial].author}
                </p>
              </div>
              
              <div className="mt-10 flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeTestimonial === index ? 'bg-[#FC6B57]' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="bg-white rounded-full p-2 shadow-md hover:bg-[#FFF8F7] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FC6B57]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="bg-white rounded-full p-2 shadow-md hover:bg-[#FFF8F7] transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FC6B57]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="text-[#FC6B57] font-medium hover:underline inline-flex items-center">
              Read more reviews
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F7] to-white z-0"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FC6B57]/5 rounded-bl-full z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FC6B57]/5 rounded-tr-full z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-6">
                  Ready to plan your next bash?
                </h2>
                <p className="text-[#707070] mb-8">
                  Join thousands of happy parents who've made party planning a breeze with BookABash. Your perfect party is just a few clicks away.
                </p>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="block w-full bg-[#FC6B57] text-white px-6 py-4 rounded-full hover:bg-[#e55c48] transition-colors text-center text-lg font-medium"
                  >
                    Start Booking Now
                  </a>
                  <a
                    href="#"
                    className="block w-full border border-[#FC6B57] text-[#FC6B57] px-6 py-4 rounded-full hover:bg-[#FC6B57] hover:text-white transition-colors text-center text-lg font-medium"
                  >
                    Browse Top Categories
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 relative min-h-[300px]">
                <img 
                  src="party.png" 
                  alt="Happy children celebrating at a birthday party" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-[#FFF8F7] p-6 text-center">
              <p className="text-[#2F2F2F] font-medium">
                Have questions? <a href="#" className="text-[#FC6B57] hover:underline">Chat with our team</a> or call us at <span className="text-[#FC6B57]">0800 123 4567</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    
    {/* Footer */}
<footer className="bg-[#2F2F2F] text-white py-12 relative">
  <div className="absolute top-0 left-0 w-full overflow-hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="w-full h-12 -mt-12"
    >
      <path
        fill="#FFFFFF"
        fillOpacity="1"
        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Column 1: Logo + Info */}
      <div>
        <div className="flex items-center">
          <svg
            width="40"
            height="48"
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M50 10C30 10 20 30 20 50C20 70 30 90 50 90C70 90 80 70 80 50C80 30 70 10 50 10Z"
              fill="white"
            />
            <path d="M35 30C35 30 40 40 40 50C40 60 35 70 35 70" stroke="#2F2F2F" strokeWidth="5" />
            <path d="M50 90L45 120" stroke="white" strokeWidth="2" />
            <path d="M75 15L85 5" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="text-white text-2xl font-bold">BookABash</span>
        </div>
        <p className="text-gray-400 mt-4">The all-in-one platform for booking children's parties.</p>
        <div className="mt-6">
          <p className="text-gray-400 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            London, UK
          </p>
        </div>
      </div>

      {/* Column 2: Company */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Company</h4>
        <ul className="space-y-3">
          {['About Us', 'Blog', 'Careers', 'Press'].map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FC6B57] transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Support */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Support</h4>
        <ul className="space-y-3">
          {['Contact Us', 'FAQ', 'Terms of Service', 'Privacy Policy'].map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FC6B57] transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 4: Connect */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Connect</h4>
        <div className="flex space-x-4 mb-6">
          <a
            href="#"
            className="bg-white/10 hover:bg-[#FC6B57] text-white p-2 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="#"
            className="bg-white/10 hover:bg-[#FC6B57] text-white p-2 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
          </a>
        </div>

        <p className="text-gray-400">© 2023 BookABash. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

 
    </div >
  )
}

export default App
