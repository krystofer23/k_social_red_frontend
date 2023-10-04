
<script setup>

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary py-3" id="nav_item">
        <div class="container-fluid px-5">
            <h1 class="fs-3 p-0 m-0" id="title">K-Social Red</h1>

            <ul class="d-flex align-items-center p-0 m-0 gap-3" id="nav_sec">
                <li class="p-2"><a href="" class="nav-link">Para ti</a></li>
                <li class="p-2"><a href="" class="nav-link">Siguiendo</a></li>
            </ul>

            <div class="d-flex align-items-center gap-2" id="nav_profile">
                <img src="" alt="" width="40px" height="40px">
                <span class="ps-2">@Nombre del usuario</span>
            </div>
        </div>
    </nav>
</template>

<style>

#nav_item {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: #dadada 0 0 15px;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

@media (max-width: 850px) {
    #title {
        text-align: center;
    }
    #nav_profile {
        display: none; 
    }
}

</style>