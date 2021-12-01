const {
    permissions
} = require('../../Data/Permissions')
const getAllPermessions = (req, res) => {
    res.send(permissions)
}
const putPermession = (req, res) => {
    const user = permissions.find((elem) => elem.userId === req.params.id);
    const newData = {
        type: req.body.type,
        place: req.body.place,
        numberOfPeople: req.body.numberOfPeople,
    }
    user.permission.push(newData)
    res.send(permissions);
}
module.exports = {
    getAllPermessions,
    putPermession
}