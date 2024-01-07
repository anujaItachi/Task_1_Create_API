const express = require('express');
const router = express.Router();
//const { sequelize } = require('./models'); // Assuming your Sequelize setup is in models/index.js
const { Sequelize } = require('sequelize');
const config = require('./config/config.json')[process.env.NODE_ENV || 'test'];
const sequelize = new Sequelize(config);

router.get('/healthz', async (req, res) => {
    try {
        // Set Cache-Control header
        res.setHeader('Cache-Control', 'no-cache');

        // Check database connectivity
        await sequelize.authenticate(); // This will throw an error if the connection is unsuccessful
        console.log("success");
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        console.log("unsuccess");
        res.sendStatus(503);
    }
});

module.exports = router;
