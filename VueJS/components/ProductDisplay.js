app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
    /*html*/
            `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" :class="{'out-of-stock-img': !inStock }">
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p>This is {{ description }}.</p>
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>

                    <p>Shipping: {{ shipping }}</p>
                    <product-details :details="details"></product-details>
                    <p>Size:</p>
                    <ul>
                        <li v-for="size in sizes">{{ size }}</li>
                    </ul>
                    
                    <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle"
                    :style="{ backgroundColor: variant.color}"></div>

                    <p v-if="onSale">{{ onSaleMessage }}</p>
                    <p v-else>Off Sale</p>
                    <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
                    <button class="button" v-on:click="removeCart">Remove</button>
                    <br>
                    <a :href="url" target="_blank">GCS230054</a>
                </div>
            </div>
        </div>`,
        data() {
            return {
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'product made by Heulwen',
            selectedVariant: 0,
            onSale: true,
            url:'https://www.google.com',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
            ],
            sizes: ['S', 'M', 'L', 'XL']
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSaleMessage() {
            if (this.onSale) {
                return `${this.brand} ${this.product} is on sale`
            }
            return ''
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
})