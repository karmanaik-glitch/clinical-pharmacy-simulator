import fs from 'fs';
const file = 'src/lib/seed-cases.ts';
try {
  let data = fs.readFileSync(file, 'utf8');
  
  // Surgically replace literal "\n" text that is breaking the syntax
  data = data.replace(/\\n\s*\{/g, ' {');
  data = data.replace(/(\[|,)\s*\\n\s*/g, '$1 ');
  data = data.replace(/^\s*\\n\s*/gm, '');
  
  fs.writeFileSync(file, data, 'utf8');
  console.log('Success! Surgically removed the literal backslash-n strings.');
} catch (err) {
  console.error('Error:', err);
}
