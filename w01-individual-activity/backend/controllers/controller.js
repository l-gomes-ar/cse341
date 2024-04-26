const retrieve = require("../database/connection")

async function retrieveData(req, res) {
    try {
        const data = await retrieve();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.send("An error ocurred whilst trying to retrieve the data");
    }
}

module.exports = { retrieveData };