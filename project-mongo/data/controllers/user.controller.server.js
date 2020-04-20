const userdao=require('../daos/user.dao.server')

module.exports = (app) => {
    app.get('/admindashboard/users', (req, res)=>
        userdao.findallusers()
            .then(users => res.json(users)))

    app.post('/login', (req, res) =>
        userdao.examinerole(req.body.name)
            .then(user =>{

                if(user._id == 237){
                    //res.send(' you are '+ user.userType)
                    res.redirect('http://localhost:3001/adminDashboard')
                }else{
                    //res.send(' you are not allowed to acces the data')
                    res.redirect('http://localhost:3001/subDashboard')
                }
            }))

    app.post('/ammount/paidby/user',(req,res)=>
         userdao.findammount(req.body.name)
             .then(result =>{
                 var sum=0;
                 for(i=0; i<result.length; i++){

                     sum=sum+result[i].price[0].ammount
                 }
                 res.send({sum,result})
             }))

}