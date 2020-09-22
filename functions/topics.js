const formattedReturn = require('./helpers/formattedReturn');
const getTopics = require('./helpers/getTopics');
const createTopics = require('./helpers/createTopics');
const getTopic = require('./helpers/getTopic');
exports.handler = async (event) => {
    if (event.httpMethod === 'GET' && event.path === '/api/topics') {
        return await getTopics(event);
    } else if(event.httpMethod === 'GET') {
        return await getTopic(event);
    } else if (event.httpMethod === 'POST') {
        return await createTopics(event);
    } else {
        return formattedReturn(405, {});
    }
};
