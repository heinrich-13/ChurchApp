<template>
  <div>
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">Church Application</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item" style="padding-left:1em">
            <router-link class="nav-link pr-3" :to='{ name: "viewDailyVerse"}'>View Daily Verse</router-link>
          </li>
          <li class="nav-item" style="padding-left:1em">
            <router-link class="nav-link" :to='{ name: "createDailyVerse"}'>Create Daily Verses</router-link>
          </li>
          <li class="nav-item" style="padding-left:1em">
            <router-link class="nav-link" :to='{ name: "viewPrayerRequest"}'>View Prayer Request</router-link>
          </li>
          <li class="nav-item" style="padding-left:1em">
            <router-link class="nav-link" :to='{ name: "createPrayerRequest"}'>Create Prayer Request</router-link>
          </li>
          <li class="nav-item" style="padding-left:1em">
            <router-link class="nav-link" :to='{ name: "viewUserDetails"}'>View Users</router-link>
          </li>
          <li class="nav-item" style="padding-left:1em">
            <router-link class="nav-link" :to='{name: "createUserDetails"}'>Create User</router-link>
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

</style>
