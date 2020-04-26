const _ = require('underscore');
let allAdds = require('../adds.json');

class Advertiser {
    constructor() { }

    getAdds(req, res) {
        new Advertiser()._setCPI()
            .then(_ => {
                const data = allAdds.slice(0, 2)
                res.json(data)
            })
            .catch(err => res.status(404).json({ error: true, message: err.message }))

    }
    getAddsList(req, res) {
        const ad = _.sortBy(allAdds, 'id');
        res.json(ad)
    }

    saveAddConversions(req, res) {
        try {
            const data = req.body.data;
            const index = _.findIndex(allAdds, { name: data.name })
            if (index !== -1) {
                allAdds[index].count = allAdds[index].count + 1;
                res.json({ error: false, message: "Conversation save successfully" })
            } else {
                throw Error('Add not found');
            }
        } catch (err) {
            res.status().json({ error: true, message: "Sorry! unable to process request" })
        }
    }

    _setCPI() {
        const self = this;
        return new Promise((resolve, reject) => {
            for (let add of allAdds) {
                add.cpi = self._generateRandomNumber(1, allAdds.length)
            }
            allAdds = _.sortBy(allAdds, 'cpi').reverse();
            resolve(true);
        });
    }
    _generateRandomNumber(min = 1, max = 100) {
        return Math.floor(Math.random() * (max - min) + min)
    }
}
module.exports = Advertiser;