
function checkUserName(allExam) {
    var idUser = localStorage.getItem('userName') + " " + localStorage.getItem('userLastname')
    var table = document.getElementById('list')
    console.log(allExam.data.length)
    console.log(idUser)
    for (i = 0; i < allExam.data.length; i++) {
        console.log(allExam.data[i].examiner.length)
        for (j = 0; j < allExam.data[i].examiner.length; j++) {
            console.log(allExam.data[i].examiner[j])
            if (idUser === allExam.data[i].examiner[j]) {
                var newRow = table.insertRow(1)

                var className = newRow.insertCell(0)
                var date = newRow.insertCell(1)
                var build = newRow.insertCell(2)
                var room = newRow.insertCell(3)
                var startTime = newRow.insertCell(4)
                var endTime = newRow.insertCell(5)

                className.innerHTML = allExam.data[i].className
                date.innerHTML = allExam.data[i].date
                build.innerHTML = allExam.data[i].build
                room.innerHTML = allExam.data[i].room
                startTime.innerHTML = allExam.data[i].startTime
                endTime.innerHTML = allExam.data[i].endTime
            }
        }
    }

}

