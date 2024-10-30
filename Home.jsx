import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';

function Home() {
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Physical Fitness</h3>
                        <BsFillArchiveFill className='card_icon'/>
                    </div>
                    <h1>60%</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Mental Wellness</h3>
                        <BsFillGrid3X3GapFill className='card_icon'/>
                    </div>
                    <h1>40%</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Diet</h3>
                        <BsPeopleFill className='card_icon'/>
                    </div>
                    <h1>33%</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Daily Routine</h3>
                        <BsFillBellFill className='card_icon'/>
                    </div>
                    <h1>92%</h1>
                </div>
            </div>
        </main>
    );
}

export default Home;
