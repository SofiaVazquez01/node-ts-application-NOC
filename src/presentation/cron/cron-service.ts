import {CronJob} from 'cron';



type CronTime = string | Date;
type OnTick = ()=>void;
export class CronService{
    static createJob(cronTime:CronTime,onTick:OnTick):CronJob{
        const job = new CronJob(cronTime,onTick);
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