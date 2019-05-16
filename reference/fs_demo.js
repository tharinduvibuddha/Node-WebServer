const fs = require('fs');
const path = require('path');

//create folder
//fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
//    if(err) throw err;
//    console.log('Folder created..');
//}
//);

//Create and writing to file
// fs.writeFile(
//     path.join(__dirname, '/test','hello.txt'),
//     'Hello World!',
//     err => {
//         if (err) throw err;
//         console.log('File Writting to..');

//         fs.appendFile(
//             path.join(__dirname, '/test','hello.txt'),
//             'I love Node.js',
//             err => {
//                 if (err) throw err;
//                 console.log('File Writting to..');
//             }
//         ); 
        

//     }
// ); 

// fs.readFile(path.join(__dirname, '/test','hello.txt'),'utf8', (err,data)  =>{
//         if(err) throw err;
//        console.log(data);
//     }
//     );

    fs.rename(
        path.join(__dirname, '/test','hello.txt'),
        path.join(__dirname, '/test','helloWorld.txt'), 
        err  =>{
        if(err) throw err;
       console.log('File renamed...');
    }
    );