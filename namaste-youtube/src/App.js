import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./pages/WatchPage";
import Hook from "./components/hooksComponent/Hook";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body className=""/>,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      },
      {
        path: "/hook",
        element: <Hook />
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
 