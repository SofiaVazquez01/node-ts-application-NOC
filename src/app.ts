import { envs } from "./config/plugins/envs.plugin";
import { LogModel, MongoDatabase } from "./data/mongo";
import { Server } from "./presentation/server";
// import 'dotenv/config';

(async()=>{
    main();
})();

async function main() {
    await MongoDatabase.conect({
        mongoUrl:envs.MONGO_URL,
        dbName:envs.MONGO_DB_NAME,
    });

///Crear una colección = tables, documento = registro

    // const newLog = await LogModel.create({
    //     message:'Test message desde Mongo',
    //     origin:'App.ts',
    //     level:'medium'

    // });

    // await newLog.save();

    // console.log(newLog);

    // const logs = await LogModel.find();
    // console.log(logs[2].message);

    Server.start();
    // console.log(process.env.MAILER_EMAIL,true);

    // console.log(envs);
}
// export const name: string = 'Fernando!!!';

// console.log(name);