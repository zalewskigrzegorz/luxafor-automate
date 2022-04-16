import processWindows  from 'node-process-windows'
  processWindows.getProcesses(async (_err, processes) => {
      console.dir(processes);
  });
