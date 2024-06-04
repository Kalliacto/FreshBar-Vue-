<template>
    <button class="btn">
        {{ title }}
    </button>
</template>

<script>
export default {
    name: 'MyButton',
    props: {
        title: {
            type: String,
        },
    },
};
</script>

<style scoped></style>
