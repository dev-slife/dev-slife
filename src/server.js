/**
 * Author: dev.slife
 * Date Created: 5/10/26
 * Date Updated: 5/10/26
 * Description:
 *      Handles all main API communication between the frontend and backend.
 */



// --------------------------- IMPORTS & CONSTANTS --------------------------- //

const path = require("path");
const express = require("express");

const __root = path.dirname(__dirname);
const app = express();
const options = {
    index: path.join(__root, "index.html"),
    extensions: ['html']
}



// --------------------------- INITIALIZATION --------------------------- //

// Mount app
app.use(express.static(__root));
app.use(express.json());



// --------------------------- ROUTING --------------------------- //

app.get("/", (_, res) => {
    res.sendFile(path.join(__root, 'index.html'));
});



// --------------------------- RUNNING THE APP --------------------------- //

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`App listening on port ${PORT}`);
});