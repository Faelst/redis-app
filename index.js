const { promisify } = require('util');
const Redis = require('ioredis');

const redisClient = new Redis({
  password: 'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81',
});

const getValue = (key) => {
  const getSync = promisify(redisClient.get).bind(redisClient);
  return getSync(key);
};

const setValue = (key, value) => {
  const setSync = promisify(redisClient.set).bind(redisClient);
  return setSync(key, value);
};

const data = {
  key: '12981708474',
  value: JSON.stringify({
    id: '1',
    tenant: 'TENANT_TEST',
    session: 1,
  }),
};

const start = async () => {
  await setValue(data.key, data.value);
  console.log(await getValue(data.key));
};

start().then(process.exit);
