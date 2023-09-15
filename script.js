//?chapter 12 to 13

// //?q1
// function checkCharacterType(input) {
//     const charCode = input.charCodeAt(0);
  
//     if (charCode >= 48 && charCode <= 57) {
//       return "Number";
//     } else if (charCode >= 65 && charCode <= 90) {
//       return "Uppercase Letter";
//     } else if (charCode >= 97 && charCode <= 122) {
//       return "Lowercase Letter";
//     } else {
//       return "Invalid Input";
//     }
//   }
  
// //?q2  

//   // Prompt the user for the first integer
// const firstInteger = parseInt(prompt("Enter the first integer:"));

// // Check if the input is a valid integer
// if (!isNaN(firstInteger)) {
//   // Prompt the user for the second integer
//   const secondInteger = parseInt(prompt("Enter the second integer:"));

//   // Check if the second input is a valid integer
//   if (!isNaN(secondInteger)) {
//     if (firstInteger === secondInteger) {
//       console.log("Both integers are equal.");
//     } else if (firstInteger > secondInteger) {
//       console.log(`The larger integer is: ${firstInteger}`);
//     } else {
//       console.log(`The larger integer is: ${secondInteger}`);
//     }
//   } else {
//     console.log("Please enter a valid second integer.");
//   }
// } else {
//   console.log("Please enter a valid first integer.");
// }

// //?q3

// Prompt the user for a number
// const userInput = parseFloat(prompt("Enter a number:"));

// // Check if the input is a valid number
// if (!isNaN(userInput)) {
//   if (userInput > 0) {
//     console.log("The number is positive.");
//   } else if (userInput < 0) {
//     console.log("The number is negative.");
//   } else {
//     console.log("The number is zero.");
//   }
// } else {
//   console.log("Please enter a valid number.");
// }

// //?q4

// Prompt the user for a character
// const inputChar = prompt("Enter a character (a single letter):");

// // Ensure that the input is a single character
// if (inputChar.length === 1) {
//   // Convert the input character to lowercase to handle uppercase input
//   const char = inputChar.toLowerCase();

//   // Check if the character is a vowel
//   if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     console.log("The character is a vowel.");
//   } else {
//     console.log("The character is not a vowel.");
//   }
// } else {
//   console.log("Please enter a single character.");
// }

// // ?q5
// // Step a: Store the correct password in a variable
// const correctPassword = "mySecretPassword";

// // Step b: Ask the user to enter their password
// const userPassword = prompt("Enter your password:");

// // Step c: Validate the two passwords
// if (userPassword === null || userPassword === "") {
//   console.log("Please enter your password.");
// } else if (userPassword === correctPassword) {
//   console.log("Correct! The password you entered matches the original password.");
// } else {
//   console.log("Incorrect password.");
// }
// //?q6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// //?q7

// // Prompt the user for the time input in 24-hour format (e.g., 1900)
// const userInput = prompt("Enter time in 24-hour format (e.g., 1900):");

// // Convert the user input to a number
// const time = parseInt(userInput);

// // Check if the input is a valid number
// if (!isNaN(time)) {
//   if (time >= 0 && time <= 2400) {
//     if (time >= 0000 && time < 1200) {
//       console.log("Good morning!");
//     } else if (time >= 1200 && time < 1700) {
//       console.log("Good afternoon!");
//     } else if (time >= 1700 && time < 2000) {
//       console.log("Good evening!");
//     } else {
//       console.log("Good night!");
//     }
//   } else {
//     console.log("Invalid time input. Please enter a time between 0000 and 2400.");
//   }
// } else {
//   console.log("Invalid input. Please enter a valid time in 24-hour format.");
// }

//?chapter 14 to 16

// //? q1
// const studentNames = [];
// studentNames.push("Alice");
// studentNames.push("Bob");

//??q2

// const studentNames = new Array();

//??q3

// const colors = ["red", "blue", "green", "yellow"];

//??q4
// const numbers = [1, 2, 3, 4, 5];
//??q5
// const booleanArray = [true, false, true, false, true];
//??q6
// const mixedArray = [1, "apple", true, null, { name: "John" }];
//??q7
// Declare and initialize an array with education qualifications
// const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// // Function to display the qualifications in the browser
// function displayQualifications() {
//   const qualificationsList = document.getElementById("qualifications-list");
  
//   // Clear any existing content in the list
//   qualificationsList.innerHTML = "";
  
//   // Loop through the qualifications and create list items to display them
//   for (let i = 0; i < qualifications.length; i++) {
//     const listItem = document.createElement("li");
//     listItem.textContent = qualifications[i];
//     qualificationsList.appendChild(listItem);
//   }
// }

// // Call the function to display qualifications when the page loads
// window.onload = displayQualifications;

//??q8
// // Declare arrays to store student names and scores
// const studentNames = ["Alice", "Bob", "Charlie"];
// const studentScores = [450, 480, 390];

