
<script setup>

</script>

<template>
    <div class="mt-4" style="max-width: 90%; width: 400px;">
        <form>
            <div class="d-flex gap-1">
                <div>
                    <img src="" alt="" style="width: 40px; height: 40px;">
                </div>

                <textarea class="form-control ms-2" rows="3" placeholder="¿En que estas pensando?"></textarea>
            </div>

            <div class="d-flex justify-content-between mt-3 py-3" style="border-top: 1px #dddddd solid;">
                <div class="d-flex gap-2"> 
                    <div class="d-flex align-items-center" style="height: 48px;">
                        <i class="fa-solid fa-image d-flex align-items-center justify-content-center"
                            style="width: 48px; height: 48px; font-size: 22px; cursor: pointer; box-shadow: #ebebeb 0 0 15px;">
                            <input type="file" style="position: absolute; opacity: 0; height: 48px; width: 48px;">
                        </i>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary">Postear</button>
            </div>
        </form>
    </div>
</template>

<style scoped></style>