// document.getElementById('8gb').addEventListener('click', function () {
//     getCount('memory-cost', 00)
//     // document.getElementById('memory-cost').innerText = 00

// })
// // onclik('8gb', 'memory-cost', 00)
// document.getElementById('16gb').addEventListener('click', function () {
//     getCount('memory-cost', 200)
//     // document.getElementById('memory-cost').innerText = 200

//     // onclik('16gb', 'memory-cost', 200)
// })
// document.getElementById('ssd1').addEventListener('click', function () {
//     getCount('storage-cost', 00)
//     // document.getElementById('storage-cost').innerText = 00
//     // onclik('ssd1', 'storage-cost', 00)
// })
// document.getElementById('ssd2').addEventListener('click', function () {
//     getCount('storage-cost', 500)
//     // document.getElementById('storage-cost').innerText = 500
//     // onclik('ssd2', 'storage-cost', 500)
// })
// document.getElementById('ssd3').addEventListener('click', function () {

//     // document.getElementById('storage-cost').innerText = 1500
//     getCount('storage-cost', 1000)

// })



// function onclik(id, updateID, price) {
//     document.getElementById(id).addEventListener('click', function () {



//     })
// }



function getCount(updateID, price) {
    document.getElementById(updateID).innerText = price
    const best = document.getElementById('best-price').innerText
    const memory = document.getElementById('memory-cost').innerText
    const storage = document.getElementById('storage-cost').innerText
    const delivary = document.getElementById('delivery-cost').innerText
    const totalPrice =
        parseInt(memory) + parseInt(best)
        + parseInt(storage)
        + parseInt(delivary)

    let total = document.getElementById('total-price')


    total.innerText = totalPrice





}

function onclik(updateID, updateItem, price) {
    document.getElementById(updateID).addEventListener('click', function () {


        getCount(updateItem, price)

    })
}

onclik('8gb', 'memory-cost', 00)
onclik('16gb', 'memory-cost', 200)
onclik('ssd1', 'storage-cost', 00)
onclik('ssd2', 'storage-cost', 500)
onclik('ssd3', 'storage-cost', 1000)