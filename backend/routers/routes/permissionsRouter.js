const express = require('express')
const permissionsRouter = express.Router();
const {
    getAllPermessions,
    putPermession
} = require('../controllers/permissions')
permissionsRouter.get('/', getAllPermessions);
permissionsRouter.post('/:id', putPermession);
module.exports = {permissionsRouter}