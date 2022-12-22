import * as fs from 'fs';
import { component } from './component-template.js';

// Grabbing component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./src/components/${name}/`;

// Throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error('A component with that name already exists.');

// Creating the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// Creating the actual files
// Component
fs.writeFile(`${dir}/${name}.jsx`, component(name), writeFileErrorHandler);
// Styles
fs.writeFile(`${dir}/styles.module.css`, '', writeFileErrorHandler);