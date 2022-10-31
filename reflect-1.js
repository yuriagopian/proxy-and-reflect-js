const obj = {text: "Hello", count: 0};

Reflect.get(obj, "text");
Reflect.set(obj, "hello", true);
Reflect.deleteProperty(obj, "count");

console.log(obj)