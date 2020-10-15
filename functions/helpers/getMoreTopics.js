const { topicTable } = require('./airtable');
const formattedReturn = require('./formattedReturn');
const fetch = require('node-fetch');

module.exports = async (event) => {
    let eBody = JSON.parse(event.body)
    try {
        var requestOptions = {
            method: 'GET',
            headers: {"Authorization": "Bearer " + process.env.AIRTABLE_API_KEY},
            redirect: 'follow'
        };
        var resp = await fetch("https://api.airtable.com/v0/appSCqrEiqkxSEQpG/Topics?sort[0][field]=modifiedTime&sort[0][direction]=desc&offset="+eBody.offset+"&pageSize=10&view=Grid view", requestOptions);
        
        const jsonResp = await resp.json();;
        return formattedReturn(200, jsonResp);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {});
    }
};
