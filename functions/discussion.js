const formattedReturn = require('./helpers/formattedReturn');
const getTopics = require('./helpers/getTopics');
const createTopics = require('./helpers/createTopics');
const deleteCourse = require('./helpers/deleteCourse');
const updateCourse = require('./helpers/updateCourse');
const getComments = require('./helpers/getComments');
const createComment = require('./helpers/createComment');
exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        return await getComments(event);
    } else if (event.httpMethod === 'POST') {
        return await createComment(event);
    } else if (event.httpMethod === 'PUT') {
        return await updateCourse(event);
    } else if (event.httpMethod === 'DELETE') {
        return await deleteCourse(event);
    } else {
        return formattedReturn(405, {});
    }
};
