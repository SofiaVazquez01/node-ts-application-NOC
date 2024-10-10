import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasources";
import { EmailService } from './email/email.service';
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { LogSeverityLevel } from "../domain/entities/log.entity";


// const fileSystemLogRepository 
const logRepository = new LogRepositoryImpl(
    new FileSystemDatasource(),
    // new MongoLogDatasource(),
);
const emailService = new EmailService(logRepository);
export class Server {
     public static async start(){
        console.log('Server started....');

        // https://github.com/SofiaVazquez01/node-ts-application-NOC
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository,
        // ).execute(['lupizvazquez1995@gmail.com', 'sofia.sgav@gmail.com'])



        // const emailService = new EmailService();
        // emailService.sendEmailWithFileSystemLogs({ to: ['lupizvazquez1995@gmail.com', 'sofia.sgav@gmail.com'] });
        // const emailService = new EmailService(fileSystemLogRepository);
        // emailService.sendEmailWithFileSystemLogs({ to: ['lupizvazquez1995@gmail.com', 'sofia.sgav@gmail.com'] });
        // emailService.sendEmail({
        //     to:'sofia.sgav@gmail.com',
        //     subject:'Logs de sistema', 
        //     htmlBody:`<h3>Logs de sistema - NOC</h3>
        //     <p>Lorem velit non veniam ullamco ex eu laborum</p>
        //     <p>Ver logs adjuntos</p>`       })

            // console.log(emailService);
        // console.log(envs.MAILER_SECRET_KEY, envs.MAILER_EMAIL);

        const logs = await logRepository.getLogs(LogSeverityLevel.low);
        console.log(logs);
            // CronService.createJob(
            //     '*/5 * * * * *',
            //     () => {
            //         // const date = new Date();
            //         // console.log('5 seconds',date);
            //         // const url = 'http://localhost:3000';
            //         const url = 'http://google.com';
            //         new CheckService(
            //             // fileSystemLogRepository
            //             logRepository,
            //             () => console.log(`${url} is ok`),
            //             (error) => console.log(error),
            //         ).execute(url);
            //         // new CheckService().execute('http://localhost:3000');
            //     }
            // );
           
       
    }
}

// Server.start();