<template>
  <div id="employee">
    <div class="container">
      <div class="form-group">
        <label for="employeeName">Nombre</label>
        <input type="text" class="form-control" v-model="employee.name" id="employeeName" aria-describedby="emailHelp"
               placeholder="Nombre">
      </div>
      <div class="form-group">
        <label for="firstLastName">Apellido Paterno</label>
        <input type="text" class="form-control" v-model="employee.firstLastName" id="firstLastName" placeholder="Apellido Paterno">
      </div>
      <div class="form-group">
        <label for="sencondLastName">Apellido Materno</label>
        <input type="text" class="form-control" v-model="employee.secondLastName" id="sencondLastName" placeholder="Apellido Materno">
      </div>
      <div class="form-group">
        <label for="employeeDepartment">Departamento</label>
        <select id="employeeDepartment" v-model="employee.department" class="custom-select">
          <option selected>Departamentos</option>
          <option v-for="department in deparments" :key="department.id" :value="department.id">{{department.nombre}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="employeeSalary">Sueldo</label>
        <input type="number" v-model="employee.salary" class="form-control" id="employeeSalary" placeholder="Sueldo">
      </div>
      <div class="form-group">
        <label for="employeeDob">Fecha de Nacimiento</label>
        <input type="date" v-model="employee.dob" class="form-control" id="employeeDob" placeholder="Fecha de nacimiento">
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <button class="btn btn-success">Agregar</button>
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
    action: Boolean
  },
  mounted () {
    if (this.action) {
      console.log('al cien')
    }
  },
  computed: {},
  watch: {},
  filters: {},
  data () {
    return {
      employee: {
        name: '',
        firstLastName: '',
        secondLastName: '',
        department: '',
        salary: 0,
        dob: ''
      },
      deparments: [
        {
          id: 1,
          nombre: 'Sistemas'
        },
        {
          id: 2,
          nombre: 'Gestion'
        }
      ]
    }
  },
  methods: {},
  created () {
  }
}
</script>
<style scoped>
  .form-group {
    text-align: left;
  }
</style>
