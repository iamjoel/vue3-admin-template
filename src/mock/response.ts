
export const successResponseWrap = (data: unknown) => {
  return {
    data,
    status: 'ok',
    msg: 'success',
    code: 0,
  };
};

export const failResponseWrap = (data: unknown, msg: string, code = 50000) => {
  return {
    data,
    status: 'fail',
    error: msg,
    code,
  };
};