function serializeToJson(form){
    var result = form.serializeArray();
    var obj = {};

    result.forEach(function (item){
        obj[item.name] = item.value;
    })

    return obj;
}