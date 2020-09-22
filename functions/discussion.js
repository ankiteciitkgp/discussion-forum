const formattedReturn = require('./helpers/formattedReturn');
const getComments = require('./helpers/getComments');
const createComment = require('./helpers/createComment');
exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        return await getComments(event);
    } else if (event.httpMethod === 'POST') {
        return await createComment(event);
    } else {
        return formattedReturn(405, {});
    }
};
