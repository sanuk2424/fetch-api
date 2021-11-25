document.getElementById('btn').addEventListener(
    "click", makerequest
)
//Promise Then | Console | Showing Data in Browser
// function makerequest() {
//     console.log("Button CLiked");
//     const promiseObj = fetch('data.txt');
//     promiseObj.
//         then((res) => {
//             console.log(res);
//             return res.text();
//         }).then((data) => {
//             console.log(data);
//             document.getElementById('data').innerText = data;

//         }).catch(
//             (error) => {
//                 console.log(error);

//             });

// }

//Promise Then | Console | Error | Showing Data in Browser
// function makerequest() {
//     console.log("Button clicked");
//     fetch('data.txt')
//         .then(
//             (res) => {
//                 console.log(res);
//                 if (!res.ok) {
//                     throw Error(res.statusText)
//                 }
//                 return res.text();
//             }

//         ).then(
//             (data) => {
//                 console.log(data);
//                 document.getElementById('data').innerText = data
//             }
//         ).catch(
//             (error) => {
//                 console.log(error);
//             }
//         )
// }

//Async | await | Error handling | Console |Showing Data in Browser
async function makerequest() {
    console.log("Button Cliked");
    try {
        const res = await fetch('data.txt');
        console.log(res);
        if (!res.ok) {
            throw Error(res.statusText)
        }
        const data = await res.text()
        console.log(data);
        document.getElementById('data').innerText = data;

    } catch (error) {
        console.log(error);

    }



}