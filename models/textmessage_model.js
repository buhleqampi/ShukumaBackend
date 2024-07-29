const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for a TextMessage
const TextMessageSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['text', 'image', 'video', 'audio', 'file', 'location', 'contact'],
    default: 'text',
    description: 'Type of message. Allowed values: text, image, video, audio, file, location, contact.',
    example: 'text'
  },
  text: {
    type: String,
    required: true,
    description: 'The text to be sent.',
    example: 'hello'
  }
});

// Create the model from the schema
const TextMessage = mongoose.model('TextMessage', TextMessageSchema);

// Export the model
module.exports = TextMessage;
