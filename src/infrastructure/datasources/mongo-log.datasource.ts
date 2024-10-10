import { SeverityLevel } from './../../../node_modules/mongodb/src/mongo_logger';
import { LogModel } from "../../data/mongo";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class MongoLogDatasource implements LogDatasource{
    //creamos logs
    async saveLog(log: LogEntity): Promise<void> {
        const newLog = await LogModel.create(log);
        // await newLog.save();
        console.log('Mongo Log created',newLog.id);
        }
        //obtenemos los logs 
    async getLogs(serverityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        const logs = await LogModel.find({
            level:serverityLevel
        });
        // return logs.map(mongoLog => LogEntity.fromObject(mongoLog));
        return logs.map( LogEntity.fromObject);
        // throw new Error('Method not implemented');
    }
}