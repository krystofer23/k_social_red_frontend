
<script setup>

</script>

<template>
    <div class="bg-light p-4 mb-5">
        <div class="d-flex justify-content-between pb-3">
            <span>@Nombre del usuario</span>
            <span class="" style="text-align: right;">23-04-20 13:15:15</span>
        </div>
        <div class="border-top pt-3 pb-3">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptas ipsum molestiae nostrum id at
                voluptatibus, nulla, officia libero, eius minima saepe dolorum? Veniam ratione necessitatibus laudantium
                aliquid, ex dolores?</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpX1YWKN033tQOff3CzLeyklkAtlhAFmAMhvZA_P7acF1ThvivGzDEEW_jjsrsh8d0Pdg&usqp=CAU"
                alt="img_post" id="img_post">
        </div>
        <div class="border-top pt-3 px-2">
            <i class="fa-regular fa-heart fs-4 p-2" style="cursor: pointer; transition: all .2s ease;"></i>
        </div>
    </div>
</template>

<style scoped>
#img_post {
    width: 99%;
    object-fit: cover;
}

.fa-heart:hover {
    border-radius: 50%;
    box-shadow: #e3e3e3 0 0 15px;
}
</style>