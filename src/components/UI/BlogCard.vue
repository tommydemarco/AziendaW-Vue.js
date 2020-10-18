<template>
    <div class="col-md-6">
        <div class="row no-gutters custom-card mb-4">
            <div class="col-sm-5">
                <slot name="image">
                    <div class="card-header">
                        <img class="card-img-top" :src="imageUrl" alt="">
                    </div>
                </slot>
            </div>

            <div class="col-sm-7 bg-green">
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
.card-body {
    background:white;
}
.card-header {
    padding: 0px;
    height: 100%;
    overflow: hidden;
    max-height: 253px;
}
.custom-card {
    background: white;
    border: 3px solid #16a085;
    transition: all .3s ease-in-out;
    border-radius: 0px;
    overflow:hidden;
}
.custom-card:hover {
    border: 3px solid #1abc9c;
    box-shadow: 0 2px 13px rgba(0, 0, 0, 0.26);
}
.custom-card:hover .card-footer {
    background:#1abc9c;
}
.card-footer {
    background: #16a085;
    border-radius: 0px;
    transition: all .3s ease-in-out;

}
.card-header:first-child {
    border-radius: 0px!important;
}
.card-header img {
    border-radius: 0px!important;
}
.bg-green {
    background: #16a085;
    transition: all .3s ease-in-out;
}
.custom-card:hover .bg-green {
   background:#1abc9c; 
}
</style>