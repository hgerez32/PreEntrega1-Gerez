const products = [
    {id: '1', name: 'Iphone 12', price: 1000, category: 'celular', img:'', stock: 25, description: 'Descripcion'},
    {id: '2', name: 'Samsung S23', price: 800, category: 'celular', img:'', stock: 10, description:'Descripcion Samsung S23'},
    {id: '3', name: 'Ipad 8va', price: 1200, category: 'tablet', img:'', stock: 5, description:'Descripcion Ipad'}

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id == productId))
        }, 500)
    })
}