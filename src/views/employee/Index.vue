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
              <th>{{employee.fullName}}</th>
              <td>{{employee.dob}}</td>
              <td>{{employee.department}}</td>
              <td>{{employee.salary}}</td>
              <td><a :href="`/#/employees/edit/${employee.id}`">Modificar</a>   |   <a :href="`/#/employees/delete/${employee.id}`">Borrar</a></td>
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
  },
  computed: {

  },
  watch: {

  },
  filters: {

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

  },
  created () {
  }
}
</script>
<style scoped>

</style>
