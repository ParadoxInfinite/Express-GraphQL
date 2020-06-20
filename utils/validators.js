module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") errors.username = "Username cannot be empty";
  if (email.trim() === "") errors.email = "Email cannot be empty";
  else {
    const emailRegEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(emailRegEx))
      errors.email = "Email address needs to be valid";
  }
  if (password === "") errors.email = "Password cannot be empty";
  else if (password !== confirmPassword)
    errors.confirmPassword = "Passwords must match";
  return {
    errors,
    valid: Object.keys(errors).length == 0,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") errors.username = "Username cannot be empty";
  if (password === "") errors.password = "Password cannot be empty";
  return {
    errors,
    valid: Object.keys(errors).length == 0,
  };
};
