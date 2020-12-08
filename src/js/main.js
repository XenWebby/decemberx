/*jshint esversion: 6 */
let start = document.getElementById('start'),

    result = document.getElementsByClassName('result-table')[0],
    buddetBlok = document.getElementsByClassName('budget-value')[0],
    dayBlok = document.getElementsByClassName('daybudget-value')[0],
    levelBlok = document.getElementsByClassName('level-value')[0],
    expensesBlok = document.getElementsByClassName('expenses-value')[0],
    optionalBlok = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeBlok = document.getElementsByClassName('income-value')[0],
    monthBlok = document.getElementsByClassName('monthsavings-value')[0],
    yearBlok = document.getElementsByClassName('yearsavings-value')[0];

    
let expensesItem = document.getElementsByClassName("expenses-item"),
    //expensesBtn = document.getElementsByTagName('button')[0],
	//optionalExpensesBtn = document.getElementsByTagName('button')[1],
    //countBtn = document.getElementsByTagName('button')[2],
    
    btn = document.getElementsByTagName('button');
    approveBtn = [btn[0], btn[1]];
    countBtn = btn[2];

let items = document.querySelectorAll('.optionalexpenses-item');
   
let choose = document.querySelector('#income'),
    checkbox = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('year-value'),
    month = document.querySelector('month-value'),
    day = document.querySelector('day-value');

    
