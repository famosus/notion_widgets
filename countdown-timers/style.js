@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap');

/* General */

body {
  font-family: 'Sans serif', ;
  background-color: #D1C4E9; color: #D1C4E9
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button,
button:active {
  background-color: rgb (209, 196, 233);
  border: none;
  width: 42px;
  height: 40px;
  border-radius: 100%;
  text-align: center;
  box-shadow: 0.2em 0.2em rgb(209, 196, 233); 
  -webkit-box-shadow: 0.2em 0.2em rgb(209, 196, 233); 
  -moz-box-shadow: 0.2em 0.2em rgb(209, 196, 233);
}

button:focus {
  translate: 0.2em 0.2em;
  box-shadow: 0.2em 0.2em rgb(209, 196, 233) inset;
  -webkit-box-shadow: 0.2em 0.2em rgb(209, 196, 233) inset;
  -moz-box-shadow: 0.2em 0.2em rgb(209, 196, 233) inset;
}

/* Clock Body */

.clock-container {
  background-color: rgb(255,255,255); 
  width: 350px;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 10px 10px lilás;
}

/* Display + Stop/Start/Reset Controls */

#time-left {
  font-size: 70px;
  text-align: center;
  background-color: rgb(255,255,255);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 3px 3px rgb(209, 196, 233) inset;
}

#display-controls {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

#timer-label {
  font-size: 27px; color: #EDECE9;
  text-align: center;
  padding-top: 10px;
  background-color: rgb(209, 196, 233);
  border-radius: 10px;
  height: 40px;
  flex: 2;
  box-shadow: 3px 3px rgb() inset;
}

#timer-ssr {
  flex: 1;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  flex-start: end;
}

/* Timer Length Controls */

.length-container {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}

.inc-dec-btn-container {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 140px;
  height: 60px;
}

.break-container, 
.session-container {
  text-align: center; 
/*   display: inline-block; */
  border: 2px solid rgb(209, 196, 233);
  padding: 10px;
  border-radius: 10px;
  width: 50%;
}

.timer-length {
  font-size: 2em;
}

.break-container,
.inc-arrow {
  margin-right: 12px;
}
