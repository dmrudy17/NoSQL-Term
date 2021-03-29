<template>
<div class="main-input">
    <input type="file" @change="onFileSelected()">
    <button @click="onUpload()">Upload</button>
</div>
</template>
<script>
export default {
    data(){
        return{
            selectedFile: null
        }
    },
    methods: {
        onFileSelected(event)
        {
            this.selectedFile = event.target.file[0];
        },
        onUpload()
        {
            
        }
    }
};
</script>
<style scoped>

</style>
