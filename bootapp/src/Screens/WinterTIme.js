import React from 'react';
import '../assets/CSS/BestTiming.css';
import kedarnath from '../image/winter/Kedarnath.png';
import Badrinath from '../image/winter/Badrinath.jpg';
import Gangotri from '../image/winter/Gangotri.jpg';
import Yamunotri from '../image/winter/Yamunotri.jpg';

export default function WinterTime() {
    return (
        <>
            <p className='mini-para'>Around the end of June to the end of September, the monsoon season begins in Char Dham. It is generally not advised to travel during the monsoon season because of the heavy rain and the possibility of landslides and flooding produced by overflowing rivers.</p>

            <h2 className='heading'>KEDARNATH</h2>
            <img src={kedarnath} alt="" className='image-kedar' />
            <p className='mini-para'>From October till March
During the winter season, the region experiences sub-zero temperatures and freezing weather. The temple also remains shut during this time of the year due to heavy snowfall. Sometimes there are sunny days too, and the temperature ranges between 0°C and 20°C.</p>

            <h2 className='heading'>BADRINATH</h2>
            <img src={Badrinath} alt="" className='image-kedar' />
            <p className='mini-para'>Summers are pleasant with moderately cool climate in Badrinath and generally last between the months of May to June. The temperature ranges between a comfortable 7°C - 18°C in these months</p>

            <h2 className='heading'>GANGOTRI</h2>
            <img src={Gangotri} alt="" className='image-kedar' />
            <p className='mini-para'>Gangotri remains open each year for six months, from May to November (Akshya Tritiya to Diwali). The best time to visit Gangotri is May-June and September-October as the weather during this time remains pleasant. Gangotri remains cold throughout the year. It is best to avoid visiting Gangotri during the monsoon from July to August as the area remains prone to landslides.</p>

            <h2 className='heading'>YAMUNOTRI</h2>
            <img src={Yamunotri} alt="" className='image-kedar' />
            <p className='mini-para'>Summers in Yamunotri start in the month of April and end in the month of July. During this season, the temperature ranges between 6°C to 20°C. The days are pleasing while the nights are very cold. Hence the visitors are advised to carry warm clothing while travelling to this place in this season. A sightseeing trip and a pilgrimage trip can be best enjoyed at this time.</p>

        </>
    )
}
