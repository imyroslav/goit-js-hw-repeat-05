"use strict";

const getTotalBalanceByGender = (users, gender) => {

    let balance = 0;

    for (const user of users) {
        if (user.gender === gender) {
            balance += user.balance
        };
    };

    return balance;
};

// const getTotalBalanceByGender = (users, gender) => {

//   const totalBalance = users
//   .filter(user => user.gender === gender)
//   .reduce((total, user) => {return total + user.balance; 
//   } , 0); 
//   return totalBalance;
// }


const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male"));
console.log(getTotalBalanceByGender(clients, "female"));
