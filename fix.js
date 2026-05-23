import fs from 'fs';
const file = 'src/lib/seed-cases.ts';

try {
  let data = fs.readFileSync(file, 'utf8');

  // 1. Replace all variations of smart single quotes with a standard single quote
  data = data.replace(/[‘’`´\u2018\u2019\u201A\u201B]/g, "'");
  
  // 2. Replace all variations of smart double quotes with a standard double quote
  data = data.replace(/[“”«»\u201C\u201D\u201E\u201F]/g, '"');
  
  // 3. Replace non-breaking and weird visible spaces with a standard space
  data = data.replace(/[\u00A0\u2002-\u200A\u3000]/g, ' ');
  
  // 4. DELETE invisible zero-width characters entirely
  data = data.replace(/[\u200B-\u200D\uFEFF]/g, '');

  fs.writeFileSync(file, data, 'utf8');
  console.log('Success! The ultimate scrub is complete.');
} catch (err) {
  console.error('Error:', err);
}