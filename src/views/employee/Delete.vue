<template>
  <div id="modifyQuestion">
    <div class="container">
      <div class="container-fluid mb-5">
        <div class="card card-inverse card-primary text-xs-center">
          <div class="card-header card-inverse bg-danger text-light text-center">
            <h1>Borrar Empleado</h1>
          </div>
          <div class="card-block p-2 text-center p-3">
            <h3>{{employee.name}} {{employee.firstLastName}} {{employee.secondLastName}}</h3>
            <p>¿Estás seguro que deseas borrar este empleado?</p>
            <footer>Esta acción no puede ser deshecha</footer>
          </div>
          <div class="mx-auto form-check-inline ">
            <a class="btn btn-secondary m-1 mb-2 waves-effect waves-light" style="color: white" href="#/employees">
              Cancelar
            </a>
            <button @click="deleteEmployee" class="btn btn-danger m-1 mb-2 waves-effect waves-light" style="color: white">Borrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DeleteEmployee',
  props: {

  },
  computed: {

  },
  mounted () {
  },
  components: {

  },
  data () {
    return {
      employee: {
        name: 'Luis Fernando',
        firstLastName: 'Martínez',
        secondLastName: 'Bueno',
        department: '',
        salary: 0,
        dob: ''
      }
    }
  },
  methods: {
    deleteEmployee () {

    }
  },
  created () {
  }
}
</script>
<style scoped>

</style>
