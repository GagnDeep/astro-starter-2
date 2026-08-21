import fs from 'fs/promises';

async function main() {
  const capConfig = 'capture.config.ts';
  let content = await fs.readFile(capConfig, 'utf8');

  // replace static key with import.meta.env
  content = content.replace(/publicKey: "(.*?)",/, 'publicKey: import.meta.env.PUBLIC_CAPTURE_KEY ?? "$1",');
  await fs.writeFile(capConfig, content);

  const envConfig = '.env';
  await fs.writeFile(envConfig, 'PUBLIC_CAPTURE_KEY="wcs_pk_47bxlyp54gjn_BR9Mhe51yJEkTuchPcpJnvAs7ZnZ98lM6zxfgBI-tbE"\n', { flag: 'a' });
}

main().catch(console.error);
