const fs = require("fs");

fs.readdir(process.argv[2], {withFileTypes: true},
    (err, files) => {
        if (err) throw err;
        console.log(files)

        files.map((obj)=>{
            if(obj.isFiles()) {
                console.log(`${obj.name}:File`)
            }
            else {
                console.log(`${obj.name}: Folder`)
            }
        })
    })