const obj = {
    booleanOnly: true,
}

console.log(obj.booleanOnly)
console.log(obj.notFound)

const checkingObj = new Proxy(obj, {
    get:(obj,property) =>{
        if(obj.hasOwnProperty(property)) return obj[property];
        throw new Error('Property doenst exist')
    }, 
    set:(obj,property, value) =>{
        if(property == 'booleanOnly' && typeof value != 'boolean'){
            throw new Error('The propert can only to be set as a boolean');
        }
        return Reflect.set(obj, property, value)
    }
})

checkingObj.booleanOnly = 'a string'