const controller = require("../controllers/controller");

module.exports = (app) => {
    // Route for retrieving data from professionals db
    app.get("/professional", controller.retrieveData);
};