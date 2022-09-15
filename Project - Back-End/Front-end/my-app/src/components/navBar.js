import React from 'react'
import Grid from '@mui/material/Grid';
function Header() {
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={6} mt={3}>
          <div className="header" style={{ paddingLeft: "70px" }}>
            <b>AniSonar</b>
          </div>
          <div style={{ paddingLeft: "70px" }}>
            Anime Finder
          </div>
        </Grid>
        <Grid item xs={2} mt={6}>
        </Grid>

        <Grid item xs={2} mt={7}>
          <div  style={{textAlign: "center"}}>
            Itachi
          </div>
        </Grid>
        <Grid item xs={2} mt={7}>
            <button value={20} onClick={handleLogout}>
					Logout
		    </button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header