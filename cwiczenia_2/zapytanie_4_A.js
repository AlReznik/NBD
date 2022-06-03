pipeline = [
    {'$project': {
        'nationality':1,
        'bmi': {
            '$divide':[
                {'$toDouble':'$weight'},
                {'$pow':[
                    {'$divide':[{'$toDouble':'$height'},100]},2]
                    }
                ]
            }
        }
    },
    {'$group': {
        '_id':'$nationality',
        'max_bmi': {'$max': '$bmi'},
        'min_bmi': {'$min': '$bmi'},
        'avg_bmi': {'$avg': '$bmi'}
        }
    },
    {'$sort':{'_id':1}}
]

var cursor = db.people.aggregate(pipeline).toArray()
printjson(cursor)