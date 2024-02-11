// Set up mongoose connection
const Order = require('../models/order');

exports.login = async (body) => {
    let order = new Order(
        {
            body
        }
    );

    order.save(function (err, newOrder) {
        order._id = newOrder._id;
        if (err) {
            console.log("error");
            throw err;
        }
    });
    return order;
};

exports.logout = async () => {
    return Order.find({});
};


exports.register = async () => {
    return Order.find({});
};
