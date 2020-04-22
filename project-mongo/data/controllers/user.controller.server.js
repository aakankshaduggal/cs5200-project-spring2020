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
                }else if(user.userType == 'Subscriber'){
                    //res.send(' you are not allowed to acces the data')
                    res.redirect('http://localhost:3001/subDashboard')
                }
                else{
                    res.redirect('http://localhost:3001/cusDashboard')
                }
            }))

    app.post('/ammount/paidby/user',(req,res)=>
        userdao.findammount(req.body.name)
            .then(result =>{
                var sum=0;

                for(i=0; i<result.length; i++){
                    if(result[i].price[0].ammount) {
                        sum = sum + result[i].price[0].ammount
                    }
                }
                res.send({sum,result})
            }))

    app.post('/create/newuser', (req, res)=>
        userdao.findallusers().sort({_id: -1}).limit(1)
            .then(result=>{
                var id=result[0]._id + 1
                var user_type=req.body.userType;
                if(req.body.userType === 'Subscriber') {
                    userdao.createuser({_id: id, gender: req.body.gender, userType: user_type,
                        subscriber: { subscriptionPlan: req.body.plan, OccupationType: req.body.occupation}})
                        .then(result => res.json(result));
                }else{
                    userdao.createuser({_id: id, gender: req.body.gender, userType: user_type,
                        customer: { isTourist: true}})
                        .then(result => res.json(result));
                }
            }))

    app.post('/update/subscriber', (req, res)=>
        userdao.finduser(req.body.name)
            .then(result =>{
                var id=req.body.name
                if(req.body.userType === result.userType && req.body.userType === 'Subscriber' ){
                    console.log(id,req.body.plan,req.body.occupation)
                    return userdao.updatesubscriberplan(id,req.body.plan,req.body.occupation)
                }else{
                    return userdao.updatesubscribertocustomer(id)
                }

            })
            .then(result => res.json("Updated")))

}