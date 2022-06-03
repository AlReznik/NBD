pipeline = [
    {'$unwind':'$credit'},
    {'$group': {
        '_id':'$credit.currency',
        'amount': {
            '$sum': {'$toDouble':'$credit.balance'}
            }
        }
    },
    {'$sort':{'_id':1}}
]

var cursor = db.people.aggregate(pipeline).toArray()
printjson(cursor)