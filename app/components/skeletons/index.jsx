import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1000}
    height={1000}
    viewBox="0 0 1000 1000"
    backgroundColor="#f3f3f3"
    foregroundColor="#ccc"
    {...props}
  >
    <rect x="6" y="19" rx="0" ry="0" width="970" height="971" />
  </ContentLoader>
)

export default MyLoader

