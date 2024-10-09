import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';
import { LogRepository } from '../../domain/repository/log.repository';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';


interface SendMailOptions{
    to:string | string[];
    subject:string;
    htmlBody:string;
   attachements?:Attachement[];
}

    interface Attachement{
        filename:string;
        path:string;
    }


export class EmailService{

    private transporter = nodemailer.createTransport({
        service:envs.MAILER_SERVICE,
        auth:{
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    });

    constructor(
        private readonly LogRepository: LogRepository,
    ){}

    async sendEmail(options:SendMailOptions): Promise<boolean>{

        const {to,subject,htmlBody,attachements=[]} = options;
        
        try {
            const sentInformation = await this.transporter.sendMail({
                to:to,
                subject:subject,
                html:htmlBody,
                attachments:attachements
            });

            const log = new LogEntity({
                level:LogSeverityLevel.low,
                message:'Email sent',
                origin:'email.service.ts',
                createdAt: new Date()
            })
            this.LogRepository.saveLog(log);
            // console.log(sentInformation);

            return true;
        } catch (error) {
            const log = new LogEntity({
                level:LogSeverityLevel.high,
                message:'Email not sent',
                origin:'email.service.ts',
                createdAt: new Date()
            })
            this.LogRepository.saveLog(log);
            return false;
        }
    }
    
    async sendEmailWithFileSystemLogs({ to }: { to: string | string[]; }){
        const subject = 'Logs del servidor';
        const htmlBody =`
        <h3>Logs de sistema - NOC</h3>
        <p>Lorem velit non veniam ullamco ex eu laborum</p>
        <p>Ver logs adjuntos</p>
        `;

        const attachements: Attachement[] = [
            {filename:'logs-all.log', path:'./logs/logs-all.log'},
            {filename:'logs-high.log', path:'./logs/logs-high.log'},
            {filename:'logs-medium.log', path:'./logs/logs-medium.log'}
        ];

        return this.sendEmail({to,subject,attachements,htmlBody});
    }
}