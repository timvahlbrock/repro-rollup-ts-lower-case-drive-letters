# Reproduction: Lower case drive letters + @rollup/plugin-typescript

## Steps

- Open CMD on Windows Computer
- Assure, that the cmd is using lower case drive letters
- Run `npm start`
- Expectation: Build fails, because the lower case drive letter ist not properly escaped
