
<script setup>

import NavItemView from '../../components/global/NavItemView.vue';
import PostItemView from '../../components/global/PostItemView.vue';

</script>

<template>
    <NavItemView />

    <main class="" style="margin-top: 82px;">
        <div class="d-flex align-items-start justify-content-center px-5 pt-5 gap-5 w-100">
            <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
                alt="img_profile" id="img_profile">

            <div class="d-flex flex-column justify-content-between pt-2" style="height: 150px;">
                <div>
                    <p class="p-0 m-0 fs-2">Nombre + Apellido</p>
                    <p>@Nombre de usuario</p>
                </div>

                <button class="btn bg-dark" style="color: #fff;">Cambiar contraseña</button>
            </div>
        </div>

        <div class="py-5">
            <p class="text-center fs-2">MIS POST</p>

            <div class="pt-3" style="max-width: 90%; width: 600px; margin: 0 auto;">
                <PostItemView />
                <PostItemView />
                <PostItemView />
                <PostItemView />
            </div>
        </div>

    </main>
</template>

<style scoped>

#img_profile {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 50%;
}

</style>