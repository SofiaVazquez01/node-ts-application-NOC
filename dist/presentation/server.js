"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const check_service_1 = require("../domain/use-cases/checks/check-service");
const cron_service_1 = require("./cron/cron-service");
class Server {
    static start() {
        console.log('Server started....');
        cron_service_1.CronService.createJob('*/5 * * * * *', () => {
            // const date = new Date();
            // console.log('5 seconds',date);
            const url = 'https://google.com';
            new check_service_1.CheckService(() => console.log(`${url} is ok`), (error) => console.log(error)).execute(url);
            // new CheckService().execute('http://localhost:3000');
        });
    }
}
exports.Server = Server;
// Server.start();
