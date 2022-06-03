var filter = {'first_name':'Antonio'}
var update = {'$set':{'hobby':'pingpong'}}

try {
    cursor = db.people.updateMany(filter,update)
}
catch (e) {
    print(e)
}

printjson(cursor)