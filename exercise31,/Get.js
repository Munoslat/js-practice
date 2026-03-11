
async function fetchDat(){
try{
    console.log("starting fetch Data")
    const response= await fetch(`https://jsonplaceholder.typicode.com/users`)

    console.log("response received")
    if(!response.ok){
    throw new Error(`Http error! status ${response.status}`);
    }
    const Data= await response.json();
    console.log(Data)

}catch(error){
    console.log(error)
}
}
fetchDat()