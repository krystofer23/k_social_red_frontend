
<script setup>

</script>

<template>
    <main class="d-flex align-items-center justify-content-center" style="height: 100vh;" id="form-login">
        <form style="max-width: 85%; width: 400px;">
            <h1 class="text-center mb-3">K-Social Red</h1>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address">
                <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más. :)</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" placeholder="Contraseña" id="exampleInputPassword1">
            </div>

            <button type="submit" class="btn btn-primary">Iniciar sesión</button>
        </form>
    </main>
</template>

<style scoped>

#form-login {
    padding-bottom: 58px;
}

@media (max-width: 700px) {
    #form-login {
        padding-bottom: 240px;
    }
}

</style>