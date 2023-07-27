import React from 'react';
import '../assets/CSS/BestTiming.css';
import kedarnath from '../image/timing_dham/kedarnath.jpg';
import Badrinath from '../image/timing_dham/badrinath.jpg';
import Gangotri from '../image/timing_dham/Gangotri.webp';
import Yamunotri from '../image/timing_dham/Yamunotri.jpg';

export default function SummerTime() {
    return (
        <>
            <p className='mini-para'>The Char Dham average temperature ranges between 20°C and 35°C during the summers, thus making it the best time to visit Char Dham Yatra.  The best time to visit the Kedarnath and Badrinath temple is during the summer, from April to June.</p>

            <p className='mini-para'>Due to their higher altitudes, Gangotri and Yamunotri experience a later start to summer—nearly around the end of April. The weather is calm and relaxing, with warmer mornings but a slight drop in temperature at night. So, carry some warm clothes with you during your trip.</p>
            <h2 className='heading'>KEDARNATH</h2>
            <img src={kedarnath} alt="" className='image-kedar' />
            <p className='mini-para'>The best season to visit Kedarnath is summer when the temperature is moderate and stays between 15-30 degrees Celsius. The sun is warm and there is a gentle cool breeze that makes the day pleasant</p>

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
