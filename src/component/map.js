import React from 'react';
import '../assets/css/map.css';

export default function map(){

    return(
        <div class="map-responsive">
            <iframe title="embeddedMap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12414.444232545407!2d16.3359973!3d38.9328665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xba12f9b551e3a07f!2sChiesa%20di%20Santa%20Chiara!5e0!3m2!1sit!2sit!4v1601308125759!5m2!1sit!2sit" width="600" height="450" frameborder="0"  ></iframe>
        </div>
    )

}