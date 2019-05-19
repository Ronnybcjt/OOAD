/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
function checkEmpty () {
  if (document.getElementById('username').value == '' || document.getElementById('password').value == '') {
    alert('กรุณากรอกข้อมูลให้ครบถ้วน')
    return false
  } else {
    console.log('check empty : correct')
    return true
  }
}

function isNumberKey (evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) { return false }

  return true
}

function changePage (a) {
  if (a === 'เจ้าหน้าที่') {
    document.location.href = './officialPage.html'
  } else if (a === 'นิสิต') {
    document.location.href = './studentPage.html'
  } else if (a === 'อาจารย์') {
    document.location.href = './teacherPage.html'
  }
}
