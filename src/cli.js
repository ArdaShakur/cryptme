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
program
    .option('-c, --convert <label>', 'app environment');
let label = options.convert ? `${options.convert}` : '';
const hash = crypto_1.default.createHmac('sha256', label)
    .digest('hex');
program.parse(process.argv);
if (options.convert)
    console.log(hash);
