const fs = require('fs');
const path = require('path');

// Function to read and parse JSON file
function readJSONFile(filePath) {
  if (!filePath) {
    console.error('File path is undefined');
    return;
  }

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    // Check for missing required data
    if (!data.name || data.age === undefined) {
      console.error('Missing required data');
      return;
    }

    console.log('Data:', data);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error('Invalid JSON file format');
    } else if (error.code === 'ENOENT') {
      console.error(`File not found: ${filePath}`);
    } else {
      console.error('Error:', error.message);
    }
  }
}

// Paths to your JSON files
const files = [
  path.join(__dirname, 'invalid.json'),
  path.join(__dirname, 'valid.json'),
  path.join(__dirname, 'missingData.json'),
];

// Read and handle each file
files.forEach(readJSONFile);