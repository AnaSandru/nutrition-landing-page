"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { BookingModalProps, FormData, FormErrors } from "../utils/types";
import { validateForm, validateField } from "../utils/validation";
import FormField from "../utils/FormField";

const INITIAL_FORM_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  goal: "",
};

const GOAL_OPTIONS = [
  { value: "", label: "Select your goal" },
  { value: "weight-loss", label: "Weight Loss" },
  { value: "weight-gain", label: "Weight Gain" },
  { value: "muscle-building", label: "Muscle Building" },
  { value: "sports-performance", label: "Sports Performance" },
  { value: "health-condition", label: "Manage Health Condition" },
  { value: "general-wellness", label: "General Wellness" },
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the errors in the form", {
        duration: 3000,
        style: {
          background: "white",
          color: "#dc2626",
          border: "1px solid #dc2626",
        },
      });
      return;
    }

    console.log("Form submitted:", formData);

    toast.success(
      "Consultation request sent! We'll contact you within 24 hours.",
      {
        duration: 4000,
        style: {
          background: "white",
          color: "#16a34a",
          border: "1px solid #16a34a",
        },
      },
    );

    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    if (error) {
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-linear-to-br from-green-600 to-green-700 p-6 rounded-t-2xl text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">
                      Book Free Consultation
                    </h2>
                    <p className="text-green-100 text-sm">
                      Let`s discuss your health goals
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-white hover:bg-white/20 rounded-full p-2 transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <FormField
                  label="Full Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  error={errors.name}
                  placeholder="John Doe"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  error={errors.email}
                  placeholder="john@example.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  error={errors.phone}
                  placeholder="+1 (555) 123-4567"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <FormField
                  label="Primary Goal"
                  name="goal"
                  type="select"
                  value={formData.goal}
                  error={errors.goal}
                  options={GOAL_OPTIONS}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <motion.button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg transition"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Request
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 border-2 border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold rounded-lg transition"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
