const os = require("os");
const fs = require("fs");

const specification = os.hostname();

const dirPath = "task/data.txt";

const directoryName = "task";

function makeDir(directory) {
  if (directory !== true) {
    fs.mkdir(directory, (error) => {
      if (error) throw error;
    });
  }
  // }else if(directory == true){
  //     console.log("Directory Already Exists");
  // }
}

function writeSpec(directory, dirPath, specification = "") {
  if (dirPath == true) {
    fs.writeFile(directory / dirPath, specification, (error) => {
      if (error) throw error;
    });
  }
}

function readSpec(dirPath) {
  if (dirPath === true) {
    fs.readFile(dirPath, "utf8", (error, data) => {
      if (error) throw error;
      console.log(data.toString());
    });
  }
}

// makeDir('Adeel');
writeSpec();
// makeDir("task");
readSpec(dirPath);
// writeSpec("directoryName","dir_path","specification");
// spec = Object.values(spec);
// speckey = Object.keys(spec);

// console.log(Object.values(spec))

// let already = fs.mkdir('task_for_os',(error)=>{
//     console.log('Directory Created Successfully');
// })

// fs.writeFile('task_for_os/spec.txt', `${speckey} + "<br>"`,(error)=>{
//     if(error) throw error;
//     console.log('file is written');
// });

// fs.appendFile('task_for_os/spec.txt',spec,(error)=>{
//     if(error) throw error;
//     console.log('Data is added');
// })

// fs.writeFile
// console.log(os.EOL);
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.endianness());
// console.log(os.getPriority());
// console.log(os.devNull);
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.constants);
// console.log(os.loadavg());
// console.log(os.networkInterfaces())
// console.log(os.platform())
// console.log(os.release())
// console.log(os.setPriority([4,6]))
// console.log(os.tmpdir())
// console.log(os.totalmem())
// console.log(os.type())
// console.log(os.uptime())
// console.log(os.userInfo())
// console.log(os.GetVersionExW())
// console.log(os.constants.dlopen)
// console.log(os.constants.priority)
