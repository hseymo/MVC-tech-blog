const sequelize = require("../config/connection")
const {User,Blog} = require("../models")

const users = [
    {

    }
]

const blogs = [
    {

    }
]

const plantSeeds = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

plantSeeds()