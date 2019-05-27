<template>
  <div class="productProject__productList">
    <table class="productProject__productList__list">
      <thead>
        <tr>
          <th>#</th>
          <th>Товар</th>
          <th>Количество</th>
          <th>Стоимость</th>
          <th>Сумма</th>
          <th>Действие</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productList" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.cost }}</td>
          <td>{{ product.quantity * product.cost }}</td>
          <td>
            <div class="productProject__productList__icons">
              <div
                @click="editProduct(product.id)"
                class="productProject__productList__icons__editIcon"
              ></div>
              <div
                @click="deleteProduct(product.id)"
                class="productProject__productList__icons__deleteIcon"
              ></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
export default {
  props: {
    products: Array
  },
  computed: {
    productList: function() {
      return this.products;
    }
  },
  methods: {
    editProduct: function(id) {
      this.$emit("editProduct", id);
    },

    deleteProduct: function(id) {
      this.$emit("deleteProduct", id);
    }
  }
};
</script>
  
<style scoped>
.productProject__productList__list {
  border-collapse: collapse;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  padding-top: 5px;
  height: 30px;
  font-size: 14px;
  color: black;
  font-family: "Times New Roman", Times, serif;
  background: white;
}

.productProject__productList__list--product {
  width: 100px;
}

.productProject__productList__list td,
.productProject__productList__list th {
  font-family: "Roboto Slab", serif;
  word-break: break-all;
}

.productProject__productList__list th {
  font-size: 18px;
}

tr {
  border-bottom: 1px solid #00000012;
}

.productProject__productList__list table {
  border: 1px solid #b8b6b6;
  font-size: 14px;
  text-align: center;
}

.productProject__productList__list th {
  text-align: center;
  color: #271c1c;
  width: 125px;
  text-align: center;
  padding: 10px 0;
}

.productProject__productList__list tr td:last-child {
  border-right: none;
}

.productProject__productList {
  display: flex;
  flex-direction: column;
}

.productProject__productList__list tbody {
  display: block;
  overflow: auto;
  height: 300px;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.productProject__productList__list thead tr {
  display: block;
  border-bottom: 1px solid #00000012;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

.productProject__productList__list th,
.productProject__productList__list td {
  width: 125px;
  text-align: center;
  width: 125px;
  text-align: center;
  height: 40px;
}

.productProject__productList__icons {
  display: flex;
  justify-content: space-evenly;
}

.productProject__productList--btnStyle {
  width: 124px;
}

.productProject button {
  padding-top: 5px;
  border-radius: 5px;
  height: 30px;
  background: linear-gradient(to top, #a1887f, #795548);
  border: 2px solid #795548;
  font-size: 14px;
  color: white;
  text-shadow: 0 1px 1px #2d2020;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
}

.productProject button:disabled {
  background: linear-gradient(to top, #c1c1c2, #6e6e6e);
  border: 2px solid #979797;
}

.productProject button#addItems {
  width: 70px;
}

.productProject button:active {
  background: linear-gradient(to top, #795548, #a1887f);
  border: 2px solid #795548;
  text-shadow: 0 1px 1px #2d2020;
}

.productProject button:focus {
  outline: 0;
}

.productProject__productList__icons {
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
}

.productProject__productList__icons__deleteIcon {
  background: url(../assets/delete.png) no-repeat;
  width: 20px;
  height: 20px;
  background-size: contain;
  opacity: 0.2;
}

.productProject__productList__icons__deleteIcon:hover,
.productProject__productList__icons__editIcon:hover {
  opacity: 1;
}

.productProject__productList__icons__editIcon {
  background: url(../assets/edit.png) no-repeat;
  width: 20px;
  height: 20px;
  background-size: contain;
  opacity: 0.2;
}
</style>