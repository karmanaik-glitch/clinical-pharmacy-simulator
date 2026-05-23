import fs from 'fs';
const file = 'src/lib/seed-cases.ts';

try {
  let data = fs.readFileSync(file, 'utf8');

  // Replace hidden non-breaking spaces with normal spaces
  data = data.replace(/\xA0/g, ' ');
  // Replace smart quotes and backticks with standard single quotes
  data = data.replace(/[‘’`]/g, "'");
  // Replace smart double quotes with standard double quotes
  data = data.replace(/[“”]/g, '"');

  fs.writeFileSync(file, data, 'utf8');
  console.log('Success! File successfully scrubbed.');
} catch (err) {
  console.error('Error finding or reading the file. Make sure you are in the root folder!', err);
}