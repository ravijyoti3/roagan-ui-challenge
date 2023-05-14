import { Button, Result } from "antd";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-100 w-100 flex justify-center items-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <button
            onClick={() => {}}
            type="primary"
            className="bg-dark-purple btn"
          >
            Return To Home
          </button>
        }
      />
    </div>
  );
};

export default NotFound;
