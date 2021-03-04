document.body.style.backgroundColor = "red";

// EX.6.4

let user1 = {
    name: 'User1',
    age: 123
};

let user2 = {};
Object.assign(user2, user1);

user2.name = "User2";
user2.age = 321;

console.log(user1, user2);