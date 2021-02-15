let renderList=(parray)=> {
    let table = `<table class="table table-striped table-dark table-hover">`;
    table += `<thead>`;
    table += `<tr>
                <th>Student Name</th>
                <th>Score</th>
                <th>Day</th>
              </tr>`;
    table += `</thead>`;
    parray.map((item) => {
        table += `<tr>
                <td id=${item.studentName}>${item.studentName}</td>
                <td id=${item.score}>${item.score}</td>
                <td id=${item.dates}>${item.dates}</td>
              </tr>`;
      })
      .join("");
    table += `</table>`;
    document.querySelector("#student-list").innerHTML = table;

  }

