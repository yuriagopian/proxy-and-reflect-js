const obj = {text: "Hello", count: 0};
const value = Reflect.get(obj, "text");

console.log(value);

const customObject = new Proxy(obj, {
    get: Reflect.get,
    set: Reflect.set
})

customObject.hello = true;

console.log(customObject.count)
console.log(customObject.hello)