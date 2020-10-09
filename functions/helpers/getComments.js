const { commentsTable } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    try {
        const url = event.path.split("/");
        id = url[url.length-1];
        const comments = await commentsTable.select({
            filterByFormula: "{topic_id} =" + id,
            sort: [{field: "id", direction: "desc"}],
            view: "Grid view"
        }).firstPage();
        const formattedComments = comments.map((comment) => ({
            rec_id: comment.id,
            createdTime: comment._rawJson.createdTime,
            ...comment.fields
        }));
        return formattedReturn(200, formattedComments);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {});
    }
};
