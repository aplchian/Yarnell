

$(document).ready(function(){
  $.getJSON( "http://localhost:2368/ghost/api/v0.1/users/?access_token=d9VSg9XMTTBAeuByvTrd6Cm8VsW3ZiLi6wH9MHJPIhMmxrJoAUs36lvfaWqakTugRnf49zY0MK9C8ekTGPBSvCxjoLVT4mBC9ewPWp7QCQ77mQC9q74a1SXd5g0yWPiSUDAeDHd8K2ycQPOMVpuKCDvOx0O5EpwqZ6rS8J0Ezkdzt6xl8FxV1Rx6xzdxV7K4YREhJj1A2yCZT7ltXwYHqHYUsrpXGNlhKDOb4jJACzrlebJZ2wxmg3aLFjz7Vvk", function( data ) {
    console.log('woot!')
    console.log(data)
  });
})
