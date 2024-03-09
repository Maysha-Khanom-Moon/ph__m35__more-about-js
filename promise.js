const ride = new Promise((resolve, reject) => {
    // if(true) {
    //     resolve('driver arrived');
    // }
    if(false) {
        resolve('driver arrived');
    } 
    else {
        reject('driver failed');
    }
})

ride
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })