var jslt = require("jslt");
let fs = require('fs');

exports["cloud-functions-test"] = (req, res) => {

   fs.readFile('demofile1.html', function(err, template) {
      let message = template;
      res.status(200).send(message);
   });

}
