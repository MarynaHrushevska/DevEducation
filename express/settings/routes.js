module.exports = (app) => {
    const indexController = require('../Controller/indexController.js');
    const booksControllers = require('../Controller/booksControllers.js');
    app.route('/').get(indexController.index);
    app.route('/books').get(booksControllers.books);
    app.route('/books/add').post(booksControllers.add);
}
