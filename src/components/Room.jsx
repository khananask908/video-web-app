import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { id } = useParams();
            let myMeeting = async (element) => {
     // generate Kit Token
                const appID =1975245335 ;
      const serverSecret = "57ccd3e9ad865c910af1b7c56beee468";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(),  "MOHDANASHKHAN");


                // Create instance object from Kit Token.
                
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:`http://localhost:5173/room/${id} `
           
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });


  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      //style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}
  
  

export default Room