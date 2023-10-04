
<script setup>

import NavItemView from '../../components/global/NavItemView.vue';
import FormPostItemView from '../../components/FormPostItemView.vue';
import PostItemView from '../../components/global/PostItemView.vue';

</script>

<template>
    <NavItemView />

    <main style="margin-top: 72px;">
        <div class="d-flex align-items-center justify-content-center">
            <!-- Formulario del post -->
            <FormPostItemView />
        </div>

        <div class="pt-3" style="max-width: 90%; width: 600px; margin: 0 auto;">
            <!-- Posts -->
            <PostItemView />
            <PostItemView />
            <PostItemView />
            <PostItemView />
            <PostItemView />
            <PostItemView />
            <PostItemView />
        </div>
    </main>
</template>