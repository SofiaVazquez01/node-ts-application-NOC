import { envs } from "./config/plugins/envs.plugin";
import { Server } from "./presentation/server";
import 'dotenv/config';

(async()=>{
    main();
})();

function main() {
    Server.start();
    // console.log(process.env.MAILER_EMAIL,true);

    // console.log(envs);
}
// export const name: string = 'Fernando!!!';

// console.log(name);