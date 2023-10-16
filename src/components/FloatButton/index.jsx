import {
  Popover,
  FloatButton,
} from 'antd'
import { useState } from 'react'

const FloatButtonDiv = (icon, click, title) => {
  const [popOpen, setPopOpen] = useState(true)
  return (
    <Popover
      content={<a onClick={setPopOpen(false)}>Close</a>}
      title="Title"
      trigger="click"
      open={popOpen}
    >
      <FloatButton onClick={scanQRcode} type="primary"
        icon={<QrcodeOutlined />} />
    </Popover>
  )
}
export default FloatButton