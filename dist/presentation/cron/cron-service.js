"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
const cron_1 = require("cron");
class CronService {
    static createJob(cronTime, onTick) {
        const job = new cron_1.CronJob(cronTime, onTick);
        // new CronJob(
        //     '*/3 * * * * *', // cronTime
        //     function () {
        //         const date = new Date();
        //         console.log('3 second',date);
        //     }, // onTick
        // );
        job.start();
        return job;
    }
}
exports.CronService = CronService;
