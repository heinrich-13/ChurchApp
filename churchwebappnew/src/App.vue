<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">Church Application</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Create Daily Verse</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">View Daily Verses</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/viewPR">View Prayer Request</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/createPR">Create Prayer Request</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
