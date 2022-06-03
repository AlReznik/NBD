var query = {'$and': 
                    [{'$expr':
                        {'$gte':[{'$toDouble':'$weight'},68]}},
                    {'$expr':
                        {'$lt':[{'$toDouble':'$weight'},71.5]}},
                    ]}

var projection = {'_id':0,'first_name':1, 'last_name':1,'weight':1 }

var cursor = db.people.find(query, projection).limit(20).toArray()
printjson(cursor)