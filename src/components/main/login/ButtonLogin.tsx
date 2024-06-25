import { useEffect } from "react"
import styles from "./ButtonLogin.module.css"

export const ButtonLogin = () => {
  useEffect(() => {
    const btn = document.querySelector(`#login-button`) as HTMLButtonElement
    if (btn) {
      const updateCoordinates = (x: number, y: number): void => {

        const rect = btn.getBoundingClientRect()
        const relativeX = x - rect.left
        const relativeY = y - rect.top

        btn.style.setProperty("--x", `${relativeX}px`)
        btn.style.setProperty("--y", `${relativeY}px`)
      }

      const onMouseMove = (e: MouseEvent) => {
        updateCoordinates(e.clientX, e.clientY)
      }

      const onTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          const touch = e.touches[0]
          updateCoordinates(touch.clientX, touch.clientY)
        }
      }

      btn.addEventListener("mousemove", onMouseMove)
      btn.addEventListener("touchmove", onTouchMove)

      return () => {
        btn.removeEventListener("mousemove", onMouseMove)
        btn.removeEventListener("touchmove", onTouchMove)
      }
    }
  }, [])

  return (
    <button id={"login-button"} type="submit" className={styles.ripple}>
      <p  className={styles.ripple_text}>Увійти</p>
    </button>
  )
}
