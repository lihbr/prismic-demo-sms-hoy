<!-- HEALTH:UNKNOWN header-burger -->
<template>
  <button
    class="headerBurger p-2 font-bold text-blue text-xl cursor-pointer focus:outline-none"
    :class="{ active: cValue }"
    @click="cValue = !cValue"
  >
    <span class="bg-blue inline-block relative" />
    Menu
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cValue: false
    };
  },
  watch: {
    cValue() {
      this.$emit("input", this.cValue);
    },
    value() {
      this.cValue = this.value;
    }
  }
};
</script>

<style scoped>
.headerBurger span {
  height: 3px;
  width: 18px;
  transition: 0s background 0.15s;
  top: -4px;
}

.headerBurger span::before,
.headerBurger span::after {
  content: "";
  transition: 0.15s margin 0.15s, 0.15s transform;
  height: 3px;
  width: 22px;
  will-change: transform;
  @apply right-0 block absolute bg-blue;
}

.headerBurger span::before {
  margin-top: -7px;
}

.headerBurger span::after {
  margin-top: 7px;
}

.headerBurger.active span {
  background: transparent;
}

.headerBurger.active span::before,
.headerBurger.active span::after {
  transition-delay: 0s, 0.2s;
  @apply mt-0;
}

.headerBurger.active span::before {
  transform: rotate(45deg);
}

.headerBurger.active span::after {
  transform: rotate(-45deg);
}
</style>
