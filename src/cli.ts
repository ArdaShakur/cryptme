#!/usr/bin/env node

import { Command, option } from "commander";
const program = new Command();
import crypto, { Hash } from "crypto";
const options = program.opts();
import readline from "readline";

const rl = readline.createInterface({
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
  })
}
if (options.base46) {
  rl.question("Please write: ", (input) => {
    let binary = Buffer.from(input, 'utf-8');
    let base46Data = binary.toString('base64');
    console.log(base46Data);
  })
}
