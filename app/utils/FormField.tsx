import { motion } from "framer-motion";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "select";
  value: string;
  error?: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function FormField({
  label,
  name,
  type = "text",
  value,
  error,
  placeholder,
  options,
  onChange,
  onBlur,
}: FormFieldProps) {
  const inputClasses = `w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
    error
      ? "border-red-500 focus:border-red-500"
      : "border-gray-200 focus:border-green-600"
  }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-700 mb-1"
      >
        {label} *
      </label>

      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClasses}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClasses}
          placeholder={placeholder}
        />
      )}

      {error && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="text-red-500 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}
