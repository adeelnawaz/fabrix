const categoriesService = require("../services/categories.service");

exports.getMainCategories = function (req, res) {
    categoriesService.getMainCategories()
        .then(categories => res.json(categories))
        .catch(next => {
            return res.status(400).json({
                error: next
            })
        });
};

exports.getChildCategories= function (req, res) {
    // TODO
    /*categoriesService.getChildCategories()
        .then(categories => res.json(categories))
        .catch(next => {
            return res.status(400).json({
                error: next
            })
        });*/
};
