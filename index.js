var jslt = require("jslt");
let fs = require('fs');

exports["cloud-functions-test"] = (req, res) => {

   fs.readFile('jslt', function(err, template) {
      let message = template.toString();
      console.log(message);
      res.status(200).send(message);
   });

}
