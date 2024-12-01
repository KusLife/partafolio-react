export function validateName(name) {
  if (name.length < 3) {
    return 'Name must be at least 3 characters long.';
  }
  if (name.length > 50) {
    return 'Name cannot be longer than 50 characters.';
  }
  return '';
}

export function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email) ? '' : 'Please enter a valid email address.';
}

export function validateMessage(message) {
  if (message.length < 10) {
    return 'Message must be at least 10 characters long.';
  }
  return '';
}

export function validateFormData(formData) {
  const nameError = validateName(formData.name);
  const emailError = validateEmail(formData.email);
  const messageError = validateMessage(formData.message);

  return {
    isValid: !nameError && !emailError && !messageError,
    errors: { nameError, emailError, messageError },
  };
}
