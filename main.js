// Sample function to read and process JSON data
function processJSON(jsonData) {
  try {
    // Test Case 1: Valid JSON file
    const data = JSON.parse(jsonData);
    
    // Check for missing required fields (Test Case 3)
    if (!data.name || !data.id || !data.value) {
      throw new Error("Missing required data fields in JSON file.");
    }

    // Process and display the valid data
    console.log("Data processed successfully:", data);
  } catch (error) {
    // Test Case 2: Handling invalid JSON format
    if (error instanceof SyntaxError) {
      console.error("Invalid JSON format:", error.message);
    } else {
      // Test Case 3: Missing required fields
      console.error(error.message);
    }
  }
}

// Example usage:

// Valid JSON string (Test Case 1)
const validJSON = `{
  "name": "John Doe",
  "id": 123,
  "value": "Sample Data"
}`;

// Invalid JSON string (Test Case 2)
const invalidJSON = `{
  "name": "John Doe",
  "id": 123
  "value": "Sample Data"
}`; // Missing comma after "id": 123

// JSON with missing required fields (Test Case 3)
const missingFieldsJSON = `{
  "name": "John Doe"
}`; // Missing "id" and "value" fields

// Testing the different scenarios
processJSON(validJSON); // Should process and display the data
processJSON(invalidJSON); // Should catch and display a syntax error
processJSON(missingFieldsJSON); // Should detect and display a missing fields error
