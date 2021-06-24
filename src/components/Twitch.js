
import React, { useContext } from 'react'
import { AuthContext } from './auth'
import { TwitchEmbed } from 'react-twitch-embed';

const Twitch = () => {
  const { currentUser } = useContext(AuthContext);
  return (

    <div className="containerIF2">
      <div className="row row-cols-sm-1">
        <div className="col-lg-12 mx-auto text-start mb-0 ">
          <div className="containerIF">

            <TwitchEmbed
              channel="ligoligo12"
              id="ligoligo12"
              theme="dark"
              width="100%"
              height="100%"
              onVideoPause={() => console.log(':(')}
            />
          </div>
        </div>
      </div>
    </div>


  );
}

export default Twitch;