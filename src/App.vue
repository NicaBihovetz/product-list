<template>
  <div id="app" class="productProject" v-cloak>
    <div class="productProject">
      <Forms v-model="product" @input="saveProduct"></Forms>
      <ProductList 
        :products="products" 
        @editProduct="editProduct" 
        @deleteProduct="deleteProduct"
      ></ProductList>
    </div>
  </div>
</template> 

<script>
import Forms from "./components/Forms.vue";
import ProductList from "./components/ProductList.vue";

export default {
  name: "app",
  components: {
    Forms,
    ProductList
  },
  data() {
    return {
      product: {
        id: null,
        name: "",
        quantity: 1,
        cost: 1
      },
      products: [
        {
          id: 1,
          name: "Хлеб",
          quantity: 4,
          cost: 30
        },
        {
          id: 2,
          name: "Яблоко",
          quantity: 8,
          cost: 18
        }
      ]
    };
  },
  methods: {
    applyDefaultValues: function() {
      this.product = {
        id: null,
        name: "",
        quantity: 1,
        cost: 1
      };
    },

    saveProduct: function(product) {
      !product.id ? this.create(product) : this.updateProduct(product);
      this.applyDefaultValues();
    },

    create: function(product) {
      let lastProduct = this.products[this.products.length - 1];
      product.id = lastProduct ? lastProduct.id + 1 : 1;
      this.products.push(product);
    },

    editProduct: function(id) {
      this.product = this.products.find(function(item) {
        return item.id === id;
      });
    },

    updateProduct: function(product) {
      let productId = this.products.findIndex(function(item) {
        return item.id === product.id;
      });
      this.products.splice(productId, 1, product);
    },

    deleteProduct: function(id) {
      let index = this.products.findIndex(function(item) {
        return item.id === id;
      });
      this.products.splice(index, 1);
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}

.productProject {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}

[v-cloak] {
  display: none;
}

.productProject__productList {
  display: flex;
  flex-direction: column;
}

.productProject button:disabled {
  background: linear-gradient(to top, #c1c1c2, #6e6e6e);
  border: 1px solid #979797;
}
</style>
