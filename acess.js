const usres = [
    { id: 1, name: 'mehedi', job: 'Web Devlopment' }
]
// console.log(usres[0].name);
const data = {
    count: 5000,
    data: [
        { id: 1, name: 'Hasan', job: 'maker' },
        { id: 2, name: 'Sagor', job: 'bokuporey' },
    ]
}
const firstJob = data.data[0].job;
// console.log(data.data[0].job);

const user = {
    id: 5001,
    name: 'kabi nazrul islam',
    address: {
        street: {
            frist: '18/A No Rup Chane Das Line',
            second: '1st floor',
            third: 'right side'
        },
        postoffice: 'Dhaka-1100',
        city: 'Dhaka',
        conutry: 'Bangladesh'
    }
}
const userFloor = user.address.street.second;
// jobi nested probelem er likha vul hoi taholey (?)question mark use kora jatey parey
console.log(userFloor);