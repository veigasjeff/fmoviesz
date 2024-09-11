
// Function to load the ad code
function loadAdCode() {
  var adScript = document.createElement('script');
  adScript.src = '//thubanoa.com/1?z=8074720';
  adScript.async = true;
  adScript.setAttribute('data-cfasync', 'false');

  // Handle script load errors
  adScript.onerror = function() {
    console.error('Failed to load the ad script');
  };

  // Append the script to the body
  document.body.appendChild(adScript);
}

// Set a timeout to load the ad code after 10 seconds
setTimeout(loadAdCode, 5000); // 10000 milliseconds = 10 seconds

{/* <script async="async" data-cfasync="false" src="//thubanoa.com/1?z=8074720"></script> */}