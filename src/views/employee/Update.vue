<template>
  <div id="addEmployee">
    <div class="container">
      <h3>Editar Empleado</h3>
      <EmployeeComponent :employeeId=employeeId :action=true></EmployeeComponent>
    </div>
  </div>
</template>
<script>
import EmployeeComponent from '../../components/employee/Employee.vue'
export default {
  name: 'UpdateEmployee',
  components: {
    EmployeeComponent
  },
  data () {
    return {
      employeeId: this.$route.params.id
    }
  }
}
</script>
<style scoped>

</style>
