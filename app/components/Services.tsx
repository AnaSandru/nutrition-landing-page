"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
  popular?: boolean;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services: Service[] = [
    {
      title: "Weight Management",
      description:
        "Achieve and maintain your ideal weight through sustainable eating habits",
      features: [
        "Customized calorie targets",
        "Macro-nutrient balancing",
        "Weekly progress tracking",
        "Recipe suggestions",
      ],
      icon: "⚖️",
    },
    {
      title: "Sports Nutrition",
      description:
        "Optimize performance and recovery with targeted nutrition strategies",
      features: [
        "Pre/post workout nutrition",
        "Performance meal timing",
        "Supplement guidance",
        "Competition prep plans",
      ],
      icon: "🏃",
      popular: true,
    },
    {
      title: "Health Conditions",
      description: "Manage diabetes, heart health, digestive issues, and more",
      features: [
        "Medical nutrition therapy",
        "Condition-specific plans",
        "Lab result interpretation",
        "Medication coordination",
      ],
      icon: "❤️",
    },
  ];

  const handleLearnMore = (index: number) => {
    setSelectedService(index);

    // Scroll to CTA section
    const ctaSection = document.getElementById("cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive nutrition solutions for every goal
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isSelected = selectedService === index;

            return (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg relative transition-all ${
                  isSelected
                    ? "ring-4 ring-black"
                    : service.popular
                      ? "ring-2 ring-green-600"
                      : "ring-2 ring-transparent"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-green-600 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={() => handleLearnMore(index)}
                  className={`w-full font-semibold px-6 py-3 rounded-lg transition ${
                    isSelected
                      ? "bg-black hover:bg-gray-800 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