// // Function to calculate percentages
// function calculatePercentage(score) {
//   return (score / 500) * 100;
// }

// // Display scores and percentages
// for (let i = 0; i < studentNames.length; i++) {
//   const name = studentNames[i];
//   const score = studentScores[i];
//   const percentage = calculatePercentage(score);
  
//   console.log(`${name}'s Score: ${score}`);
//   console.log(`${name}'s Percentage: ${percentage.toFixed(2)}%`);
//   console.log();
// }


//??q9

// Initialize an array with color names
// const colors = ["red", "blue", "green"];

// // Display the initial array
// console.log("Initial Array:", colors);

// // a. Add a color to the beginning of the array
// const addColorToBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(addColorToBeginning);

// // Display the updated array
// console.log("Array after adding to the beginning:", colors);

// // b. Add a color to the end of the array
// const addColorToEnd = prompt("Enter a color to add to the end:");
// colors.push(addColorToEnd);

// // Display the updated array
// console.log("Array after adding to the end:", colors);

// // c. Add two more colors to the beginning of the array
// const colorsToAdd = prompt("Enter two colors separated by a comma to add to the beginning:");
// const newColors = colorsToAdd.split(",");
// colors.unshift(...newColors);

// // Display the updated array
// console.log("Array after adding two colors to the beginning:", colors);

// // d. Delete the first color in the array
// colors.shift();

// // Display the updated array
// console.log("Array after deleting the first color:", colors);

// // e. Delete the last color in the array
// colors.pop();

// // Display the updated array
// console.log("Array after deleting the last color:", colors);

// // f. Add a color to a specific position/index
// const positionToAdd = parseInt(prompt("Enter the index to add a color:"));
// const colorToAdd = prompt("Enter the color to add at that index:");
// colors.splice(positionToAdd, 0, colorToAdd);

// // Display the updated array
// console.log("Array after adding a color at a specific index:", colors);

// // g. Delete color(s) from a specific position/index
// const positionToDelete = parseInt(prompt("Enter the index to delete color(s):"));
// const numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(positionToDelete, numberOfColorsToDelete);

// // Display the updated array
// console.log("Array after deleting color(s) from a specific index:", colors);



//? q10
// // Store student scores in an array
// const studentScores = [85, 92, 78, 95, 88];

// // Sort the array in ascending order
// studentScores.sort(function(a, b) {
//   return a - b;
// });

// // Display the sorted array
// console.log("Sorted Student Scores (Ascending):", studentScores);

//? q11
// // Initialize an array with city names
// const cities = ["New York", "Los Angeles", "Chicago", "San Francisco", "Miami"];

// // Create an empty array for selected cities
// const selectedCities = [];

// // Copy three elements from cities to selectedCities
// selectedCities.push(cities[0], cities[1], cities[2]);

// // Display the selectedCities array
// console.log("Selected Cities:", selectedCities);

// var arr = ["This ", " is ", " my ", " cat"];
// var combinedString = arr.join(""); // Use an empty string as the separator

// console.log(combinedString); // Output: "This is my cat"


//? q12

// Create a new empty array
// const fifoArray = [];

// // Store values one by one
// fifoArray.push("Value 1");
// fifoArray.push("Value 2");
// fifoArray.push("Value 3");

// // Access values in the order they were stored (FIFO)
// const firstValue = fifoArray.shift(); // Removes and returns "Value 1"
// const secondValue = fifoArray.shift(); // Removes and returns "Value 2"
// const thirdValue = fifoArray.shift(); // Removes and returns "Value 3"

// // Display the values in the order they were accessed
// console.log("First Value:", firstValue);
// console.log("Second Value:", secondValue);
// console.log("Third Value:", thirdValue);

//? q13
// Create a new empty array
// const fifoArray = [];

// // Store values one by one
// fifoArray.push("Value 1");
// fifoArray.push("Value 2");
// fifoArray.push("Value 3");

// // Access values in the order they were stored (FIFO)
// const firstValue = fifoArray.shift(); // Removes and returns "Value 1"
// const secondValue = fifoArray.shift(); // Removes and returns "Value 2"
// const thirdValue = fifoArray.shift(); // Removes and returns "Value 3"

// // Display the values in the order they were accessed
// console.log("First Value:", firstValue);
// console.log("Second Value:", secondValue);
// console.log("Third Value:", thirdValue);


//? q14

// Define an array of phone manufacturers
const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Generate the HTML for the dropdown/select menu
let dropdownHTML = '<select id="manufacturerSelect">';
for (let i = 0; i < phoneManufacturers.length; i++) {
  dropdownHTML += `<option value="${i}">${phoneManufacturers[i]}</option>`;
}
dropdownHTML += '</select>';

// Write the dropdown HTML to the document
document.write(dropdownHTML);

