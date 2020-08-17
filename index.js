var jslt = require("jslt");
let fs = require('fs');

exports["cloud-functions-test"] = (req, res) => {
   console.log(req.body.request);
   console.log(req.body.template);
   let template = unescape(req.body.template)

   let message = JSON.parse(jslt.transform(req.body.request, { $fetch: JSON.parse(template) }));
   console.log(message);
   res.status(200).json(message);

}
