<template>
    <div class="card col-md-6">
        <div class="row no-gutters">
            <div class="col-sm-5">
                <slot name="image">
                    <div class="card-header">
                        <img class="card-img-top" :src="imageUrl" alt="">
                    </div>
                </slot>
            </div>

            <div class="col-sm-7">
                <div class="card-body">
                    <h3 class="card-title">{{title}}</h3>
                    <p class="card-text">{{paragraph.slice(0, 200)}}</p>
                </div>
                <div class="card-footer">
                    <!-- FOOTER SLOT -->
                    <slot name="footer">
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    props: ['title', 'imageUrl', 'paragraph', 'id']
}
</script>

<style scoped>

</style>