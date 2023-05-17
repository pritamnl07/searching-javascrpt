var personObj  = {
    "name":"pritam",
    "age":23
}

if(personObj.age > 24){
    personObj = { ...personObj, "author":"available"}
}else{
    personObj = { ...personObj, "author":"not available"}
}

console.log("personObj", personObj)