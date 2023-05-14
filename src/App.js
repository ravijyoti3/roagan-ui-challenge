import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ARITCLE_ROUTES } from "./Components/routeConstant";
import SideBar from "./Components/Article/SideBar";
import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Layout className="body">
      <BrowserRouter>
        <SideBar />
        {/* <ToastContainer /> */}
        <Content
          style={{
            padding: "30px 25px",
            minHeight: 280,
          }}
        >
          <Switch>
            <Route exact path="/">
              <Redirect to="/profile" />
            </Route>
            {ARITCLE_ROUTES.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact
                component={route.component}
              />
            ))}
          </Switch>
        </Content>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
