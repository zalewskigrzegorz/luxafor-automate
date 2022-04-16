import processWindows  from 'node-process-windows';
import { LuxaFlag } from 'luxa-driver';

import config  from './config.json' assert { type: 'json' };

const luxa = LuxaFlag.findOne();

await luxa.flash('#f73772', {times:3, duration:10})
await luxa.configure({ brightness: Number(config.brightness) });

const checkProcess = () =>
{

  processWindows.getProcesses(async (_err, processes) => {

      const match = config.rules.find((rule) => {
        if( processes.find((process=> process.processName === rule.processName)))
        {
          return rule;
        }
      });
      console.log({match});
      if (match) {
        await luxa.fade(match.color, {duration: Number(config.animationTime)})
      }
      else{
        await luxa.fade(config.defaultColor, {duration: Number(config.animationTime)})
      }
    }
  );
}

process.stdin.resume();//so the program will not close instantly

async function exitHandler(options, exitCode) {
  await luxa.off();
  if (exitCode || exitCode === 0) console.log(exitCode);
  if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true,}));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

checkProcess();
setInterval(() => {
  checkProcess();
}, Number(config.checkInterval)*1000)
