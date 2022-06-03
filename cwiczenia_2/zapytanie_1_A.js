var pipeline = [
    {'$group': {
        '_id':'$sex',
        'avg_height': {'$avg': {'$toDouble':'$height'}},
        'avg_weight': {'$avg': {'$toDouble':'$weight'}}
        }
    }
]

var cursor = db.people.aggregate(pipeline).toArray()
printjson(cursor)