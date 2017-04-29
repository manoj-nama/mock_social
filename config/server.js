/**
 * Created by ttnd on 19/12/16.
 */
// server options.
const serverOptions = {
    api : {
        port: 3005
    },
    tcp : {
        port: process.env.PORT || 3000
    }
};

module.exports = serverOptions;