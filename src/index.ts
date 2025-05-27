#!/usr/bin/env node

import { Command } from 'commander';
import { getPackageVersion } from './utils/getPackageVersion';
import isJsonFile from './validations/isJsonFile';
import path from "node:path";
import buildTree from './use-cases/buildTree';
import NoJSONFileError from './exceptions/NoJSONFileError';
const archy = require('archy');

const program = new Command();

program.version(getPackageVersion());
program.name("pmtree").description("CLI tool to display Postman Workspaces Structures");

async function main() {
    program
        .argument('<file>', 'File to parse')
        .action(async (filename) => {
            if (!isJsonFile(filename)) {
                throw new NoJSONFileError(filename);
            }

            const filePath = path.join(process.cwd(), filename);

            const file = await import(filePath);
            const tree = buildTree(file);
            console.log(archy(tree));
        });

    program.parse(process.argv);
}

main();