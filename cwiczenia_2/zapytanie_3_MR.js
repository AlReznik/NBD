var mapper = function() {
    emit(this.job, 1)
}

var reducer = function(keys, values) {
    return 'all_jobs'
}

db.people.mapReduce(
    mapper,
    reducer,
    { out: "map_reduce_results"}
)

var mapper_1 = function() {
    emit(this.value, 1)
}

var reducer_1 = function(keys, values) {
    return Array.sum(values)
}

db.map_reduce_results.mapReduce(
    mapper_1,
    reducer_1,
    { out: "map_reduce_total_results"}
)


var cursor = db.map_reduce_total_results.find().toArray()
printjson(cursor)