import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className="text-2xl font-bold text-white">
      <span className="text-red-800">N</span>elson
    </div>
  )
}

export const Logo1 = () => {
  return (
    <div className="text-4xl font-bold text-black">
      <span className="text-red-900">N</span>elson
    </div>
  )
}

export default Logo