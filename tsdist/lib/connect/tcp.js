'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/*
  variables port and host can be removed since
  you have all required information in opts object
*/
function buildBuilder(client, opts) {
    var net = require('net');
    var port, host;
    opts.port = opts.port || 1883;
    opts.hostname = opts.hostname || opts.host || 'localhost';
    port = opts.port;
    host = opts.hostname;
    return net.createConnection(+port, host);
}
exports.buildBuilder = buildBuilder;
//# sourceMappingURL=tcp.js.map