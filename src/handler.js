// 'use strict';

// module.exports.generateRandonNumber = async (event) => {
//   const randomNumber = parseint(Math.random()*100);
//   console.log("The random generate number is :",randomNumber);
//   return randomNumber;
//   };

'use strict';

const newrelic = require('newrelic-lambda-wrapper');

const generate = async (event) => {
  const randomNumber = parseInt(Math.random() * 100);
  console.log("The randomly generated number is:", randomNumber);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Success",
      number: randomNumber,
    }),
  };
};

// Use newrelic-lambda-wrapper properly
exports.generateRandonNumber = newrelic.wrap(generate);
