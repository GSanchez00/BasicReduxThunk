import React from 'react';
import ReactLoading from "react-loading";

const Loading = props => {
    return(
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ReactLoading type={"bubbles"} color="#349eeb" />
      </div>
      )
  };

  export default Loading