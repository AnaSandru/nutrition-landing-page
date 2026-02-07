import { FormData, FormErrors } from "./types";

export const validateName = (name: string): string | undefined => {
  if (!name.trim()) {
    return "Name is required";
  }
  if (!/^[a-zA-Z\s'-]+$/.test(name)) {
    return "Name can only contain letters, spaces, hyphens, and apostrophes";
  }
  if (name.trim().length < 2) {
    return "Name must be at least 2 characters";
  }
  return undefined;
};

export const validateEmail = (email: string): string | undefined => {
  if (!email.trim()) {
    return "Email is required";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }
  return undefined;
};

export const validatePhone = (phone: string): string | undefined => {
  if (!phone.trim()) {
    return "Phone number is required";
  }
  const digitsOnly = phone.replace(/\D/g, "");
  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    return "Please enter a valid phone number (10-15 digits)";
  }
  return undefined;
};

export const validateGoal = (goal: string): string | undefined => {
  if (!goal) {
    return "Please select your primary goal";
  }
  return undefined;
};

export const validateForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {
    name: validateName(formData.name),
    email: validateEmail(formData.email),
    phone: validatePhone(formData.phone),
    goal: validateGoal(formData.goal),
  };

  // Remove undefined errors
  Object.keys(errors).forEach((key) => {
    if (errors[key as keyof FormErrors] === undefined) {
      delete errors[key as keyof FormErrors];
    }
  });

  return errors;
};

export const validateField = (
  name: string,
  value: string,
): string | undefined => {
  switch (name) {
    case "name":
      return validateName(value);
    case "email":
      return validateEmail(value);
    case "phone":
      return validatePhone(value);
    case "goal":
      return validateGoal(value);
    default:
      return undefined;
  }
};
