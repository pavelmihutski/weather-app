const objectToParams = payload => {
  let str = '';

  Object.keys(payload).map(key => {
    if (str !== '') {
      str += '&';
    }
    return (str += `${key}=${payload[key]}`);
  });

  return str;
};

export default objectToParams;
