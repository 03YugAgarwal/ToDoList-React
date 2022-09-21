const { Router } = require('express')
const router = Router();
const List = require('../database/schemas/List')


// Creating list item
router.post('/create', (req, res, next) => {
    const { topic, tag } = req.body;
    if (!topic) {
        console.log("Topic is empty");
    }
    if (topic && tag) {
        var newListItem = new List()
        newListItem.topic = topic
        newListItem.tag = tag;
        newListItem.save((err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                res.sendStatus(201)
            }
        })
    }
    if (topic) {
        var newListItem = new List()
        newListItem.topic = topic
        newListItem.save((err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                res.sendStatus(201)
            }
        })
    }

})

// Retrieving items
router.get('/findall', (req, res) => {
    List.find((err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
});

// Delete list item
router.post('/delete', (req, res) => {
    List.findByIdAndDelete((req.body.id),
        (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data Deleted!");
            }
        });
})

// Update list item
router.post('/update', (req, res) => {
    List.findByIdAndUpdate((req.body.id),
        { topic: req.body.topic },
        (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data updated!");
            }
        })
})

module.exports = router