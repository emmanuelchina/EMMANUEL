import { motion } from 'framer-motion';

export default function Projectview() {
  const projects = [
      {
      name: "P.A. Bawaya Group",
      image: "/img/pabawway.png",
      demoLink: "https://www.pabawayagroupintl.com/",
      description:
        "A diversified service company committed to delivering reliable, innovative, and result-driven solutions across multiple industries.",
    },
    {
      name: "DiamondTrade",
      image: "img/diamondtrade.png",
      demoLink: "https://diamond-trade.vercel.app",
      description: "Full-stack trading platform with real-time data visualization, user authentication, and responsive dashboard built with MERN stack."
    }, 
     {
      name: "E-commerce Website",
      image: "/img/E-commerce.png",
      demoLink: "https://e-commerce-six-eosin-62.vercel.app/",
      description: "Complete e-commerce solution with product catalog, shopping cart, checkout flow, and responsive design for mobile shopping."
    },
    {
      name: "Igwe's Kitchen Website",
      image: "/img/kitchen.png",
      demoLink: "https://igwe-s-kitchen.vercel.app/",
      description: "Modern restaurant website featuring menu showcase, online ordering system, and smooth animations with Tailwind CSS."
    }, 
    {
      name: "Real Madrid Website",
      image: "/img/Screenshot 2025-10-05 022543.png", 
      demoLink: "https://real-madrid-nu.vercel.app",
      description: "Official-style fan site with team roster, match schedules, player stats, and interactive features using React and modern UI design."
    },
   
    {
      name: "BMI Website",
      image: "/img/BMI.png",
      demoLink: "https://bmi-1-uzeh.vercel.app/",
      description: "Interactive BMI calculator with personalized health recommendations, progress tracking, and clean, intuitive user interface."
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-gray-100 pt-40">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Some companies & Project I've worked with
        </h3>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Explore my portfolio of web applications showcasing modern React development, responsive design, and full-stack capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 bg-white">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white  rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
 
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>


            <div className="p-6">
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-slate-900">
                {project.name}
              </h4>

              <p className="text-gray-600 dark:text-slate-800 mb-6 bg-white leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex justify-center bg-white">
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg shadow-lg transition-all duration-300 border border-transparent hover:border-blue-700 w-44 mx-auto text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-1.5 font-medium">Live Demo</span>
                  <motion.svg
                    className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
