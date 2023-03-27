import { getCustomOrders, getMetals, getSizes, getStyles } from "./database.js"
//const customOrders = getCustomOrders()
const buildOrderListItem = (order) => {
const metals = getMetals()

// Remember that the function you pass to find() must return true/false
// const order = getCustomOrders()
//added to add price to the string

const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)
// let totalCost = foundMetal.price

const size = getSizes()
let foundSize = size.find(
    (size) => {
        return size.id === order.sizeId
    }
)
// totalCost += foundSize.price

const style = getStyles()
let foundStyle = style.find(
    (style) => {
        return style.id === order.styleId
    }
)
// totalCost += foundStyle.price

const totalCost = foundStyle.price + foundSize.price + foundMetal.price
//new code
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li id="listorder">
        Order #${order.id} cost ${costString}
    </li>`
}
// 
export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getCustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

