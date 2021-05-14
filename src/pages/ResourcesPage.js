import React, { useState } from 'react';
import NavbarComponent from "../components/NavbarComponent";
import ResourcesComponent from "../components/ResourcesComponent";


function ResourcesPage({ isLoggedIn, user }) {

  const [imgClicked, setImgClicked] = useState(false)

  const logsomething = () => {
    console.log("hello")
    setImgClicked(true)
    console.log(imgClicked)
  }
 
  return(
    <div className="resources-container">
      <div className="resources-form">
      <NavbarComponent />

      <div id="additionallinks">
        <br></br>
        <div className="container-resources">
          <div className="rideshare-text">Need a Ride?</div>
          <a className="uber-icon" href="https://www.uber.com/"><img src="https://img.icons8.com/color/144/000000/uber-app.png" alt='ubr' /></a>
          <a className="lyft-icon" href="https://www.lyft.com/rider"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2UxMjQ2YiI+PHBhdGggZD0iTTEwLjc1LDQzdjU5LjEyNWMwLDguOTA2MzcgNy4yMTg2MiwxNi4xMjUgMTYuMTI1LDE2LjEyNWgxMS4wODU5NGMtMy41MDk4OCwtMy40MjM4OCAtNS43MTA5NCwtOC4xODA3NSAtNS43MTA5NCwtMTMuNDM3NXYtMTguODEyNXYtMzQuOTM3NXYtOC4wNjI1ek0xMjAuOTM3NSw0M2MtMTYuMzI5MjUsMCAtMjkuNTYyNSwxMy4yMzMyNSAtMjkuNTYyNSwyOS41NjI1djguMDYyNXY1LjM3NXYzMi4yNWMxMS44NzMzNywwIDIxLjUsLTkuNjI2NjMgMjEuNSwtMjEuNWgxMC43NXYtMjEuNWgtMTAuNzV2LTIuNjg3NWMwLC00LjQ1MDUgMy42MTIsLTguMDYyNSA4LjA2MjUsLTguMDYyNWM0LjQ1MDUsMCA4LjA2MjUsMy42MTIgOC4wNjI1LDguMDYyNXYxMy40Mzc1djUuMzc1YzAsMTQuODQwMzcgMTIuMDM0NjMsMjYuODc1IDI2Ljg3NSwyNi44NzVoNS4zNzV2LTIxLjVjLTUuOTM5MzgsMCAtMTAuNzUsLTQuODEwNjMgLTEwLjc1LC0xMC43NWgxMC43NXYtMjEuNWgtMTEuODk0MjljLTMuNTE1MjUsLTEyLjQwMDEzIC0xNC44ODkzNCwtMjEuNSAtMjguNDE4MjEsLTIxLjV6TTM3LjYyNSw2NC41djM3LjYyNWMwLDguODY4NzUgNy4yNTYyNSwxNi4xMjUgMTYuMTI1LDE2LjEyNWgyLjY4NzVjMy44MTA4NywwIDcuMzQ3NDYsLTEuMTUxMTcgMTAuMzA5MDgsLTMuMDk2OTJjLTAuNzA0MTMsMS4wNTg4OCAtMS41MDEwNSwyLjA1MjU4IC0yLjQwNDA1LDIuOTM5NDVjLTMuMzg2MjUsMy40NCAtOC4xMjAwMyw1LjUzMjQ3IC0xMy4yODAwMyw1LjUzMjQ3Yy0yLjkwMjUsMCAtNS42NDM3NSwtMC42NDI5IC04LjA2MjUsLTEuODc5MTV2MTUuNzQ3MDdjMy4yNzg3NSwxLjQ1MTI1IDYuOTMzNzUsMi4yNTcwOCAxMC43NSwyLjI1NzA4aDUuMzc1YzE0Ljc4MTI1LDAgMjYuODc1LC0xMi4wOTM3NSAyNi44NzUsLTI2Ljg3NXYtNDguMzc1aC0yMS41djI5LjU2MjVjMCwxLjQ3ODEyIC0xLjIwOTM4LDIuNjg3NSAtMi42ODc1LDIuNjg3NWMtMS40NzgxMiwwIC0yLjY4NzUsLTEuMjA5MzggLTIuNjg3NSwtMi42ODc1di0yOS41NjI1eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+" alt='somealt' /></a>
          <div className="stroller-text">Need a Babysitter?</div>
          <img className="stroller-icon" onClick={() => logsomething()} src="https://img.icons8.com/plasticine/100/000000/stroller.png" alt='logo' />
        </div>
        {
          imgClicked === true && (<div>
            <ResourcesComponent />
          </div>)
        }
      </div>

      {/* {
        !isLoggedIn
          ?
          <div>
            <h1>You need to <Link to="/login">log in</Link> to use these features.</h1>
          </div>  
        :
        <div>
          {/* THIS IS WHAT USER SEES IF THEY ARE LOGGED IN */}

            {/* RENDER COMPONENTS HERE */}
          {/* <ResourcesComponent /> */}
          </div>

    </div>
    // } */}

  )
}

export default ResourcesPage;