export function formateNumber(num) {
  if (num >= 1000000000000) {
    // Convert to trillions (T)
    return (num / 1000000000000).toFixed(1) + "T";
  } else if (num >= 1000000000) {
    // Convert to billions (B)
    return (num / 1000000000).toFixed(1) + "B";
  } else if (num >= 1000000) {
    // Convert to millions (M)
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    // Convert to thousands (K)
    return (num / 1000).toFixed(1) + "K";
  } else {
    // Return the number as is if it's less than 1000
    return num.toLocaleString(); // Add commas for better readability
  }
}
