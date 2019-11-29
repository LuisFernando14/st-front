<template>
  <div id="addEmployee">
    <div class="container">
      <h3>Agregar Empleado</h3>
      <EmployeeComponent :action=false></EmployeeComponent>
    </div>
  </div>
</template>
<script>
import EmployeeComponent from '../../components/employee/Employee.vue'
export default {
  name: 'AddEmployee',
  components: {
    EmployeeComponent
  }
}
</script>
<style scoped>

</style>
