const bcrypt = require('bcrypt');


class Helpers {
    static paginate(req) {
        const currentPage = parseInt(req.query.page) || Number(process.env.DEFAULT_PAGE);
        const itemsPerPage = parseInt(req.query.limit) || Number(process.env.DEFAULT_LIMIT);
        const offset = (currentPage - 1) * itemsPerPage;
        return { currentPage, itemsPerPage, offset }
    }

    static async hashed(password) {
        return await bcrypt.hash(password, 10)
    }
}

module.exports = Helpers;
