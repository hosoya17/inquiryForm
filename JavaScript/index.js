"use strict";
const firstName = document.querySelector('#firstName');
const givenName = document.querySelector('#givenName');
const firstNameKana = document.querySelector('#firstNameKana');
const givenNameKana = document.querySelector('#givenNameKana');
const age = document.querySelector('#age');
const gender = document.querySelector('input[type=radio]');
const telNum1 = document.querySelector('.telNum1');
const telNum2 = document.querySelector('.telNum2');
const telNum3 = document.querySelector('.telNum3');

const zip1 = document.querySelector('#zip1');
const zip2 = document.querySelector('#zip2');
const prefectures = document.querySelector('select[name="prefectures"]');
const city = document.querySelector('#city');
const address = document.querySelector('#address');
const button = document.querySelector('input[type="button"]');
const msg = document.querySelector('.msg');
const kaku = document.querySelector('.kakunin');

let zipurl;
let url = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';

button.addEventListener('click', () => {
  msg.style.color = 'black';
  msg.innerHTML = '検索中...';
  zipurl = url + zip1.value + zip2.value;

  fetch(zipurl)
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (data.status === 400) {
        if (data.message.includes("桁数が不正")) {
          msg.style.color = 'red';
          msg.innerHTML = '「郵便番号」の桁数が不正です';
        } else if (data.message.includes("数字以外の文字が指定されています")) {
          msg.style.color = 'red';
          msg.innerHTML = '「郵便番号」に数字以外の文字が指定されています。';
        }
      } else if (data.results === null) {
        msg.style.color = 'red';
        msg.innerHTML = '存在しない郵便番号です。';
      } else {
        msg.innerHTML = '';
        prefectures.value = data.results[0].address1;
        city.value = data.results[0].address2 + data.results[0].address3;
      }
    });
});

kaku.addEventListener('click', () => {
  let queryParams =
    "firstName=" + encodeURIComponent(firstName.value) +
    "&givenName=" + encodeURIComponent(givenName.value) +
    "&firstNameKana=" + encodeURIComponent(firstNameKana.value) +
    "&givenNameKana=" + encodeURIComponent(givenNameKana.value) +
    "&age=" + encodeURIComponent(age.value) +
    "&gender=" + encodeURIComponent(gender.value) +
    "&telNum1=" + encodeURIComponent(telNum1.value) +
    "&telNum2=" + encodeURIComponent(telNum2.value) +
    "&telNum3=" + encodeURIComponent(telNum3.value) +
    "&zip1=" + encodeURIComponent(zip1.value) +
    "&zip2=" + encodeURIComponent(zip2.value) +
    "&prefectures=" + encodeURIComponent(prefectures.value) +
    "&city=" + encodeURIComponent(city.value) +
    "&address=" + encodeURIComponent(address.value) +
    "&mail=" + encodeURIComponent(mail.value);
  window.location.href = "kakunin.html?" + queryParams;
});
