const myAsyncFunction = async () => {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users'); // returns promise

    const users = await userResponse.json(); // returns promise
    const secondUser = users[1];
    console.log(secondUser);

    const postsResponse await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id);

    const posts = await postsResponse.json();
    console.log(posts);
}