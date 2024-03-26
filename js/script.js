// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2020

"use strict"

function calculatePayAndTaxes () {
  // input
  const numberOfHoursYouWorked = parseInt(document.getElementById('number-of-hours-you-worked').value)
  const timesYourSalary= parseInt(document.getElementById('times-your-salary').value)

  // process
  const pay = Math.floor(numberOfHoursYouWorked * timesYourSalary * (1 - 0.18))
  const taxes = Math.floor( timesYourSalary * numberOfHoursYouWorked * 0.18)

  // output
  document.getElementById('pay').innerHTML ='Your pay will be:'  + ' $'+pay 
  document.getElementById('taxes').innerHTML ='the govenment will take:' + ' $'+taxes
}
