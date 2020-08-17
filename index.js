var jslt = require("jslt");

exports["cloud-functions-test"] = (req, res) => {
   let message = jslt.transform({ someField: "test" }, { $fetch: "{{someField}}" });
   res.status(200).send(message);
}