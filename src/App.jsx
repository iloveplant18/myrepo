import CoursesPage from "./pages/CoursesPage.jsx";
import AppLayout from "./AppLayout.jsx";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0)

  function incrementCartCount() {
    setCartCount(cartCount + 1)
  }

  return (
    <AppLayout bannerText="All courses" cartCount={cartCount}>
      <CoursesPage onCardClick={incrementCartCount} />
    </AppLayout>
  )
}

export default App