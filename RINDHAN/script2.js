const Logout1 = document.querySelector('.btn--log-out');
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

Logout1.addEventListener('click', function () {
  // Send a request to the logout endpoint on the server-side
  localStorage.removeItem('username');
  window.location.href = 'index1.html';
});

const username = localStorage.getItem('username');

const account1 = {
  owner: 'Shubham Agarwal',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1234,

  movementsDates: [
    '2021-11-18T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-07-26T17:01:17.194Z',
    '2022-07-28T23:36:17.929Z',
    '2022-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'kapil Agarwal',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2356,

  movementsDates: [
    '2021-11-01T13:15:33.035Z',
    '2021-11-30T09:48:16.867Z',
    '2021-12-25T06:04:23.907Z',
    '2022-01-25T14:18:46.235Z',
    '2022-02-05T16:33:06.386Z',
    '2022-04-10T14:43:26.374Z',
    '2022-06-25T18:49:59.371Z',
    '2022-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Akshat Goyal',
  movements: [200, 1000, -800, 150, -600, 1200, -300, -100],
  interestRate: 1.2,
  pin: 4567,
  movementsDates: [
    '2022-04-01T12:30:00.000Z',
    '2022-04-02T08:15:00.000Z',
    '2022-04-03T14:40:00.000Z',
    '2022-04-04T16:55:00.000Z',
    '2022-04-05T10:10:00.000Z',
    '2022-04-06T13:25:00.000Z',
    '2022-04-07T15:50:00.000Z',
    '2022-04-08T09:40:00.000Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const account4 = {
  owner: 'Chaitanya shethiya',
  movements: [8000, -2500, 4500, -1200, 6000, -350, -700, 200],
  interestRate: 2.5,
  pin: 7890,
  movementsDates: [
    '2022-03-01T14:00:00.000Z',
    '2022-03-02T10:15:00.000Z',
    '2022-03-03T16:30:00.000Z',
    '2022-03-04T11:45:00.000Z',
    '2022-03-05T15:20:00.000Z',
    '2022-03-06T12:10:00.000Z',
    '2022-03-07T13:45:00.000Z',
    '2022-03-08T09:25:00.000Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const account5 = {
  owner: 'Anmol Pandey',
  movements: [-500, -100, 1500, 800, -700, 600, -300, 1000],
  interestRate: 1.8,
  pin: 9876,
  movementsDates: [
    '2022-02-01T09:30:00.000Z',
    '2022-02-02T15:45:00.000Z',
    '2022-02-03T12:20:00.000Z',
    '2022-02-04T10:05:00.000Z',
    '2022-02-05T16:00:00.000Z',
    '2022-02-06T11:30:00.000Z',
    '2022-02-07T14:15:00.000Z',
    '2022-02-08T09:50:00.000Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};
const account6 = {
  owner: 'kevin Desai',
  movements: [1200, -300, 200, 5000, -1000, -400, 300, 800],
  interestRate: 2.0,
  pin: 8894,
  movementsDates: [
    '2022-01-01T08:00:00.000Z',
    '2022-01-02T12:30:00.000Z',
    '2022-01-03T16:45:00.000Z',
    '2022-01-04T09:15:00.000Z',
    '2022-01-05T14:20:00.000Z',
    '2022-01-06T11:10:00.000Z',
    '2022-01-07T13:55:00.000Z',
    '2022-01-08T10:05:00.000Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};
//compare username with account owner

const accounts = [account1, account2, account3, account4, account5, account6];
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ')[0];
  });
};
createUsernames(accounts);

let account;
let currentAccount;
accounts.forEach(function (acc) {
  if (username === acc.username) {
    account = acc.owner.split(' ')[0];
    currentAccount = acc;
  }
});
console.log(accounts);
labelWelcome.textContent = `Welcome back, ${account.split(' ')[0]}`;

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}₹</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}₹`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}₹`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}₹`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}₹`;
};

const updateUI = function (acc) {
  //Display Balance
  displayBalance(acc);
  //Display Movements
  displayMovements(acc.movements);
  //Display summary
  calcDisplaySummary(acc);
};

updateUI(currentAccount);
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    console.log(receiverAcc);
    //updateUI
    updateUI(currentAccount);
  }
});
console.log(account2.movements);
