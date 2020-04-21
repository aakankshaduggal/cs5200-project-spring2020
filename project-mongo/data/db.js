const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://priyankachapala:2004Priyanka@project-ssy8s.mongodb.net/project',{useNewUrlParser: true, useUnifiedTopology: true});

console.log("connected");
//const managementdao=require('./daos/management.dao.server')

//managementdao.populateusers();

//managementdao.populatestations();

//managementdao.populatepayments();

//managementdao.populatetrips();

//managementdao.deleteuser();