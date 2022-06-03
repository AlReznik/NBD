var mapper = function() {
    var weight = parseFloat(this.weight)
    var height = parseFloat(this.height)
    var bmi = weight/(height/100)**2
    emit(this.nationality, {count: 1, bmi: bmi})
}

var reducer = function(keys, values) {
    var output = {count: 0, total_bmi: 0, min_bmi:Infinity, max_bmi:-Infinity}
    values.forEach(value => {
        output.count += value.count
        output.total_bmi += value.bmi
        if (value.bmi < output.min_bmi) {output.min_bmi = value.bmi}
        if (value.bmi > output.max_bmi) {output.max_bmi = value.bmi}
      })
    return output
}

var finalizer =  function(key,value) {
    value.avg_bmi = value.total_bmi / value.count
    delete value.count
    delete value.total_bmi
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