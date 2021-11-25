document.getElementById('btn').addEventListener('click', makerequest)
//Promise then
// function makerequest() {
//     console.log("Button Clicked");
//     const myInit = {
//         method: 'POST',
//         Headers: {
//             'Accept': 'application/json',

//             'Content-Type': 'application/json'
//         },
//         body: '{ "name": "we","job": "DevOps"}'
//     }
//     fetch('https://reqres.in/api/users', myInit)
//         .then(
//             (res) => {
//                 if (!res.ok) {
//                     throw Error(res.statusText);
//                 }

//                 return res.json()
//             }
//         ).then(
//             (data) => {
//                 console.log(data);
//             }
//         ).catch(
//             (error) => {
//                 console.log(error);
//             }
//         )
// }

async function makerequest(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let job = document.getElementById('job').value;


    console.log("Button clicked");
    try {
        const myInit = {
            method: 'POST',
            Headers: {
                'Accept': 'application/json',

                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, job: job })
        }
        const res = await fetch("https://reqres.in/api/users", myInit)
        if (!res.ok) {
            throw Error(res.statusText)
        }

        const data = await res.json();
        console.log(data);


    } catch (error) {
        console.log(error);

    }
}