const obj = {
  text: "Hello World",
};

function AddStringUtil(obj) {
  return new Proxy(obj, {
    get: (obj, property) => {
      if (property.endsWith("Upper")) {
        const newProp = property.replace("Upper", "");
        return obj[newProp].toUpperCase();
      }

      if (property.endsWith("Lower")) {
        const newProp = property.replace("Lower", "");
        return obj[newProp].toLowerCase();
      }

      return Reflect.get(obj, property);
    },
  });
}


const customObj = AddStringUtil(obj);
console.log(customObj.text)

console.log(customObj.textUpper)
console.log(customObj.textLower)