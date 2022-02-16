import products from '../data/products.json'

function pathToUrls(path) {
    const arr = [];
    let urlSoFar = "";
    for (let i = 0; i < path.length; ++i) {
        urlSoFar += "/" + path[i];
        arr.push(urlSoFar);
    }
    return arr;
}

function getProductsArray(obj, path, products=[]) {
    if (obj.id) {
        const tags = obj.tags || [];
        return (Object.assign(
            obj,
            {path: pathToUrls(path), tags: tags.concat(Array.from(path))}
        ))
    }

    for (let key of Object.keys(obj)) {
        const result = getProductsArray(obj[key], [...path, key], products);
        if (!result.length)
            products.push(result);
    }

    return products;
}

/**
 * wordpress
 ** ||
 ** \/
 * creative => miles
 ** ||
 ** \/
 * deneb
 */

export const ProductsArray = getProductsArray(products, []);