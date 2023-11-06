chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
    if(message.msg === "jerrylize"){
      fetch('https://img-server-host-099056356541.herokuapp.com/img.jpeg')
            .then(res => {
              senderResponse({data: res.url});
            })
            .catch(error => console.log("error", error))
        return true;
    }
  });
  