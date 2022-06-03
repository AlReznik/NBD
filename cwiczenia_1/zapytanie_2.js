var query = {'sex': 'Female', 'nationality': 'China'}
var cursor = db.people.findOne(query)
printjson(cursor)