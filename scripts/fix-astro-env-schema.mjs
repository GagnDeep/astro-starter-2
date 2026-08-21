import fs from 'fs/promises';

async function main() {
  const configFile = 'astro.config.mjs';
  let content = await fs.readFile(configFile, 'utf8');

  if (!content.includes('PUBLIC_CAPTURE_KEY:')) {
    content = content.replace(
      'PUBLIC_OO_APPLICATION_ID:',
      `PUBLIC_CAPTURE_KEY: envField.string({
        context: "client",
        access: "public",
        default: "wcs_pk_47bxlyp54gjn_BR9Mhe51yJEkTuchPcpJnvAs7ZnZ98lM6zxfgBI-tbE",
      }),
      PUBLIC_OO_APPLICATION_ID:`
    );
    await fs.writeFile(configFile, content);
  }
}

main().catch(console.error);
