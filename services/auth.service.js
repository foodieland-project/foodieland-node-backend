const rabbitSender = require('../rabbit/sender');
const EXCHANGE_NAME = "Order";
const loginRepository = require('../repository/login.repository');
const logoutRepository = require('../repository/logout.repository');
const registerRepository = require('../repository/register.repository');

exports.login = async (id, body, res) => {
    const order = await loginRepository.get(id);
    if (order.status == "updated" || order.status == "created") {
        await loginRepository.confirm(id, body)

        res.status(202).send(newLog.log);
    } else {
        res.status(400).send(`Cant confirm an order when its ${order.status}`);
    }
};

exports.logout = async (id, body, res) => {
    const order = await logoutRepository.get(id);
    if (order.status == "updated" || order.status == "created") {
        const newLog = await logoutRepository.new(`Order confirmed :${id}.`);

        await logoutRepository.confirm(id, body)

        res.status(202).send(newLog.log);
    } else {
        res.status(400).send(`Cant confirm an order when its ${order.status}`);
    }
};

exports.register = async (id, body, res) => {
    const order = await registerRepository.get(id);
    if (order.status == "updated" || order.status == "created") {
        const newLog = await logRepository.new(`Order confirmed :${id}.`);

        await registerRepository.confirm(id, body)

        res.status(202).send(newLog.log);
    } else {
        res.status(400).send(`Cant confirm an order when its ${order.status}`);
    }
};
