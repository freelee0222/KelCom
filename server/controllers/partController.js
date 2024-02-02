const Part = require('../models/part-model')

module.exports = {
    createPart(req, res) {
        const { body } = req
        Part.create(body)
            .then(part => res.json(part))
            .catch(err => res.status(500).json(err))
    },
    readParts(req, res) {
        Part.find()
        .then(parts => res.json(parts))
        .catch(err => res.status(500).json(err))
    },
    updatePart(req,res) {
        const { body } = req
        const { id } = req.params
        Part.findByIdAndUpdate(id, body, { new: true })
          .then(part => res.json(part))
          .catch(err => res.status(500).json(err))
    },
    deletePart(req, res) {
        const { id } = req.params
        Part.findByIdAndDelete(id)
        .then(part => res.json(part))
        .catch(err => res.status(500).json(err))
    }
}