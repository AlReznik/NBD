var query = {'sex':'Male','nationality':'Germany'}
var cursor = db.people.find(query).toArray()
printjson(cursor)