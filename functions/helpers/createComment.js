const { topicTable, commentsTable } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    const fields = JSON.parse(event.body);
    const url = event.path.split("/");
    id = url[url.length-1];
    fields["topic_id"] = [id];
    try {
        const createdComment = await commentsTable.create([{ fields }]);
        return formattedReturn(200, createdComment);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {});
    }
};
