export function validateRequired(value, message) {
  return value?.trim() ? null : message;
}

export function validateEmail(value) {
  if (!value?.trim()) return "Please enter your email address.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
    return "Please enter a valid email address.";
  }
  return null;
}

export function validatePhone(value) {
  if (!value?.trim()) return "Please enter your phone number.";
  const digits = value.replace(/\D/g, "");
  if (digits.length < 7) return "Please enter a valid phone number.";
  return null;
}
