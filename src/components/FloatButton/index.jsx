import {
  Popover,
  FloatButton,
} from 'antd'
import { useState } from 'react'

const clickButton = (url) => {
  console.log(url)
  window.location.href = url
}

const FloatButtonDiv = ({ icon, url, title }) => {
  const [popOpen, setPopOpen] = useState(true)
  return (
    <Popover
      content={<a onClick={() => setPopOpen(false)}>Close</a>}
      title={title}
      trigger="click"
      open={popOpen}
    >
      {/* TODO: function in props */}
      <FloatButton onClick={() => clickButton(url)} type="primary"
        icon={icon} />
    </Popover>
  )
}
export default FloatButtonDiv