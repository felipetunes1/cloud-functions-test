var jslt = require("jslt");
let fs = require('fs');

exports["cloud-functions-test"] = (req, res) => {
   console.log(req.body.request);
   console.log(req.body.template);

   let message = JSON.parse(jslt.transform(req.body.request, { $fetch: JSON.parse(req.body.template) }));
   console.log(message);
   res.status(200).json(message);

}
