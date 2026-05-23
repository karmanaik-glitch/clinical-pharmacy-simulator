import fs from 'fs';
const file = 'src/lib/seed-cases.ts';

try {
  let data = fs.readFileSync(file, 'utf8');

  // This regex hunts down all Zero-Width Spaces, Non-Joiners, and Byte Order Marks
  data = data.replace(/[\u200B-\u200D\uFEFF\u2028\u2029]/g, '');

  fs.writeFileSync(file, data, 'utf8');
  console.log('Success! Deep scrub complete. All zero-width characters removed.');
} catch (err) {
  console.error('Error:', err);
}