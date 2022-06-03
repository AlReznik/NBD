var filter = {
    'sex':'Female',
    'nationality':'Poland'
    }

var total = db.people.countDocuments(filter)

var pipeline = [
    {'$match': filter},
    {'$unwind':'$credit'},
    {'$group': {
        '_id':'$credit.currency',
        'amount': {
            '$sum': {'$toDouble':'$credit.balance'}},
        'average': {
            '$sum': {
                '$divide':[
                    {'$toDouble':'$credit.balance'},
                    total]
                }
            }
        }
    },
    {'$sort':{'_id':1}},
]

var cursor = db.people.aggregate(pipeline).toArray()
printjson(cursor)