var jslt = require("jslt");
let fs = require('fs');

exports["cloud-functions-test"] = (req, res) => {

   fs.readFile('jslt', function(err, template) {
      let message = jslt.transform(req.body, { $fetch: JSON.parse(template.toString()) });
      console.log(JSON.parse(message));
      res.status(200).json(JSON.parse(message));
   });

}
