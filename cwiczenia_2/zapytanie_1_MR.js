var mapper = function() {
    var weight = parseFloat(this.weight)
    var height = parseFloat(this.height)
    emit(this.sex, {count: 1, weight: weight, height: height})
}

var reducer = function(keys, values) {
    var output = {count: 0, weight: 0, height: 0}
    values.forEach(value => {
        output.count += value.count
        output.weight += value.weight
        output.height += value.height
      })
    return output
}

var finalizer =  function(key,value) {
    value.avg_weight = value.weight / value.count
    value.avg_height = value.height / value.count
    delete value.count
    delete value.weight
    delete value.height
    return value
  }

db.people.mapReduce(
    mapper,
    reducer,
    { out: "map_reduce_results",
    finalize: finalizer }
)

var cursor = db.map_reduce_results.find().sort({_id: 1}).limit(10).toArray()

printjson(cursor)
