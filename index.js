exports.handler = async function (event, context) {
  event.Records.forEach((record, index) => {
    const { body } = record;
    console.log(`SQS message #${index+1}`, JSON.parse(body));
  });
};
