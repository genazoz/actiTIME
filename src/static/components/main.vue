<template>
    <section>  
    <main>
        <div class="col">
            <div class="flexCol main-title">
                <h1 class="main-title__h1">
                    Features
                </h1>
                <p class="main-title__p">
                    Some of the features and advantages that we provide for those <br> of you who store data in this Data Warehouse.
                </p>
            </div>
            <div class="slider-wrapper">
                <!-- Slick -->
                <div class="slick-slider">
                    <div v-for="(item, index) in features" class="slick-slide">
                        <div class="feature-wrapper" v-bind:new="item.new">
                            <div class="feature-wrapper__num">{{item.num}}</div>
                            <div class="flexCol">
                                <h6 class="feature-wrapper__head">
                                    {{item.title}}
                                </h6>
                                <p class="feature-wrapper__text">
                                    {{item.text}}
                                </p>
                            </div>
                            <button class="feature-wrapper__button">
                                Learn more
                                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 15L21 8L15 1" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21 8H1" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </section>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                features: [
                    {   num: "1", title: "First Feature", text: "Little Red Cap opened her eyes and when she saw the sunbeams dancing to and fro through the trees and how the ground was covered with beautiful flowers." },
                    {   num: "2", title: "Second Feature", text: "Each time she picked one she thought that she could see an even more beautiful one a little way off, and she ran after it, going further and further into the woods." },
                    {   num: "3", title: "Third Feature", text: "The wolf pressed the latch, and the door opened. He stepped inside, went straight to the grandmother's bed, and ate her up." },
                    {   num: "4", title: "Fourth Feature", text: "Little Red Cap had run after the flowers. After she had gathered so many that she could not carry any more, she remembered her grandmother.", new: "" },
                ],
            }
        },
        mounted() {
        }
    }
</script>