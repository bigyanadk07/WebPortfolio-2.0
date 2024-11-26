import React from "react";
import Image1 from "../Images/GraphicImages/Boba-Coffee.png";
import Image2 from "../Images/GraphicImages/Brew & Beans.png";
import Image3 from "../Images/GraphicImages/Food4you.png";
import Image4 from "../Images/GraphicImages/Konasku-Cafe.png";
import Image5 from "../Images/GraphicImages/Krita-Food-Land.png";
import Image6 from "../Images/GraphicImages/Mimi-Restro.png";
import Image7 from "../Images/GraphicImages/Restaurant-menu.png";
import Image8 from "../Images/GraphicImages/Triveni-Food-Land.png";
import Image9 from "../Images/GraphicImages/Waffle-house.png";

const Design: React.FC = () => {

  return (
    <div className="bg-zinc-900 min-h-screen p-40">
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className=" p-4"><img src={Image1} alt="" /></div>
      <div className=" p-4"><img src={Image2} alt="" /></div>
      <div className=" p-4"><img src={Image3} alt="" /></div>
      <div className="p-4"><img src={Image4} alt="" /></div>
      <div className=" p-4"><img src={Image5} alt="" /></div>
      <div className=" p-4"><img src={Image6} alt="" /></div>
      <div className="p-4"><img src={Image7} alt="" /></div>
      <div className=" p-4"><img src={Image8} alt="" /></div>
      <div className=" p-4"><img src={Image9} alt="" /></div>
    </div>
    </div>
  );
};

export default Design;
