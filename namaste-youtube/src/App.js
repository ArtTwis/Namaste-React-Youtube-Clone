import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./pages/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
 