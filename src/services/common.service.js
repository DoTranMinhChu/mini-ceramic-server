
const removeUndefinedFieldsFromObject = (object) => {
    Object.keys(object).forEach(key => object[key] === undefined ? delete object[key] : {});
}


module.exports = {
    removeUndefinedFieldsFromObject
}