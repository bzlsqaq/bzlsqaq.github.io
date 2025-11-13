<template>
  <a class="math-link" @click.prevent="scrollToTarget">
    <slot>跳转到公式</slot>
  </a>
</template>

<script setup>
import { defineProps } from 'vue'


const props = defineProps({
  targetId: { type: String, required: true },
  offset: {
    type: Number, default: () => {
      return typeof window !== 'undefined' ? window.innerHeight / 3 : 150;
    }
  } // 导航栏高度
})



function scrollToTarget() {
  
  const target = document.getElementById(props.targetId)
  if (!target) return

  // 平滑滚动到目标，避开导航栏
  const offsetTop = target.offsetTop - props.offset
  window.scrollTo({ top: offsetTop, behavior: 'smooth' })

  // 闪烁动画
  target.classList.remove('highlight')
  void target.offsetWidth // 触发重绘
  target.classList.add('highlight')
}

</script>

<style>
.math-link {
  color: rgba(10, 44, 215, 0.44);
  cursor: pointer;
  text-decoration: underline;
}
@keyframes highlight-flash {
  0% {
    background-color: rgba(255, 255, 0, 0.5);
  }

  50% {
    background-color: transparent;
  }

  100% {
    background-color: rgba(255, 255, 0, 0.5);
  }
}

.highlight {
  animation: highlight-flash 1s ease-in-out 2;
}
</style>