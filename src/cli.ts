#!/usr/bin/env node

import {Command, option} from 'commander';
const program = new Command();
import crypto from 'crypto'
const options = program.opts();

program
    .option('-c, --convert <label>', 'app environment');

let label: any = options.convert ? `${options.convert}` : '';

const hash = crypto.createHmac('sha256', label)
    .digest('hex');

program.parse(process.argv);

if (options.convert) console.log(hash)
