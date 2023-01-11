const Flock = require("../modules/Flocks");
const Rein = require("../modules/Reins");
const Owner = require("../modules/Owners");
const { find } = require("lodash");


module.exports.database_get = async (req,res)  =>{
    
    Owner.find().then((result)=>{
        res.render('database',{owners: result});
    })
}

module.exports.database_post = async (req,res) =>{
    const {ownerID} = req.body
        Flock.find({eier:ownerID}).then((result)=>{
        res.status(201).json({flocks: result})
    })
}

module.exports.database_filter = async (req,res) =>{
    const {searchResult} = req.body
    let filtered
        Rein.find().then((result)=>{
            filtered = result.filter(raindeer => raindeer.navn.includes(searchResult))
            console.log(filtered)

        res.status(201).json({reinsdyr: filtered})
    })
}


module.exports.owner_post = async (req,res)=>{
    const {navn,personnummer,kontaktspråk,telefonnummer} = req.body
    console.log(req.body)
    try {
        //lager en user og en cookie med user id
        const eier = await Eier.create({navn,personnummer,kontaktspråk,telefonnummer})
        eier.save().then(doc =>{
            console.log(doc)
        }).catch(err =>{
            console.log(err)
        })
        res.status(201).json({eier: eier._id})

    } catch (err) {
        console.log("Got error", err)
        res.status(400)
    }
}
module.exports.flock_post = async (req,res)=>{
    const {eier,navn,serieinndeling,buemerke,bumerkeBilde} = req.body
    console.log(req.body)
    try {
        //lager en user og en cookie med user id
        const flock = await Flock.create({eier,navn,serieinndeling,buemerke,bumerkeBilde})
        flock.save().then(doc =>{
            console.log(doc)
        }).catch(err =>{
            console.log(err)
        })
        res.status(201).json({flock: flock._id})

    } catch (err) {
        console.log("Got error", err)
        res.status(400)
    }
}
module.exports.rein_post = async (req,res)=>{
    const {navn,serienummer,flokk,fødselsdato} = req.body
    console.log(req.body)
    try {
        //lager en user og en cookie med user id
        const rein = await Rein.create({navn,serienummer,flokk,fødselsdato})
        rein.save().then(doc =>{
            console.log(doc)
        }).catch(err =>{
            // console.log(err)
        })
        res.status(201).json({rein: rein._id})

    } catch (err) {
        console.log("Got error", err)
        res.status(400)
    }
}
