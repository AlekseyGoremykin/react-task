import React from 'react';

const CLIENT_ID = 'WT0Jee0Xex6CAg'

const AUTH_LINK = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=token&state=${Math.random()}&redirect_uri=${'http://localhost:3000/callback'}&scope=read`;


function Login() {
  return (
    <a href={AUTH_LINK}>
      Log in to Reddit
    </a>
  );
}

export default Login;
