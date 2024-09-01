import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import moment from "moment-timezone";

const ProgressToRead = () => {
  var a = moment.tz("2013-11-18 11:55", "Asia/Taipei");

  <div>
    <p className="text-5xl">
      {a.format()}
    </p>
  </div>;
};

export default ProgressToRead;
