import { Link } from "react-router-dom";

import { BsArrowLeft } from "react-icons/bs";


interface Props{
    label: string;
    hasIcon: boolean;
    where: string;
}

const Button = ({label, hasIcon, where}: Props) => {
  return(
      <button className="button">

        <Link 
            to={where}
            className="button__link"
        > 
            { hasIcon && <BsArrowLeft className="button__icon"/> }  
            <span>{ label }</span>
        </Link>

      </button>
      
  );
};

export default Button;
