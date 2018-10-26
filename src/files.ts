const fs = require('fs');
const isFileExist = (path: string) => {
  try {
    fs.statSync(path);
    return true
  } catch(err) {
    if(err.code === 'ENOENT') return false
  }
}

module.exports = {
  isFileExist,
  insert(path: string) {
    const fs = require('fs');
    fs.readFile(path, 'utf8', function(err: any, data: any) {
      if (err) throw err;
      console.log('OK: ' + path);
      console.log(data)
    });
  },
  create(path: string, content: string) {
    try {
      if (isFileExist(path)) {
        return "File already exists.";
      }
      fs.writeFile(path, content, (err: any) => {
        if (err) {
          throw err;
        }
      });
      return false;
    } catch(e) {
      console.log(e);
      return 'Error';
    }
  }
};
