var filter = {'location.city':'Moscow'}
var update = {'$set':{'location.city':'Moskwa'}}

try {
    cursor = db.people.updateMany(filter,update)
}
catch (e) {
    print(e)
}

printjson(cursor)