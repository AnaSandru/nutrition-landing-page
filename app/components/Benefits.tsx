"use client";

import { motion } from "framer-motion";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export default function Benefits() {
  const benefits: Benefit[] = [
    {
      icon: "🎯",
      title: "Personalized Plans",
      description:
        "Custom nutrition strategies based on your goals, preferences, and lifestyle",
    },
    {
      icon: "📊",
      title: "Science-Backed",
      description:
        "Evidence-based approach using the latest nutrition research and data",
    },
    {
      icon: "💪",
      title: "Sustainable Results",
      description: "Long-term lifestyle changes, not quick fixes or fad diets",
    },
    {
      icon: "🤝",
      title: "Ongoing Support",
      description: "Regular check-ins and adjustments to keep you on track",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Personalized Nutrition?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            One-size-fits-all does not work. Your body is unique, and your
            nutrition plan should be too.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-green-50 transition"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
