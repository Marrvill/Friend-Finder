var path = require("path");



module.exports = function (app) {
   
// html routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/app/public/index.html"));
});

app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

// API routes
app.get("/api/friends", (req, res) => {
    return res.json(friends);
});

};

