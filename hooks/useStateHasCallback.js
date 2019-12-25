import { useState, useEffect, useRef } from "react"
export default function useStateHasCallback(initState) {
  const [state, setState] = useState(initState)
  const ref = useRef(null)
  useEffect(() => {
    const _cb = ref.current
    if (_cb) {
      _cb()
    }
  }, [state])
  const _setState = (v, cb) => {
    if (cb) {
      ref.current = cb
    }
    setState(v)
  }
  return [state, _setState]
}
