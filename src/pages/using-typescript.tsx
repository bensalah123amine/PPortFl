// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, graphql} from "gatsby"



type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  location,
}) => (
 <div>
  slm
 </div>
)



export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
