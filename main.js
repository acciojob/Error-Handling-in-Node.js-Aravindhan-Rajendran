const fs = require('fs');
const path = require('path');

// Function to read and parse JSON file
function readJSONFile(filePath) {
  try {
    if (!filePath) {
      throw new Error('File path is undefined');
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    // Check for missing required data
    if (!data.name || data.age === undefined) {
      throw new Error('Missing required data');
    }

    console.log('Data:', data);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error('Invalid JSON file format');
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
files.forEach(file => {
  try {
    if (fs.existsSync(file)) {
      readJSONFile(file);
    } else {
      console.error(`File not found: ${file}`);
    }
  } catch (error) {
    console.error('Error during file processing:', error.message);
  }
});