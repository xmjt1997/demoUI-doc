<template>
  <a
    class="demo-link"
    :class="[
      type ? `demo-link--${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline',
    ]"
    :href="disabled ? null : href"
    @click="handleClick"
  >
    <slot>默认链接</slot>
  </a>
</template>
<script>
export default {
  name: "DemoLink",
  props: {
    type: {
      type: String,
      default: "default",
    },
    underline: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    href: String,
  },
  methods: {
    handleClick(e) {
      if (!this.disabled) {
        if (!this.href) {
          this.$emit("click", e);
        }
      }
    },
  },
};
</script>
<style lang="less">
@import url("./link.less");
</style>
