"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import BookingModal from "./BookingModal";

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDownload = () => {
    toast.success("Successfully downloaded meal plan sample!", {
      duration: 4000,
      style: {
        background: "white",
        color: "#16a34a",
        border: "1px solid #16a34a",
      },
    });
  };
  return (
    <>
      <Toaster position="top-center" richColors />
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <section
        id="cta"
        className="py-24 px-4 bg-linear-to-br from-green-600 to-green-700"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Book your free 30-minute consultation today and take the first
              step towards a healthier you.
            </p>

            <motion.div
              className="flex gap-4 justify-center flex-wrap mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold px-8 py-4 rounded-lg transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                Book Free Consultation
              </motion.button>
              <motion.button
                onClick={handleDownload}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold px-8 py-4 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Meal Plan Sample
              </motion.button>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-green-100">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-green-100">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5★</div>
                <div className="text-green-100">Average Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
