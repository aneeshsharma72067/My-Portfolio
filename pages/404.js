import Image from "next/image";
import Link from "next/link";
import React from "react";
import ErrorImage from "../public/images/404error.svg";

function PageNotFound() {
  return (
    <div id="page_error">
      <div className="error_left">
        <Image src={ErrorImage} alt="errorimage.svg" />
      </div>
      <div className="error_right">
        <div className="whoops">Whoops !</div>
        <div className="error">
          <span>404</span> Page Not Found
        </div>
        <div className="error__message">
          We could not find what you were looking for ! Check if you have
          entered the address correctly.
        </div>
        <Link href={"/"} className="error__link">
          Take Me to Homepage
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
