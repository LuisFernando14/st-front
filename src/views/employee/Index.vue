<template>
  <div id="employee">
    <div class="container-fluid mb-5">
      <div class="container mt-3">
        <div class="row">
          <div class="col">
            <h1 class="text-center">Lista de empleados</h1>
          </div>
          <div class="col">
            <a href="/#/employees/add" class="text-right btn btn-sm btn-primary">Nuevo</a>
          </div>
          <table class="table table-sm">
            <thead>
            <tr>
              <th scope="col">Nombre Completo</th>
              <th scope="col">Fecha Nacimiento</th>
              <th scope="col">Departamento</th>
              <th scope="col">Sueldo</th>
              <th scope="col">Acción</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="employee in employees" :key="employee.id">
              <th>{{employee.Nombre}} {{employee.ApPaterno}} {{employee.ApMaterno}}</th>
              <td>{{employee.FecNac | formatDate}}</td>
              <td>{{employee.Departamento}}</td>
              <td>${{employee.Sueldo | formatNumber}}</td>
              <td><a :href="`/#/employees/edit/${employee.Clave_Emp}`">Modificar</a>   |   <a :href="`/#/employees/delete/${employee.Clave_Emp}`">Borrar</a></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Employee',
  mounted () {
    this.getEmployees()
  },
  computed: {

  },
  watch: {

  },
  filters: {
    formatDate: function (value) {
      if (value) {
        return `${value.substr(8, 2)}/${value.substr(5, 2)}/${value.substr(0, 4)}`
      }
    },
    formatNumber: function (value) {
      if (value) {
        return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
    }
  },
  data () {
    return {
      employees: [
        {
          id: 1,
          fullName: 'Luis Fernando Martínez Bueno',
          dob: '14/10/1995',
          department: 'Sistemas',
          salary: '40,000'
        },
        {
          id: 2,
          fullName: 'Karla Rivera Obeso',
          dob: '22/09/1996',
          department: 'Sistemas',
          salary: '60,000'
        }
      ]
    }
  },
  methods: {
    getEmployees () {
      this.$http.get(`/employees/`).then(response => {
        this.employees = response.data
      }).catch(() => {
      })
    }
  },
  created () {
  }
}
</script>
<style scoped>

</style>
