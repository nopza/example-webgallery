import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./components/layouts/Header";
import Menu from "./components/layouts/Menu";

import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import StockPage from "./components/pages/StockPage";
import MyRegisterPage from "./components/pages/MyRegisterPage";
import MyPage from "./components/pages/MyPage";
import StockCreatePage from "./components/pages/StockCreatePage";
import StockEditPage from "./components/pages/StockEditPage";
import ShopPage from "./components/pages/ShopPage";
import ReportPage from "./components/pages/ReportPage";
import TransactionPage from "./components/pages/TransactionPage";
import GalleryPage from "./components/pages/GalleryPage/";
import GalleryCreatePage from "./components/pages/GalleryCreatePage/";
import GalleryEditPage from "./components/pages/GalleryEditPage/";
import HomePage from "./components/pages/HomePage/";

// ----
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import * as loginActions from "./actions/login.action";
import blue from "@material-ui/core/colors/blue";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#93a1ae",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(3),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#648dae" },
  },
  status: {
    danger: "orange",
  },
});

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const dispatch = useDispatch();
  useSelector(({ loginReducer }) => loginReducer); // just mention in order to force refresh when login/logout

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Protected Route
  const SecuredRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        // ternary condition
        loginActions.isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  const LoginRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        // ternary condition
        loginActions.isLoggedIn() ? (
          <Redirect to="/stock" />
        ) : (
          <LoginPage {...props} />
        )
      }
    />
  );

  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <CssBaseline />
            {loginActions.isLoggedIn() && (
              <>
                <Header handleDrawerOpen={handleDrawerOpen} open={open} />
                <Menu handleDrawerClose={handleDrawerClose} open={open} />
              </>
            )}

            {/* {loginActions.isLoggedIn() && (
              <Header handleDrawerOpen={handleDrawerOpen} open={open} />
            )}
            {loginActions.isLoggedIn() && (
              <Menu handleDrawerClose={handleDrawerClose} open={open} />
            )} */}

            <Container
              className={classes.content}
              style={{ marginTop: 60 }}
              maxWidth={false}
            >
              <LoginRoute path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <SecuredRoute path="/stock" exact={true} component={StockPage} />
              <SecuredRoute path="/stock/create" component={StockCreatePage} />
              <SecuredRoute path="/stock/edit/:id" component={StockEditPage} />
              <SecuredRoute path="/shop" component={ShopPage} />
              <SecuredRoute path="/report" component={ReportPage} />
              <SecuredRoute path="/myregister" component={MyRegisterPage} />
              <SecuredRoute path="/transaction" component={TransactionPage} />
              <SecuredRoute path="/mypage" component={MyPage} />
              <SecuredRoute path="/home" component={HomePage} />
              <SecuredRoute
                path="/gallery"
                exact={true}
                component={GalleryPage}
              />
              <SecuredRoute
                path="/gallery/create"
                component={GalleryCreatePage}
              />
              <SecuredRoute
                path="/gallery/edit/:id"
                component={GalleryEditPage}
              />
              <Route
                exact={true}
                path="/"
                component={() => <Redirect to="/login" />}
              />
            </Container>
          </div>
        </ThemeProvider>
      </Switch>
    </Router>
  );
}
