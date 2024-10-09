

export enum LogSeverityLevel{
    low = 'low',
    medium = 'medium',
    high ='high',
}

export interface LogEntityOptions{
     level: LogSeverityLevel;
     message: string;
     createdAt: Date;
     origin:string;
     
}

export class LogEntity{

    public level: LogSeverityLevel;
    public message: string;
    public createdAt: Date;
    public origin:string;
    

    constructor(
        // message: string, level:LogSeverityLevel
        options:LogEntityOptions
    ){
        const { message,level,origin, createdAt=new Date()} = options;
        this.message = message;
        this.level = level;
        this.createdAt = createdAt;
        this.origin = origin;
    }

    static fromJson = (json:string):LogEntity=>{
        // JSON.parse(json);
        const {message, level,createdAt,origin} = JSON.parse(json);
        
        const log = new LogEntity({
            message:message,
            level: level,
            createdAt:createdAt,
            // origin:'log.entity.ts'
            origin:origin,
        });
        // log.createdAt = new Date(createdAt);
        return log;
    }
}