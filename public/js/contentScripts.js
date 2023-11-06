function jerrylize() {
  let images = document.getElementsByTagName('img')
  for (let i = 0; i < images.length; i++) {
    chrome.runtime.sendMessage({ msg: 'jerrylize' }, function ({ data }) {
      images[i].src = data
    })
  }
}

jerrylize()
