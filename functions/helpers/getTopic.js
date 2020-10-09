const { topicTable } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    try {
        const url = event.path.split("/");
        id = url[url.length-1];
        const topics = await topicTable.select({
            filterByFormula: "{id} =" + id,
            view: "Grid view"
        }).firstPage();
        const formattedTopics = topics.map((topic) => ({
            rec_id: topic.id,
            ...topic.fields,
            createdTime: topic.createdTime
        }));
        return formattedReturn(200, formattedTopics);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {});
    }
};
