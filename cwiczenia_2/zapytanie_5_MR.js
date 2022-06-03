db.people.mapReduce(
    function() {emit(null, 1)},
    function(keys, values) {return Array.sum(values)},
    { out: "map_reduce_total_docs",
    query: {'sex':'Female', 'nationality':'Poland'}}
)

var mapper = function() {
    this.credit.forEach(value => {
        emit(value.currency, parseFloat(value.balance))
    })
}

var reducer = function(keys, values) {
    return {total:Array.sum(values), average:Array.sum(values)/total_docs}
}

db.people.mapReduce(
    mapper,
    reducer,
    { out: "map_reduce_results",
    query: {'sex':'Female', 'nationality':'Poland'},
    scope:{total_docs:db.map_reduce_total_docs.find().toArray()[0]['value']}}
)

var cursor = db.map_reduce_results.find().sort({_id: 1}).toArray()

printjson(cursor)