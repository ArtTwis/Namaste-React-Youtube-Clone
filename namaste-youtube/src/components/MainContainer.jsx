import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { appActions } from "../redux/appSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.toggleMenuOption(true));
  }, []);

  return (
    <div className="overflow-y-scroll">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
