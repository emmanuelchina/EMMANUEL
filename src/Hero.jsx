

export default function Hero() {
 

  return (
    <section className="relative py-24 lg:py-32 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 px-6 lg:px-16">
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="">
            <div className="relative">
              <img
                src="/img/profile.jpg"
                alt="Igwe Emmanuel"
                className=" w-30 h-30 rounded-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-blue-400/30 rounded-full blur-xl animate-pulse opacity-75"></div>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-800 leading-tight">
              Hi I'm Emmanuel
            </h1>
            <h2 className="text-3xl  font-black text-gray-900 leading-none">
              Full-Stack Engineer
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-light max-w-2xl">
            who enjoys crafting modern, responsive, and creative web experiences. I specialize in React Node.js Express  and Tailwind CSS to build user-friendly interfaces for business and individuals.


            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://wa.me/2341234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-2"
            >
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/emmanuel"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-2"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@emmanuel.dev"
              className="group flex items-center p-2"
            >
              <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        {/* <div className="w-full lg:w-1/3 space-y-6">
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
              Let's Connect
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
                  required
                />
              </div>

              <div>
                <textarea
                  name="description"
                  placeholder="Tell me about your project..."
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-sm resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div> */}
      </div>
    </section>
  );
}
