import { FunctionComponent } from "react"

type HeaderProps =  {
    title : String;
}

export const Header: FunctionComponent<HeaderProps> = ({ title }) => 
<div>
  <h2>{ title }</h2>
</div>

