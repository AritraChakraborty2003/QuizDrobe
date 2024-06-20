const getIPData = (req, res) => {
  const IP_Obj = {
    ip: req.ip,
  };
  return res.end(JSON.stringify(IP_Obj));
};
export { getIPData };
