
export const handler = async (event) => {
  const accountId = process.env.acctId;
  const region = process.env.region;

  console.log(`Account ID: ${accountId}`);
  console.log(`Region: ${region}`);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Lambda!',
      accountId: accountId,
      region: region,
      input: event,
    }),
  };

  return response;
};
