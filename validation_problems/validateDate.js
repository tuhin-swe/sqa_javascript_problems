//Check if given string is a valid date

function validateDate(dateStr) {
  const date = new Date(dateStr);
  return !isNaN(date.getTime()); 
}

// -------- Test Cases --------
console.log(validateDate("2025-09-11")); // true
console.log(validateDate("2025-02-31")); // false (Feb 31 invalid)
console.log(validateDate("invalid-date")); // false