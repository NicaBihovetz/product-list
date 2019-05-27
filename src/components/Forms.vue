<template>
  <div>
    <div class="forms">
      <div class="forms__inputField">
        <label for="form" class="forms__inputField__form">
          <input 
            id="form" 
            type="text" 
            v-model.trim="product.name" 
            placeholder=" "
          >
          <span class="forms__inputField__title">Товар</span>
          <span class="forms__inputField__border"></span>
        </label>
        <div
          class="forms__inputField__error"
          v-if="product.name.length == 0">Поле не иожет быть пустым!
        </div>
      </div>
    </div>
    <div class="productProject__forms">
      <div class="forms__inputField">
        <label for="form" class="forms__inputField__form">
          <input 
            id="form" 
            type="number" 
            v-model.number="product.quantity" 
            placeholder=" "
          >
          <span class="forms__inputField__title">Количество</span>
          <span class="forms__inputField__border"></span>
        </label>
        <div
          class="forms__inputField__error"
          v-if="product.quantity <= 0">Поле не может быть равно 0!
        </div>
      </div>
    </div>
    <div class="productProject__forms">
      <div class="forms__inputField">
        <label for="form" class="forms__inputField__form">
          <input 
            id="form" 
            type="number" 
            v-model.number="product.cost" 
            placeholder=" "
          >
          <span class="forms__inputField__title">Стоимость</span>
          <span class="forms__inputField__border"></span>
        </label>
        <div 
            class="forms__inputField__error" 
            v-if="product.cost <= 0">Поле не может быть равно 0!
        </div>
      </div>
    </div>
    <button
      v-bind:disabled="!product.name || !product.quantity || !product.cost"
      v-on:click="onSubmit()"
    >{{ labelButton }}</button>
  </div>
</template> 
    
    <script>
export default {
  props: {
    value: Object
  },

  computed: {
    product: function() {
      return {
        ...this.value
      };
    },

    labelButton: function() {
      return !this.product.id ? "Добавить" : "Сохранить";
    }
  },
  methods: {
    onSubmit: function() {
      this.$emit("input", this.product);
    }
  }
};
</script>
    
<style scoped>

.forms span {
  display: block;
  width: 90px;
  font-size: 15px;
  font-family: times;
  text-align: start;
}

.forms__errorMessage {
  font-size: 10px;
  font-family: times;
  text-align: start;
  color: #ff0000;
  width: 160px;
  word-break: break-all;
}

.forms__buttons {
  display: flex;
}

.forms span {
  display: block;
  width: 90px;
  font-size: 15px;
  font-family: "Times New Roman", Times, serif;
}

button {
  font-family: times;
  z-index: 1;
  position: relative;
  font-family: times;
  font-size: inherit;
  color: white;
  background-color: #aba8ce;
  overflow: hidden;
  border: 0;
  height: 30px;
  border-radius: 3px;
  border: 1px solid white;
  outline: none;
}

button::after {
  content: "";
  z-index: -1;
  background-color: hsla(0, 0%, 100%, 0.2);
  position: absolute;
  top: -50%;
  bottom: -50%;
  width: 1.25em;
  transform: translateX(-525%) rotate(35deg);
}

button:active {
  background-color: #8481a7;
}

button:hover {
  cursor: pointer;
}

button:hover::after {
  transition: transform 0.45s ease-in-out;
  transform: translateX(200%) rotate(35deg);
}

* {
  box-sizing: border-box;
}

.forms__inputField__form {
  position: relative;
  width: 100%;
  display: block;
  padding-bottom: 40px;
}

.forms__inputField__title {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 16px!important;
  font-family: inherit;
  color: #9098a9;
  font-weight: 500;
  transform-origin: 0 0;
  transition: all 0.2s ease;
}

.forms__inputField__border {
  position: absolute;
  bottom: 40px;
  left: 0;
  height: 2px;
  width: 100%!important;
  background: #07f;
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all 0.15s ease;
}

input {
  width: 100%;
  border: 0;
  font-family: inherit;
  font-size: inherit;
  box-shadow: inset 0px -2px 0px 0px #c8ccd4;
  transition: all 0.15s ease;
}

.forms__inputField__form input:focus {
  background: none;
  outline: none;
}

input:focus + span {
  color: #07f;
  transform: translateY(-20px) scale(0.75);
}

input:focus + span + .forms__inputField__border {
  transform: scaleX(1);
}

.forms__inputField {
  font-size: 16px;
  font-family: times;
  position: relative;
}

input:not(:placeholder-shown) + span {
  color: #5a667f;
  transform: translateY(-26px) scale(0.75);
}
.forms__inputField__error {
  position: absolute;
  color: rgb(182, 10, 10);
  bottom: 30px;
  font-size: 10px;
}

</style>