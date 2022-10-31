const obj = {text: "Hello", count: 0};
const customObj = new Proxy(obj, {
    get: (obj, prop) =>{
        console.log(obj[prop] )
        return obj[prop];
    }
});


const textValue = customObj.text;
const countValue = customObj.count;