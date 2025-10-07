import React, { Suspense } from "react";

const Footer = React.lazy(() => import("remote_app/Footer"));

function App() {
  return (
    <div>
      <h1>Host App (Loading Footer from Remote)</h1>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
