import React from "react";
import "../assets/CSS/BestTiming.css";
import kedarnath from "../image/monsoon/Kedarnath.jpg";
import Badrinath from "../image/monsoon/Badrinath.jfif";
import Gangotri from "../image/monsoon/Gangotri.jpg";
import Yamunotri from "../image/monsoon/Yamunotri.jpg";

export default function MonsoonTime() {
  return (
    <>
      <p className="mini-para">
        Around the end of June to the end of September, the monsoon season
        begins in Char Dham. It is generally not advised to travel during the
        monsoon season because of the heavy rain and the possibility of
        landslides and flooding produced by overflowing rivers.
      </p>

      <h2 className="heading">KEDARNATH</h2>
      <img src={kedarnath} alt="" className="image-kedar" />
      <p className="mini-para">
      Monsoons hit Kedarnath starting from July and ending till August, with temperatures dropping down to 12°C. In this season Kedarnath is frequented with heavy rain falls and landslides hence visitors are advised to be prepared to overcome the difficulties. One must pack few essentials to save themselves from the heavy rains.
      </p>

      <h2 className="heading">BADRINATH</h2>
      <img src={Badrinath} alt="" className="image-kedar" />
      <p className="mini-para">
        Regular rain showers occur in the monsoon months here, starting in July
        and ending in September. The holy Badrinath Yatra, which takes you to
        one of the sacred Char Dhams, is not recommended during the monsoon. The
        occurrence of landslides might create a hindrance in your pilgrimage.
        The temperature during this time hovers around 5–15°C. Rainfall starts
        to recede in September. Thus, the influx of tourists once again started
        rising this month.
      </p>

      <h2 className="heading">GANGOTRI</h2>
      <img src={Gangotri} alt="" className="image-kedar" />
      <p className="mini-para">
        The two-month long monsoon season in Gangotri starts in July and lasts
        until the end of August. The region remains quiet and peaceful during
        monsoons since there are not many visitors.
      </p>

      <h2 className="heading">YAMUNOTRI</h2>
      <img src={Yamunotri} alt="" className="image-kedar" />
      <p className="mini-para">
        In the monsoon season, Yamunotri witnesses heavy rainfall which makes
        travelling troublesome. The monsoons here set in from Mid-July and last
        till the end of September. During this season, the visitors might face
        few difficulties like landslides while visiting this place.
      </p>
    </>
  );
}
