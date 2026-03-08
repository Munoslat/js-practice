
async function fetchData() {
    console.log("starting fetchData");
        const response = await fetch("https://jsonplaceholder.typicode.com/posts ");

        const data = await response.json();

        console.log("response:", data); 
}
fetchData();