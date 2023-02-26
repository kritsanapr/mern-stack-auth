import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";

function Username() {
  return (
    <div className="container mx-auto">
      <div className="flex  h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold text-grey-500">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with us.
            </span>
          </div>

          <form className="py-1">
            <div className="profile flex justify-center py-4">
              <img src={avatar} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center">
              <input type="text" placeholder="Username" />
              <button type="submit">Let's Go</button>
            </div>

            <div className="text-center py-4">
              <span className="text-grey-500">
                Not a member
                <Link className="text-red-500" to={"/register"}>
                  Register now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Username;
