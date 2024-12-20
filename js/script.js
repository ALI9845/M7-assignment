// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById('addEmployeeForm')
const EmployeeTable = document.getElementById('employeeTable'). querySelector('tbody')
const employeeCountOutput = document.getElementById('employeeCount')
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0
// FUNCTION TO UPDATE EMPLOYEE COUNT 
function updateEmployeeCount () {
      employeeCountOutput.textContent = `${employeeCount} Employee${employeeCount !== 1 ? 's' : ''}`
}
// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    const name = document.getElementById('name'). value 
    const position = document.getElementById('position'). value 

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const row = EmployeeTable.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const cellName = row .insertCell()
    const cellPosition = row .insertCell()
    const cellActions = row.insertCell()
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellName.textContent =name 
    cellPosition.textContent = position

    // CREATE THE DELETE BUTTON
    const deleteButton = document.createElement('button')
    deleteButton.textCount = 'delete'
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm')
  deleteButton.addEventListener('click', () => {
    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    dcoument.getElementById('name'). focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCountOutput ++
    updateEmployeeCount()

})

// DELETE EMPLOYEE
if (confirm('Are you sure you want to delete this employee?')) {
    row.remove()
    employeeCount--
    updateEmployeeCount();
  }
})
cellActions.appendChild(deleteButton)