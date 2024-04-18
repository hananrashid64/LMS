import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop:"8vh" }}>
      <Card sx={{ maxWidth: 450, height: "500px", boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)", transition: "box-shadow 0.3s ease" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="290"
            image="images/Teacher - Copy.png"
            alt=" "
          />
          <CardContent style={{ height: '200px' }}>
            <Typography gutterBottom variant="h5" component="div" style={{ marginLeft: "15vh", color: "#114A37", marginTop: "5vh" }}>
              Arabic Teaching
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginLeft: "8vh", color: "#114A37", marginTop: "3vh" }}>
              Unlock the Beauty and Wisdom of the Quran
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 450, height: "500px", boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)", transition: "box-shadow 0.3s ease" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="290"
            image="images/Childs.png"
            alt=" "
          />
          <CardContent style={{ height: '200px' }}>
            <Typography gutterBottom variant="h5" component="div" style={{ marginLeft: "15vh", color: "#114A37", marginTop: "5vh" }}>
              Quran Teaching
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginLeft: "8vh", color: "#114A37", marginTop: "3vh" }}>
              Unlock the Beauty and Wisdom of the Quran
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 450, height: "500px", boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)", transition: "box-shadow 0.3s ease" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="290"
            image="images/Library.png"
            alt=" "
          />
          <CardContent style={{ height: '200px' }}>
            <Typography gutterBottom variant="h5" component="div" style={{ marginLeft: "15vh", color: "#114A37", marginTop: "5vh" }}>
              Islamic Studies
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginLeft: "8vh", color: "#114A37", marginTop: "3vh" }}>
              Unlock the Beauty and Wisdom of the Quran
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>

    
  );
}


// import React from "react";
// import "./Cards.css";
// const Cards = () => {
//   return (
//     <div className="courses-container">
//       <div className="courses-offered">
//         <p>
//           Courses <span id="span">Offered</span>
//         </p>
//         <p id="para">
//           Your best source of knowledge about Skills and Islamic values
//         </p>
//       </div>
//       <div className="cards">
//         <div className="card1">
//           <img src="images/Teacher.png" alt="" srcset="" />
//           <p id="arab">Arabic Teaching</p>
//           <p id="wisdom">Unlock the beauty and the wisdom of the Quran</p>
//         </div>
//         <div className="card2">
//           <img src="images/Childs.png" alt="" srcset="" />
//           <p id="arab">Quran Teaching</p>
//           <p id="wisdom">Unlock the beauty and the wisdom of the Quran</p>
//         </div>
//         <div className="card3">
//           <img src="images/Library.png" alt="" srcset="" />
//           <p id="arab">Islamic Studies</p>
//           <p id="wisdom">Unlock the beauty and the wisdom of the Quran</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;