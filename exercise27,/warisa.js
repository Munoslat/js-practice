
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const success= true;
              if(success){
                resolve({ id: 1, name: 'John Doe' });
              } else {
                reject('Failed to fetch user data');
              } 
        }, 2000);
    });
}

fetchUserData()
    .then(userData => { console.log('User Data:', userData)}) 
    .catch(error => { console.error('Error:', error) });