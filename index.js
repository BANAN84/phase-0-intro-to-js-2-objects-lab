// Write your solution in this file!
let employee ={
    name:"moe",
    streetAdress: "haha123" 
}

function updateEmployeeWithKeyAndValue(employee,key,value){
  return {...employee,[key]:value}

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
   
    employee[key]=value
return employee
}

function deleteFromEmployeeByKey(employee,key){
    let obj={...employee}
    delete obj[key]
    return obj
}
/*destructivelyDeleteFromEmployeeByKey(): this function should work the same as
 deleteFromEmployeeByKey()but it should mutate the employee Object.*/
 
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee

}