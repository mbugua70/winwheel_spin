import { Outlet } from "react-router-dom";
import classes from "./parentLayout.module.css";

const ParentLayout = () => {
  return (
    <>
      <main className={classes.main_parent}>
        <Outlet />
      </main>
    </>
  );
};

export default ParentLayout;
