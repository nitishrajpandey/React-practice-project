// import React from "react";

import { Container, Header, Input, QrcodeBox } from "./Components";

function App() {
  return (
    <div className="main-bg-color h-[100vh]">
      <div className=" flex justify-center ">
        <Container>
          <Header />
          <Input />
          <QrcodeBox />
        </Container>
      </div>
    </div>
  );
}

export default App;
