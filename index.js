#!/usr/bin/env node
"use strict";
require = require('esm')(module /*, options*/);
require('./src/cli').cli(process.argv);
