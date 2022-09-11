import React from "react";

function HomePage() {
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  return (
    <div>
        HomePage
        
        <button  onClick={handleLogout}>
					Logout
				</button>
    </div>
  );
}
export default HomePage;
