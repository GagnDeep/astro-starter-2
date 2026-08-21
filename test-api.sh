curl -s -X POST https://api.markremover.com/v1/collect/contact \
-H 'content-type: application/json' \
-H "x-public-key: wcs_pk_47bxlyp54gjn_BR9Mhe51yJEkTuchPcpJnvAs7ZnZ98lM6zxfgBI-tbE" \
-d '{"email":"test@example.com"}' | grep -q '"ok":true' && echo "Success" || echo "Fail"
