require('dotenv').config();
var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
);
const topicTable = base('Topics');
const commentsTable = base('Comments');

module.exports = { topicTable, commentsTable };
