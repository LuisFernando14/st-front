<template>
  <div id="addEmployee">
    <div class="container">
      <h3>Editar Empleado</h3>
      <EmployeeComponent :action=true></EmployeeComponent>
    </div>
  </div>
</template>
<script>
import EmployeeComponent from '../../components/employee/Employee.vue'
export default {
  name: 'UpdateEmployee',
  components: {
    EmployeeComponent
  }
}
</script>
<style scoped>

</style>
