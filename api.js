const express = require('express');
const apiRouter = express.Router();

const envelopeRouter = require('./envelope.js');
apiRouter.use('/envelope',envelopeRouter)

module.exports = apiRouter