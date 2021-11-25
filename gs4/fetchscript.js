document.getElementById('btn').addEventListener('click',
    makerequest);
//Promis Then | Console | Browser | Error Handling
// function makerequest() {
//     console.log("Button Clicked");
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(
//         (res) => {
//             console.log(res);
//             if (!res.ok) {
//                 throw Error(res.statusText);
//             }
//             return res.json();
//         }
//     ).then(
//         (data) => {
//             console.log(data);
//             result = document.getElementById('resultall');
//             data.forEach(element => {
//                 // console.log("ID:",element.id);
//                 // console.log("Title:",element.title);
//                 // console.log("Body:",element.body);
//                 result.innerHTML += `
//                 <div> ${element.id}</div>
//                 <div> ${element.title}</div>
//                 <div> ${element.body}</div><hr>
//                 `


//             });

//         }
//     ).catch(
//         (error) => {
//             console.log(error);
//         }
//     );
// }

async function makerequest() {
    console.log("Button Clicked")
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!res.ok) {
            throw Error(res.statusText)
        }
        console.log(res);
        const data = await res.json();
        console.log(data);
        const result = document.getElementById('resultall');
        data.forEach(element => {
            // console.log("ID:",element.id);
            // console.log("Title:",element.title);
            // console.log("Body:",element.body);
            result.innerHTML += `
                <div> ${element.id}</div>
                <div> ${element.title}</div>
                <div> ${element.body}</div><hr>
              `

        });


    } catch (error) {
        console.log(error);
    }

}