export function useCursorGlow() {
  const glowRef = ref<HTMLElement | null>(null)
  const prefersReduced = useReducedMotion()

  function onMove(e: MouseEvent) {
    if (prefersReduced.value || !glowRef.value) return
    glowRef.value.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
  }

  return { glowRef, onMove }
}
