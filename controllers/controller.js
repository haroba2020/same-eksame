const Flock = require("../modules/Flocks");
const Rein = require("../modules/Reins");
const Owner = require("../modules/Owners");

module.exports.database_get = async (req,res)  =>{
    
    Owner.find().then((result)=>{
        res.render('database',{owners: result});
    })
}
module.exports.index_get = (req,res) =>{
    res.render('index')
}
module.exports.map_get = (req,res) =>{
    res.render('map')
}
module.exports.database_post = async (req,res) =>{
    const {ownerID} = req.body
    var reinArray = [];
    var counter = 0;
        Flock.find({eier:ownerID}).then((result)=>{
            result.forEach((flock)=>{
                Rein.find({flokk:flock.navn}).then((rein)=>{
                    reinArray.push(rein)
                    counter++
                    if(counter === result.length){
                        res.status(201).json({flocks: result, rein:reinArray})
                }
            })
        })
    })
}

module.exports.database_filter = async (req,res) =>{
    const {searchResult} = req.body

    var flockArray = [];
    Rein.find().then((result)=>{
        const filtered = result.filter(raindeer => !raindeer.navn.toLowerCase().indexOf(searchResult.toLowerCase()))
        console.log(filtered)
        var counter = 0
        filtered.forEach((filtRein)=>{
            Flock.find({navn:filtRein.flokk}).then((flockFiltered)=>{
                if(flockFiltered[0] && flockFiltered[0]._id && !flockArray.some(flock=>flock._id.toString() === flockFiltered[0]._id.toString())){
                    flockArray.push(flockFiltered[0])
                }
                counter++
                if(counter === filtered.length){
                    res.status(201).json({reinsdyr: filtered, flock: flockArray}) 
                }
            })
        })
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
