// Manipulates responseField to render a formatted and appropriate message
const renderResponse = (res) => {
    // Displays either message depending on results
    if(res.errors){
      responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {  
      responseField.innerHTML = `<p>Your shortened url is: </p><p id="shortLink"> ${res.shortUrl} </p>`;
    }
  }
  
  // Manipulates responseField to render an unformatted response
  const renderRawResponse = (res) => {
    // Displays either message depending on results
    if(res.errors){  
      responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {
      // Adds line breaks for JSON
      let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
      structuredRes = `<pre>${structuredRes}</pre>`;
      responseField.innerHTML = `${structuredRes}`;
    }
  }
  
  // Renders the JSON that was returned when the Promise from fetch resolves.
  const renderJsonResponse = (response) => {
    // Creates an empty object to store the JSON in key-value pairs
    let rawJson = {}
    for(let key in response){
      rawJson[key] = response[key]
    }
    // Converts JSON into a string and adding line breaks to make it easier to read
    rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n")
    // Manipulates responseField to show the returned JSON.
    responseField.innerHTML = `<pre>${rawJson}</pre>`
  }

  // Button to copy the shortened link to clipboard.
  const copyToClipboard = () => {
    /* Get the text field */
  var copyText = document.getElementById("shortLink");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text */
  document.execCommand("copy");

  /* Tell user of the copied text */
  responseField.innerHTML = `<p>Copied the text: </p><p>${copyText.value}</p>`;
  }