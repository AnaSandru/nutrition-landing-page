"use client";

import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  result: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Marathon Runner",
      content:
        "The personalized nutrition plan completely transformed my performance. I PR'd my marathon by 15 minutes!",
      image: "👩‍🦰",
      result: "Lost 12 lbs, Gained Energy",
    },
    {
      name: "Michael Chen",
      role: "Busy Professional",
      content:
        "Finally found a sustainable approach that fits my hectic schedule. Down 30 pounds and feeling amazing!",
      image: "👨‍💼",
      result: "Lost 30 lbs in 4 months",
    },
    {
      name: "Emily Rodriguez",
      role: "New Mom",
      content:
        "After struggling with postpartum weight, this program helped me feel like myself again. The support was incredible!",
      image: "👩",
      result: "Regained Confidence",
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4 bg-white scroll-mt-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real people, real results, real transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-linear-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex gap-1 text-yellow-400 mb-2">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-700 italic">{testimonial.content}</p>
              </div>

              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                {testimonial.result}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 mb-4">Join over 500+ satisfied clients</p>
          <div className="flex justify-center gap-2">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="text-2xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.05 }}
              >
                😊
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
