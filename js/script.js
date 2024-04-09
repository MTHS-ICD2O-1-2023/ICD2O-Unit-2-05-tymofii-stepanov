// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2020

"use strict"

function calculatePayAndTaxes () {
  // input
  const numberOfHoursYouWorked = parseInt(document.getElementById('number-of-hours-you-worked').value)
  const timesYourSalary= parseInt(document.getElementById('times-your-salary').value)
  const numberOfTax = 0.18;
  // process
  const pay = Math.round(numberOfHoursYouWorked * timesYourSalary * (1 -numberOfTax))
  const taxes =Math.round( timesYourSalary * numberOfHoursYouWorked * numberOfTax)

  // output
  document.getElementById('pay').innerHTML ='Your pay will be:'  + ' $'+pay.toFixed(2); 
  document.getElementById('taxes').innerHTML ='the govenment will take:' + ' $'+taxes.toFixed(2);
}
