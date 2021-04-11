<template>
    <div class="main-container">
        <div class="fixed">
            <Vue2InteractDraggable
                @draggedRight="right"
                :interact-max-rotation="15"
                :interact-out-of-sight-x-coordinate="1200"
                :interact-x-threshold="300"
                :interact-y-threshold="300"
            >
            <div class="card">
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                    >
                <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>
                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </div>
            </Vue2InteractDraggable>
        </div>
    </div>
</template>
<script>
import {Vue2InteractDraggable} from "vue2-interact"
export default {
    components : {
        Vue2InteractDraggable
    },
    data(){
        return{
            cardTitle: "This is Card Title",
            visible: true
        }
    },
    methods(){
        right(){
            setTimeout(() => this.visible = false, 200)
            setTimeout(() => {
                this.visible = true
            },300)
        }
        }
    }

</script>
<style scoped>
.main-container{
    background-color:aqua;
}
.fixed{
    position: fixed;
    left:50%;
}
.card {
    border-radius: 2px;
}

</style>
