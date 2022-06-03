var filter = {'job':'Editor'}
var update = {'$unset':{'email':1}}

try {
    cursor = db.people.updateMany(filter,update)
}
catch (e) {
    print(e);
}

printjson(cursor)