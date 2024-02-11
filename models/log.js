const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const auth_log_conn_crs = process.env.MONGO_CONN_AUTH_LOG_CRS;

const LogSchema = new Schema({
    log: { type: String, max: 100 },
    created: { type: Date, default: Date.now }
});

const client_qrs_log = mongoose.client_qrs_log = mongoose.createConnection(client_log_conn_qrs, { useNewUrlParser: true });
const client_crs_log = mongoose.client_crs_log = mongoose.createConnection(auth_log_conn_crs, { useNewUrlParser: true });

client_qrs_log.on('error', function (err) {
    console.log("client_qrs_log" + err);
});
client_crs_log.on('error', function (err) {
    console.log("client_crs_log" + err);
});

const authCrsLog = client_crs_log.model('Log', LogSchema);
const authQrsLog = client_qrs_log.model('Log', LogSchema);

module.exports = {
    authCrsLog,
    authQrsLog
};

