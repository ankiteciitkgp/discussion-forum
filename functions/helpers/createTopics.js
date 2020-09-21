const { topicTable } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    const fields = JSON.parse(event.body);
    try {
        const createdTopic = await topicTable.create([{ fields }]);
        return formattedReturn(200, createdTopic);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {});
    }
};
