var jslt = require("jslt");
let fs = require('fs');

exports["cloud-functions-test"] = (req, res) => {

   let message = JSON.parse(jslt.transform(req.body.request, { $fetch: JSON.parse(req.body.template) }));
   console.log(message);
   res.status(200).json(message);

}
