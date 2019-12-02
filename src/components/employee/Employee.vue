<template>
  <div id="employee">
    <div class="container">
      <div class="form-group">
        <label for="employeeName">Nombre</label>
        <input type="text" class="form-control" v-model="employee.Nombre" id="employeeName" aria-describedby="emailHelp"
               placeholder="Nombre">
      </div>
      <div class="form-group">
        <label for="firstLastName">Apellido Paterno</label>
        <input type="text" class="form-control" v-model="employee.ApPaterno" id="firstLastName" placeholder="Apellido Paterno">
      </div>
      <div class="form-group">
        <label for="sencondLastName">Apellido Materno</label>
        <input type="text" class="form-control" v-model="employee.ApMaterno" id="sencondLastName" placeholder="Apellido Materno">
      </div>
      <div class="form-group">
        <label for="employeeDepartment">Departamento</label>
        <select id="employeeDepartment" v-model="employee.Departamento" class="custom-select">
          <option selected>Departamentos</option>
          <option v-for="department in deparments" :key="department.Puesto" :selected="department.Puesto === employeeDepartment.Puesto" :value="department.Puesto">{{department.Descripcion}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="employeeSalary">Sueldo</label>
        <input type="number" v-model="employee.Sueldo" class="form-control" id="employeeSalary" placeholder="Sueldo">
      </div>
      <div class="form-group">
        <label for="employeeDob">Fecha de Nacimiento</label>
        <input type="date" v-model="employee.FecNac" class="form-control" id="employeeDob" placeholder="Fecha de nacimiento">
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <button @click="saveEmployee" class="btn btn-success">{{action ? 'Modificar' : 'Guardar'}}</button>
      </div>
      <div class="col-sm">
        <a class="btn btn-secondary m-1 mb-2 waves-effect waves-light" style="color: white" href="#/employees">
          Cancelar
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmployeeComponent',
  props: {
    action: Boolean,
    employeeId: Number
  },
  mounted () {
    if (this.action) { // ya existe
      this.getEmployeeById()
      this.getDepartmentByEmployeeId()
    }
    this.getDepartments()
  },
  computed: {},
  watch: {},
  filters: {},
  data () {
    return {
      employee: {
        Clave_Emp: 0,
        Nombre: '',
        ApPaterno: '',
        ApMaterno: '',
        FecNac: '',
        Departamento: 0,
        Sueldo: 0
      },
      employeeDepartment: {
        Puesto: 0,
        Descripcion: ''
      },
      deparments: [
        {
          Puesto: 1,
          Descripcion: 'Sistemas'
        },
        {
          Puesto: 2,
          Descripcion: 'Gestion'
        }
      ]
    }
  },
  methods: {
    getEmployeeById () {
      this.$http.get(`/employees/${this.employeeId}`).then(response => {
        this.employee = response.data
      }).catch(() => {
      })
    },
    getDepartmentByEmployeeId () {
      this.$http.get(`/employees/${this.employeeId}/department`).then(response => {
        this.employeeDepartment = response.data
      }).catch(() => {
      })
    },
    getDepartments () {
      this.$http.get(`/departments`).then(response => {
        this.deparments = response.data
      }).catch(() => {
      })
    },
    saveEmployee () {
      console.log(this.employee)
      if (this.action) { // Existe
        this.$http.put(`/employees`, this.employee).then(response => {
          this.employee = response.data
        }).catch(() => {
        })
      } else {
        delete this.employee.Clave_Emp
        this.$http.post(`/employees`, this.employee).then(response => {
          this.employee = response.data
        }).catch(() => {
        })
      }
      window.location.replace('/#/employees')
    }
  },
  created () {
  }
}
</script>
<style scoped>
  .form-group {
    text-align: left;
  }
</style>
