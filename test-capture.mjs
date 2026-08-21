const payload = { email: "test@example.com", name: "Claude Test" };
fetch("https://api.markremover.com/v1/collect/contact", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "x-public-key": "wcs_pk_47bxlyp54gjn_BR9Mhe51yJEkTuchPcpJnvAs7ZnZ98lM6zxfgBI-tbE"
  },
  body: JSON.stringify(payload)
}).then(res => res.json()).then(console.log).catch(console.error);
