#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
const options = program.opts();
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
program
    .option(`-s, --sha256`, "SHA256")
    .option(`-b --base46`, "BASE46");
program.parse(process.argv);
if (options.sha256) {
    rl.question("Please write: ", (input) => {
        let binary = Buffer.from(input, 'utf-8');
        let sha256Data = binary.toString('hex');
        console.log(sha256Data);
    });
}
if (options.base46) {
    rl.question("Please write: ", (input) => {
        let binary = Buffer.from(input, 'utf-8');
        let base46Data = binary.toString('base64');
        console.log(base46Data);
    });
}
