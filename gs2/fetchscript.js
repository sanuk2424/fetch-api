document.getElementById('btn').addEventListener('click',
    makerequest)
//Promise Then | Showing Data Console | SHowing data in Browser | Error Handling
// function makerequest() {
//     console.log("Button Cliked");
//     fetch("data1.json")
//         .then(
//             (res) => {
//                 console.log(res);
//                 if (!res.ok) {
//                     throw Error(res.statusText);
//                 }
//                 return res.json();
//             }
//         ).then(
//             (data) => {
//                 console.log("Name: ", data.name);
//                 console.log("Roll: ", data.roll);

//                 document.getElementById('data1').innerText = data.name
//                 document.getElementById('data2').innerText = data.roll
//             }
//         ).catch(
//             (error) => {
//                 console.log(error);
//             }
//         )

// }

//Async Await

async function makerequest() {
    console.log("Button Clikded");
    try {
        const res = await fetch('data.json');
        console.log(res);
        if (!res.ok) {
            throw Error(res.statusText)
        }
        const data = await res.json()
        console.log(data);
        document.getElementById('data1').innerText = data.name
        document.getElementById('data2').innerText = data.roll

    } catch (error) {
        console.log(error);
    }






}