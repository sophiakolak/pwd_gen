#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
// Function to generate random passwords
function generatePassword(length, options) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    let characters = lowercase;
    if (options.includeUppercase)
        characters += lowercase.toUpperCase();
    if (options.includeNumbers)
        characters += numbers;
    if (options.includeSymbols)
        characters += symbols;
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
rl.question("Enter password length (default 12): ", (lengthInput) => {
    const length = parseInt(lengthInput) || 12;
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
