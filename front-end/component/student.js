
function checkUserName(allExam, allClass) {
    var idUser = localStorage.getItem('userId')
    var table = document.getElementById('list')
    console.log(allExam.data.length)
    for (i = 0; i < allExam.data.length; i++) {
        for (j = 0; j < allClass.data.length; j++) {
            if (allExam.data[i].className === allClass.data[j].className) {
                for (k = 0; k < allClass.data[j].studentName.length; k++) {
                    if (idUser === allClass.data[j].studentName[k].id) {
                        
                        var newRow = table.insertRow(1)

                        var className = newRow.insertCell(0)
                        var date = newRow.insertCell(1)
                        var build = newRow.insertCell(2)
                        var room = newRow.insertCell(3)
                        var seat = newRow.insertCell(4)
                        var startTime = newRow.insertCell(5)
                        var endTime = newRow.insertCell(6)

                        className.innerHTML = allExam.data[i].className
                        date.innerHTML = allExam.data[i].date
                        build.innerHTML = allExam.data[i].build
                        room.innerHTML = allExam.data[i].room
                        seat.innerHTML = k+1
                        startTime.innerHTML = allExam.data[i].startTime
                        endTime.innerHTML = allExam.data[i].endTime
                    }
                }
            }
        }
    }
}

