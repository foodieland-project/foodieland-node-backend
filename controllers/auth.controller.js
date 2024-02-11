const authService = require('../services/auth.service');

exports.login = async (req, res) => {
    try {
        req.body.status = 'confirmed';
        await orderService.confirm(req.params.id, req.body, res);
    } catch (e) {
        res.status(500).send({
            message: 'Failed to confirm new order.' + e
        });
    }
};

exports.register = async (req, res) => {
    try {
        req.body.status = 'confirmed';
        await orderService.confirm(req.params.id, req.body, res);
    } catch (e) {
        res.status(500).send({
            message: 'Failed to confirm new order.' + e
        });
    }
};

