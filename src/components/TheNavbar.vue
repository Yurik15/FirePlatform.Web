<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand navibarLogo" href="#">
    <h4>FirePlatform</h4>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link navibarText" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link navibarText" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navibarText" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle navibarText" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item navibarText" href="#">Action</a>
          <a class="dropdown-item navibarText" href="#">Another action</a>
          <a class="dropdown-item navibarText" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'TheNavbar',
}
</script>