import React, { useContext } from "react";
import './leftbar.scss'
import Frineds from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Marketplace from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gamings from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Fundraiser from "../../assets/11.png";
import Tutorials from "../../assets/12.png";
import Courses from "../../assets/13.png";
import { AuthContext } from "../../context/AuthContext";
export default function Leftbar() {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <div className="img"
              style={{backgroundImage: `${currentUser.profilepic}`}}
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Frineds} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Marketplace} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
          <hr />
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gamings} alt="" />
            <span>Gamings</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
          <hr />
          <span>Others</span>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Fundraiser} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}
