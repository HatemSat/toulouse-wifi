<template>
    <div class="modal" :class="{ 'is-active': isModalOpen }">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content">
            <div class="notification">
                <button @click="closeModal" class="delete"></button>
                <span v-html="this.message"></span>
                <br />
                <button @click="closeModal" class="button is-primary is-rounded has-text-weight-bold">OK</button>
            </div>
        </div>
        <button
            class="modal-close is-large"
            @click="closeModal"
            aria-label="close"
        ></button>
    </div>
</template>

<script>
export default {
    name: "Modal",
    props: ["message", "isModalOpen"],
    data() {
        return {};
    },
    methods: {
        closeModal() {
            this.$emit("close");
        },
    },
};
</script>

<style scoped>
.delete {
    background-color: #190072c9;
}
.button {
    background-color: #190072c9 !important;
    opacity: 0.8;
}
.button:hover {
    border: 1px solid black !important;
    background-color: #190072c9 !important;
    opacity: 1;
}
</style>
