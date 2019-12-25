# useStateHasCallback
use hooks setState like class components setState

# Usage

```
import { useStateHasCallback } from 'react-use-hooks'

function CountMyRenders() {
  const [count, setCount] = useStateHasCallback(10)
  const click = () => {
    setCount(
      v => v + 1,
      () => {
        console.log('回调23423423')
      }
    )
    console.log('同步点击了')
  }

  return (
    <div>
      <div onClick={click}>点击{count}</div>
    </div>
  )
}
```
