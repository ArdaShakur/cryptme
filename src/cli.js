#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
const crypto_1 = __importDefault(require("crypto"));
const options = program.opts();
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
program.option(`-c, --convert`, "app environment");
let label = rl.question("Please write: ", (input) => {
    // console.log('Please write: ')
    let result = crypto_1.default.createHmac("sha256", input).digest("hex");
    console.log(result);
    rl.on("close", () => {
        console.log("Have a great day!");
        process.exit(0);
    });
});
program.parse(process.argv);
if (options.convert)
    label;
