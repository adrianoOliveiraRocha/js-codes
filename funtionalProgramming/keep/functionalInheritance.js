'strict'
/* 
ParentObject.call(this) is necessary to correctly initialize the object being
created 
*/

function Employee() {
  this.name = ''
  this.dept = 'None'
  this.salary = 0.00
}
// Manager
function Manager() {
  Employee.call(this)
  this.reports = []
}
Manager.prototype = Object.create(Employee.prototype)

//IndividualContrubitor
function IndividualContrubitor() {
  Employee.call(this)
  this.active_projects = []
}
IndividualContrubitor.prototype = Object.create(Employee.prototype)

// TeamLead
function TeamLead() {
  Manager.call(this)
  this.dept = "Software"
  this.salary = 100000
}
TeamLead.prototype = Object.create(Manager.prototype)

// Engineer
function Engineer() {
  TeamLead.call(this)
  this.dept = "Javascript"
  this.desktop_id = "8822"
  this.salary = 80000
}
Engineer.prototype = Object.create(TeamLead.prototype)







  
