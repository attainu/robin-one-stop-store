import mongoose from 'mongoose'

const Schema = mongoose.Schema

const shopkeeperSchema = new Schema ({

    userName : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : Schema.Types.Number,
        required : true
    },

    shops : [{
        type : Schema.Types.ObjectId,
        ref  : 'Shop' }]


   



})

const Shopkeeper = mongoose.model ('Shopkeeper', shopkeeperSchema)

export default Shopkeeper