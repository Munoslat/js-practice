
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const seccess = true; 
            if (seccess) {
                resolve({ id: 1, name: 'muno salat' });
            }else { 
                reject('Failed to fetch user data');
            } 
        }, 2000);
    });
}

async function displayUserData() {
    try {
        const user = await fetchUserData();
        console.log(user);
    } catch (err) {
        console.log(err);
    }
}

displayUserData();
