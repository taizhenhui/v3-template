<template>
  <div>
    <el-icon 
      :size="20" 
      color="#999" 
      @click="$emit('update:collapse', !collapse)">
        <Expand :class="{collapseOpen: !collapse ,collapseClose: collapse}" />
    </el-icon>
  </div>
</template>

<script setup lang='ts'>
import { Expand } from '@element-plus/icons-vue'
import { defineEmits } from 'vue'
defineProps({
  collapse:{
    type: Boolean,
    required: true
  }
})
defineEmits(["update:collapse"])
</script>

<style scoped lang='scss'>
.collapseOpen{
  transform: rotate(180deg);
  transition: 0.2s;
}
.collapseClose{
  transform: rotate(0);
  transition: 0.2s;
}
</style>