import { Service } from 'node-windows';
import {resolve}  from 'path';

const svc = new Service({
  name:'LuxaforAutomate',
  script: resolve('./index.js'),
  workingDirectory: resolve('./'),
  wait:2,
  grow: .5
});

svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

svc.uninstall();
