/**
 * Title: Colored console messages
 * Description: Display messages in terminal with proper colors
 * Author: Hasibul Islam
 * Date: 20/11/2022
 */

/* external import */
const colors = require("colors");

/* set colors as theme */
colors.setTheme({
  success: "green",
  error: "red",
});

exports.successMessage = (message) => {
  console.log(`Success: ${message}`.success.bold);
};

exports.errorMessage = (message) => {
  console.log(`Error: ${message}`.error.bold.italic);
};
