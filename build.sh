git submodule update --init --checkout rsshub
cp rsshub-package.json rsshub/package.json
cd rsshub
npm i && npm run docs:build
cd ..
