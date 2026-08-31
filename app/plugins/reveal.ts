// Reveal-on-scroll + stat count-up, ported from the source design's
// DCLogic.reveal()/countUp(). Registered as a `v-reveal` directive so any
// section can opt an element in. Every element is visible in the initial
// HTML regardless of this directive - it only animates the transition in,
// and force-reveals after 3.5s so a stuck observer never hides content.
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null
  const fallbackTimers = new WeakMap<HTMLElement, ReturnType<typeof window.setTimeout>>()

  const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function ensureObserver() {
    if (observer) return observer
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          reveal(entry.target as HTMLElement)
          observer?.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.06 },
    )
    return observer
  }

  function countUp(el: HTMLElement) {
    const countEl = el.querySelector<HTMLElement>('[data-count]')
    if (!countEl || countEl.dataset.counted) return
    const target = Number.parseInt(countEl.getAttribute('data-count') || '0', 10)
    const suffix = (countEl.textContent || '').replace(/[0-9]/g, '')
    if (!target) return
    countEl.dataset.counted = '1'
    let i = 0
    const step = () => {
      i += Math.max(1, Math.round(target / 18))
      if (i >= target) {
        countEl.textContent = target + suffix
        return
      }
      countEl.textContent = i + suffix
      requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  function reveal(el: HTMLElement) {
    if (el.dataset.revealed) return
    el.dataset.revealed = '1'
    el.style.opacity = '1'
    el.style.transform = 'none'
    countUp(el)
    const timer = fallbackTimers.get(el)
    if (timer) window.clearTimeout(timer)
  }

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement) {
      if (prefersReduced()) {
        reveal(el)
        return
      }
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition =
        'opacity 0.75s cubic-bezier(0.2,0.8,0.2,1), transform 0.75s cubic-bezier(0.2,0.8,0.2,1)'
      ensureObserver().observe(el)
      fallbackTimers.set(
        el,
        window.setTimeout(() => reveal(el), 3500),
      )
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
      const timer = fallbackTimers.get(el)
      if (timer) window.clearTimeout(timer)
    },
  })
})
