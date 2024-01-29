const accountController = require('../controllers/accountController');
const partController = require('../controllers/partController');
const authenticateToken = require('../helper/verifyJWT'); 

module.exports = (app) => {
    app.get('/api/members', accountController.getMembers);
    app.post('/api/login', accountController.login);
    app.get('/api/get-account', authenticateToken, accountController.getMember);
    app.post('/api/create-account', accountController.createAccount);
    app.put('/api/edit-account', accountController.editAccount);

    app.get('/api/parts', partController.readParts);
    app.post('/api/add-part', partController.createPart);
    app.put('/api/update-part/:id', partController.updatePart);
    app.delete('/api/delete-part/:id', partController.deletePart);
}