https://material-ui.com/

$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)" 
brew install yarn (mac)
npm i -g yarn (win)

yarn add @material-ui/core
yarn add @material-ui/icons



# React.JS Frontend Dependency
yarn add axios chart.js react-chartjs-2 react-moment react-number-format react-router-dom redux react-redux formik redux-logger redux-thunk url-join clsx @material-ui/lab  jsonwebtoken 


# Page Components
// In Pages
yarn add create-react-component-folder

npx crcf -f LoginPage
npx crcf -f RegisterPage
npx crcf -f ReportPage
npx crcf -f StockPage
npx crcf -f StockCreatePage
npx crcf -f StockEditPage
npx crcf -f TransactionPage
npx crcf -f ShopPage