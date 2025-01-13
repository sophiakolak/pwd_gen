#!/usr/bin/env node

import * as readline from "readline";

// Function to generate random passwords
function generatePassword(
  length: number,
  options: { includeNumbers: boolean; includeSymbols: boolean; includeUppercase: boolean }
): string {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
  let characters = lowercase;

  if (options.includeUppercase) characters += lowercase.toUpperCase();
  if (options.includeNumbers) characters += numbers;
  if (options.includeSymbols) characters += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// Interactive CLI
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("=== Random Password Generator ===");

rl.question("Enter password length (default 16): ", (lengthInput) => {
  const length = parseInt(lengthInput) || 16;

  rl.question("Include numbers? (y/n, default y): ", (includeNumbersInput) => {
    const includeNumbers = includeNumbersInput.toLowerCase() !== "n";

    rl.question("Include symbols? (y/n, default y): ", (includeSymbolsInput) => {
      const includeSymbols = includeSymbolsInput.toLowerCase() !== "n";

      rl.question("Include uppercase letters? (y/n, default y): ", (includeUppercaseInput) => {
        const includeUppercase = includeUppercaseInput.toLowerCase() !== "n";

        const password = generatePassword(length, {
          includeNumbers,
          includeSymbols,
          includeUppercase,
        });

        console.log(`\nGenerated Password: ${password}`);
        rl.close();
      });
    });
  });
});