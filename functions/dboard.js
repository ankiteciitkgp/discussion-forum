const formattedReturn = require('./helpers/formattedReturn');
const getTopics = require('./helpers/getTopics');
const createTopics = require('./helpers/createTopics');
const getTopic = require('./helpers/getTopic');
const getComments = require('./helpers/getComments');
const createComment = require('./helpers/createComment');
const verify  =  require("jsonwebtoken/verify");
require('dotenv').config();

exports.handler = async (event,context,callback) => {
    console.log(event.headers.cookie);
    // try {
    //     console.log(event.headers.cookie);
    //     let token = event.headers.cookie.split(`nf_jwt=`)[1].split(`;`)[0];
    //     console.log(token);
    //     var a = verify(token,process.env.JWT_SECRET);
    //     console.log(a);
    // } catch (err){
    //     console.log(err);
    //     return formattedReturn(403, {});
    // }

    if (event.httpMethod === 'GET' && event.path == '/api/dboard/topics') {
        return await getTopics(event);
    } else if (event.httpMethod === 'GET' && event.path.indexOf('/api/dboard/topic/')>-1) {
        return await getTopic(event);
    } else if (event.httpMethod === 'POST' && event.path == '/api/dboard/topic') {
        return await createTopics(event);
    } else if (event.httpMethod === 'GET' && event.path.indexOf('/api/dboard/comments/')>-1) {
        return await getComments(event);
    } else if (event.httpMethod === 'POST' && event.path.indexOf('/api/dboard/comment/')>-1) {
        return await createComment(event);
    } else {
        return formattedReturn(405, {});
    }
};
