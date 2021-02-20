function createStartUI() {
  mainElement.innerHTML = createPlayerList()
}

function createPlayerList() {
  return ` ${createPlayerListTable()}
  <div>
      <form id="player-info" class="needs-validation" novalidate>
          <div class="input-group mb-3">
              <input id="input-player" type="text" class="form-control border border-dark" placeholder="Player Name" >
              <div class="input-group-append">
                  <button id="add-player" class="btn btn-dark" type="button">Add</button>
              </div>
          </div>
      </form>
  </div>    
  `
}

function createPlayerListTable() {
  return `
  <div class="player-table">
      <h3>Player List</h3>
      <table class="table table-dark">
          <tbody>
              <tr>
              <td>Name</td>
              <td>Point</td>
              </tr>
      ${addPlayer()}
          </tbody>
      </table>
  </div>  `
}

function addPlayer() {
  let storageList = [];
  for (let index = 0; index < localStorage.length; index++) {
      let player = JSON.parse(localStorage.getItem(localStorage.key(index)));
      storageList.push(player);
  }
  return createPlayerRow(storageList)
}



