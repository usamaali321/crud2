var mongoose = require("mongoose");
var productschema = mongoose.Schema({
    name:String,
    fee:Number,
    docid:String,
    appointments: Number,
});
const productmodel = mongoose.model("products",productschema);

module.exports=productmodel;