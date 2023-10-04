
<script setup>

</script>

<template>
    <main class="d-flex align-items-center justify-content-center" style="height: 100vh;" id="form-login">
        <form style="max-width: 85%; width: 500px;">
            <h1 class="text-center mb-3"><span class="fs-5">Bienvenido a</span> <br> K-Social Red</h1>

            <div class="d-flex gap-3 mb-3 justify-content-between">
                <div class="w-100">
                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" required>
                </div>
                <div class="w-100">
                    <label for="exampleInputPassword1" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Apellido" required>
                </div>
            </div>

            <div class="w-100 mb-3">
                <label for="exampleInputPassword1" class="form-label">Nombre de usuario</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Nombre de usuario" required>
            </div>

            <div class="w-100 mb-3">
                <label for="exampleInputPassword1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Email address" required>
            </div>

            <div class="w-100 mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" required>
            </div>

            <button type="submit" class="btn btn-primary">Registrarme :)</button>
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