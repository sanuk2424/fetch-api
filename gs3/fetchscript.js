document.getElementById('btn').addEventListener('click',
    makerequest);

//Promise Then | Showing data in console |Error handling | Showing data in Browser
// function makerequest() {
//     console.log("Button is clicked");
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then(
//             (res) => {
//                 console.log(res);
//                 if (!res.ok) {
//                     throw Error(res.statusText)
//                 }
//                 return res.json();
//             }
//         ).then(
//             (data) => {
//                 console.log(data);
//                 // console.log("ID:", data.id);
//                 // console.log("Title:", data.title);
//                 // console.log("Body:", data.body);
//                 document.getElementById('userid').innerText = data.id
//                 document.getElementById('title').innerText = data.title
//                 document.getElementById('body').innerText = data.body

//             }
//         ).catch(
//             (error) => {
//                 console.log(error);
//             }
//         )
// }

//Async Await | Show in Console | Error handling | Show in Browser
async function makerequest(){
    console.log("Button clicked");
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!res.ok){
            throw Error(res.statusText)
        }
        console.log(res);
    
        const data = await res.json();
        console.log(data);
        // console.log("Userid:",data.id);
        // console.log("Title:",data.title);
        // console.log("Body:",data.body);
        document.getElementById('userid').innerText = data.id
        document.getElementById('title').innerText = data.title
        document.getElementById('body').innerText = data.body

    }catch(error){
        console.log(error);
    }
   
}