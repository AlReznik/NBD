var query = {'$expr':
                {'$gte':[{'$toDate':'$birth_date'}, ISODate("2001-01-01T00:00:00Z")]}}

var projection = {'_id':0,'first_name':1, 'last_name':1,'location.city':1,'birth_date':1}

var cursor = db.people.find(query, projection).limit(20).toArray()

printjson(cursor)