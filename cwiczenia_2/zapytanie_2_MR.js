var mapper = function() {
    this.credit.forEach(value => {
        emit(value.currency, parseFloat(value.balance))
    })
}

var reducer = function(keys, values) {
    return Array.sum(values)
}

var cursor = db.people.mapReduce(
    mapper,
    reducer,
    { out: "map_reduce_results"}
)

var cursor = db.map_reduce_results.find().sort({_id: 1}).toArray()

printjson(cursor)