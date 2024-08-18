const fs = require('fs');

const filePath = process.argv[2];

// Define the required fields for the JSON file
const REQUIRED_FIELDS = ['name', 'age', 'email'];

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file ${filePath}: ${err}`);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    
    // Check for missing required fields
    const missingFields = REQUIRED_FIELDS.filter(field => !(field in jsonData));
    if (missingFields.length > 0) {
      console.error(`Missing required data: ${missingFields.join(', ')}`);
      return;
    }

    // Successfully read and validated JSON data
    console.log('Successfully read and validated JSON data:', jsonData);
  } catch (err) {
    console.error('Invalid JSON file format. Please provide a valid JSON file.');
  }
});
