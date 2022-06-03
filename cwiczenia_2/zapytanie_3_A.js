pipeline = [
    {'$group': {
        '_id':'$job',
        'number': {'$sum': 1}
        }
    },
    {'$count':'jobs'},
]

var cursor = db.people.aggregate(pipeline).toArray()
printjson(cursor)