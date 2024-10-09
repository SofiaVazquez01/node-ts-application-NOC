import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasources";
import { EmailService } from './email/email.service';


const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource(),
);
export class Server {
    public static start(){
        console.log('Server started....');

        // https://github.com/SofiaVazquez01/node-ts-application-NOC
        const emailService = new EmailService(fileSystemLogRepository);
        emailService.sendEmailWithFileSystemLogs({ to: ['lupizvazquez1995@gmail.com', 'sofia.sgav@gmail.com'] });
        // emailService.sendEmail({
        //     to:'sofia.sgav@gmail.com',
        //     subject:'Logs de sistema', 
        //     htmlBody:`<h3>Logs de sistema - NOC</h3>
        //     <p>Lorem velit non veniam ullamco ex eu laborum</p>
        //     <p>Ver logs adjuntos</p>`       })

            // console.log(emailService);
        // console.log(envs.MAILER_SECRET_KEY, envs.MAILER_EMAIL);
            // CronService.createJob(
            //     '*/5 * * * * *',
            //     ()=>{
            //         // const date = new Date();
            //         // console.log('5 seconds',date);
            //         // const url = 'http://localhost:3000';
            //         const url = 'http://google.com';
            //         new CheckService(
            //             fileSystemLogRepository,
            //             () => console.log(`${url} is ok`),
            //             (error) => console.log(error),
            //         ).execute(url);
            //         // new CheckService().execute('http://localhost:3000');
            //     }
            // );
           
       
    }
}

// Server.start();