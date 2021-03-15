#!/usr/bin/env node

import { Command, option } from "commander";
const program = new Command();
import crypto from "crypto";
const options = program.opts();
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

program.option(`-c, --convert`, "app environment");

let label: any = rl.question("Please write: ", (input) => {
  // console.log('Please write: ')

  let result = crypto.createHmac("sha256", input).digest("hex");
  console.log(result);

  rl.on("close", () => {
    console.log("Have a great day!");
    process.exit(0);
  });
});

program.parse(process.argv);

if (options.convert) label;
