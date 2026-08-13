const fs = require('fs');
const path = require('path');
const target = path.resolve(__dirname, '.next');
if (fs.existsSync(target)) {
  fs.rmSync(target, { recursive: true, force: true });
  console.log('Removed .next');
} else {
  console.log('.next does not exist');
}
