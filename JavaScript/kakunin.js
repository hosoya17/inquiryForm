"use strict";
const name = document.querySelector('.name');
const nameKana = document.querySelector('.nameKana');
const age2 = document.querySelector('.age2');
const genderText = document.querySelector('.genderText');
const telNumText = document.querySelector('.telNumText');
const mailText = document.querySelector('.mailText');

const zipText = document.querySelector('.zipText');
const prefText = document.querySelector('.prefText');
const cityText = document.querySelector('.cityText');
const addText = document.querySelector('.addText');
const map = document.querySelector('iframe');

const back = document.querySelector('.back');
const req = document.querySelector('.req');

var urlParams = new URLSearchParams(window.location.search);
var firstName = urlParams.get("firstName");
var givenName = urlParams.get("givenName");
var firstNameKana = urlParams.get("firstNameKana");
var givenNameKana = urlParams.get("givenNameKana");
var age = urlParams.get("age");
var gender = urlParams.get("gender");
var telNum1 = urlParams.get("telNum1");
var telNum2 = urlParams.get("telNum2");
var telNum3 = urlParams.get("telNum3");
var mail = urlParams.get("mail");

var zip1 = urlParams.get("zip1");
var zip2 = urlParams.get("zip2");
var prefectures = urlParams.get("prefectures");
var city = urlParams.get("city");
var address = urlParams.get("address");

name.innerHTML = firstName + ' ' + givenName;
nameKana.innerHTML = firstNameKana + ' ' + givenNameKana;
age2.innerHTML = age + '歳';
genderText.innerHTML = gender;
telNumText.innerHTML = telNum1 + '-' + telNum2 + '-' + telNum3;

zipText.innerHTML = zip1 + '-' + zip2;
prefText.innerHTML = prefectures;
cityText.innerHTML = city;
addText.innerHTML = address;
mailText.innerHTML = mail;
map.src = `https://maps.google.co.jp/maps?output=embed&q=${prefectures}${city}${address}`;

back.addEventListener('click', ()=> {
  window.history.back();
});
req.addEventListener('click', ()=> {
  window.location.href = "kanryou.html";
});
