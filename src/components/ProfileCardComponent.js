import React from 'react';

function ProfileCardComponent(props) {
  return (
    <div className="profile-card">
              {/* <div className="row z-depth-3"> */}
          
                   {/* <div className="row"> */}
                      <div className="text-center">
                  <img src="miller-images/profile_card.jpg" alt="dinner-table" className="circle-img"/>
                  <label className="custom-file-upload">
                      <input type="file"/>
                    Edit image
                  </label>
              {/* </div> */}
                        
                  {/* <p>Bio:</p>
                        <h6 className="text-muted">"Went to Trader Joe's for the first time ever. I'm in the frozen aisle trying to figure out what vegan ice cream is and a woman walks up and says 'Are you sharing?' Been married for 2 years,"</h6> */}
                      </div>
                    {/* </div> */}
               
                {/* </div> */}
         
    </div>
  );
}

export default ProfileCardComponent;