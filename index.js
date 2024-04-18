const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const setupAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/', (req, res) => {
        res.send('Welcome to Node.js Backend');
    }
);

    app.listen(3000, () => {
        console.log(`Server started on port 3000`);
        
    });
}

setupAndStartServer();