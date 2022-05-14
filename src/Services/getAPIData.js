import axios from "axios"

const getAPIData = async (data) => {
    const token = localStorage.getItem('token')
    const configData = {
        url: "https://ecommerce-exercise-backend.herokuapp.com",
        headers: {
            'accept': 'application/json',
            // 'X-CSRFToken': token,
            Authorization: `Bearer ${token}`
        },
        // auth: {
        //     username: 'elvisrodriguezc@gmail.com',
        //     password: 'Ee40486773.*'
        // },
        method: data.method,
        params: data.params,
        data: data.data
    }
    switch (data.type) {
        case "login":
            configData.url += "/login/";
            break;
        case "categories":
            configData.url += "/categories/";
            break
        case "products":
            configData.url += "/products/"
            break
        case "product":
            configData.url += "/products/" + data.id
            break
        case "cart":
            configData.url += "/cart/"
            break
        case "cart_item":
            configData.url += "/cart/" + data.id
            break
        case "cart_item_delete":
            configData.url += "/cart/" + data.id
            break
        case "cart_add_product":
            configData.url += "/cart/" + data.id
            break
        default:
            configData.url += "/"
            break
    }
    const req = await axios(configData)
    return req.data
}

export { getAPIData }