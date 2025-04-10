'use strict';

module.exports.generateRandonNumber = async (event) => {
  const randomNumber = parseint(Math.random()*100);
  console.log("The random generate number is :",randomNumber);
  return randomNumber;
  };
