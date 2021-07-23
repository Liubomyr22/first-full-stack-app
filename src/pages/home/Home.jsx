import Header from "../../containers/header/Header";
import Posts from "../../containers/posts/Posts";
import SideBar from "../../containers/sideBar/SideBar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}
