const myPromise = new Promise((resolve, reject) => {
    if(true){
        setTimeout(() => {
            resolve('I have succeede');
        }, 1000)
    }else{
        reject('I have failed');
    }
});

myPromise
    .then(value => value + '!!!')
    .then(newValue => console.log(newValue))
    .then(rejectValue => console.log(rejectValue));


// example

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const firstUser = users[0];
        console.log(firstUser);
        return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id);
    })
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.log(error));