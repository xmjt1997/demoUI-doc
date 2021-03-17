<template>
  <button
    class="dt-button"
    @click="handleClick"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      size ? 'dt-button--' + size : '',
      type ? 'dt-button--' + type : '',
      {
        'is-disabled': disabled,
        'is-round': round,
        'is-plain': plain
      }
    ]">
    <i :class="icon" v-if="icon"></i>
    <span><slot>默认按钮</slot></span>
  </button>
</template>

<script>
export default {
  name: 'DemoButton',
  props: {
    size: String,
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    disabled: Boolean,
    round: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    icon: {
      type: String,
      default: ''
    }
  },
   methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  },
}
</script>
<style lang="less" scoped>
@import url('./button.less');
</style>