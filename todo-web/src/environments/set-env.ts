// pinched this implementation from https://pazel.dev/how-to-keep-your-secrets-from-your-source-code-in-an-angular-project

const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
// Configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.production.ts';
// Load node modules
  const colors = require('colors');
  require('dotenv').config({
    path: 'src/environments/.env'
  });
// `environment.ts` file structure
  const envConfigFile = `export const environment = {
  auth0_domain: '${process.env["AUTH0_DOMAIN"]}',
  auth0_clientId: '${process.env["AUTH0_CLIENT_ID"]}',
  production: true,
};
`;
  console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
  writeFile(targetPath, envConfigFile, (err:any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
    }
  });
};
setEnv();
