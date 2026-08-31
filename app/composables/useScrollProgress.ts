export function useScrollProgress(barRef: Ref<HTMLElement | null>) {
  const prefersReduced = useReducedMotion()

  const onScroll = () => {
    if (!barRef.value) return
    if (prefersReduced.value) {
      barRef.value.style.transform = 'scaleX(1)'
      return
    }
    const max = document.documentElement.scrollHeight - window.innerHeight
    const p = max > 0 ? Math.min(1, window.scrollY / max) : 0
    barRef.value.style.transform = `scaleX(${p})`
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    onUnmounted(() => window.removeEventListener('scroll', onScroll))
  })
}
