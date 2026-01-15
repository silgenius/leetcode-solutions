#!/usr/bin/env node

const { spawn } = require("child_process");

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Empty filename");
  process.exit(1);
}

const filename = args
  .map((arg) => arg.replace(/[^\w ]/g, ""))
  .filter(Boolean)
  .join("_");

const child = spawn("code", [`./${filename}.js`], {
  stdio: "inherit",
});

child.on("error", (err) => {
  console.error(err.message);
  process.exit(1);
});
