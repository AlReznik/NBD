var query = {'$expr':
                {'$gt':
                    [{'$toDouble':'$height'},190]}}

try {
    cursor = db.people.deleteMany(query)
}
catch (e) {
    print(e)
}

printjson(cursor)