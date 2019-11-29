<template>
  <div class="navbar navbar-expand-lg navbar-light" style="background-color: rgb(235, 215, 218);">
    <a class="navbar-brand" href="#">
      <h3>Examen</h3>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="#/employees">Empleados</a>
        <a class="nav-item nav-link" href="#/departments">Departamentos</a>
      </div>
    </div>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
      </ul>
      <ul class="navbar-nav ml-auto nav-flex-icons">
        <li class="nav-item">
          <a class="nav-item nav-link" href="">Luis Fernando</a>
        </li>
      </ul>
    </div>
  </div>
  <!--</div>-->
</template>
<script>
export default {
  name: 'NavBar',
  data: () => ({
  }),
  methods: {
  }
}
</script>
<style>
  .no-link {
    color: black;
    text-decoration: none;
  }
  .no-link:hover {
    text-decoration: none;
    color: black;
  }
</style>
