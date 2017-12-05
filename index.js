console.log("我是标题2");
var a = 20;
var b = 30;
console.log("reba第三次修改");
console.log(b);
var c = "hello,man";
console.log(c);
var d = [1,2,3,4,5,6];
console.log(d);
console.log("我是最新的修改");
console.log("我是test02的修改");
console.log("我是test03的修改");
console.log("主分支第一次修改");
console.log("主分支第二次修改");
console.log("我是rebase分支的第一次修改");
console.log("我是rebase分支的第二次修改");
console.log("我是master分支的更改");
第一次更新
第二次更新
第三次更新
呼呼呼哈哈哈次更新
第四次更新
第五次更新
第六次更新

master分支更新1
master分支更新2

var mongoose = require("mongoose");
mongoose.createConnect("mongodb://127.0.0.1/test",{useMongoClient:true});
var connection = mongoose.connection;
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    name:String,
    age:Number,
    sex:Boolean,
    _id:Schema.Types.ObjectId
});

var Person = mongoose.model("Peron",PersonSchema,"dbname");

var person = new Person();

person.name = "jack";
person.age = 24;
person.sex = true;
person
.save()
.then(function(doc){
    console.log(doc);
})
.catch(function(err){
    console.error(err);
});
