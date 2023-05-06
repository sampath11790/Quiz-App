import { Avatar, AvatarGroup, Box, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import {
  Star,
  StarBorder,
  WatchLaterOutlined,
  HelpOutlineOutlined,
  StickyNote2Outlined,
  Book,
  MailOutlineOutlined,
  SaveAltRounded,
  ShareRounded,
  BorderColorRounded,
} from "@mui/icons-material";
import image1 from "../../Images/image1.jpg";

import "./Home.css";
import { useNavigate } from "react-router-dom";
import SimpleDialogDemo from "../Pop up/popup";

const Home = () => {
  let navigate = useNavigate();
  function handleClick() {
    // alert("some");
    const isconfirm = window.confirm("are you ready to take test");
    if (isconfirm) {
      navigate("/test");
    }
    return;
  }
  return (
    <Box
      sx={{
        background: "light",
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "flex-start", md: "center" },
        flexDirection: "column",
      }}
    >
      <div className="img-container">
        <img src={image1}></img>
      </div>
      {/* <div className="img-container">
        <img src="https://th.bing.com/th/id/R.c324072e23651b550c7fe81dcf654602?rik=bG0SPgwetTWG%2fg&riu=http%3a%2f%2femoryspoke.org%2fwp-content%2fuploads%2f2015%2f08%2fcollegegirl.jpg&ehk=AVgVmKH4mNX4g4sc9qL8smvbHR8qAmtHIorfKqRJxdI%3d&risl=&pid=ImgRaw&r=0"></img>
      </div> */}
      <h2 className="head-name">
        The <span style={{ color: "green" }}>Daily</span> JavaScript{" "}
        <span style={{ color: "green" }}> Quiz</span>
      </h2>
      <Box sx={{ width: { xs: "100", md: "50%" } }}>
        <div className="icon-container">
          <div className="icon-text">
            <MailOutlineOutlined
              style={{ color: "purple" }}
            ></MailOutlineOutlined>

            <span className="spantext">leave a comment</span>
          </div>

          <div className="icons">
            <AvatarGroup total={24}>
              <Avatar
                alt="Remy Sharp"
                src="https://i.pinimg.com/originals/56/fe/c1/56fec125a824d4a1c4430abe9a1ef3b1.png"
              />
              <Avatar
                alt="Travis Howard"
                src="https://th.bing.com/th/id/OIP.TYQAtbFN4KP8Ba63BZ6PEQHaH6?pid=ImgDet&w=500&h=534&rs=1"
              />
              <Avatar
                alt="Agnes Walker"
                src="https://i.pinimg.com/474x/24/4d/4a/244d4a8dbce2047a5640c23368153849.jpg"
              />
              <Avatar
                alt="Trevor Henderson"
                src="https://wallpapercave.com/wp/wp7900881.jpg"
              />
            </AvatarGroup>
          </div>
          <div>
            {[...Array(4)].map((_, index) => (
              <Star key={index} style={{ color: "yellow" }} />
            ))}
            <StarBorder style={{ color: "yellow" }} />
            <span>4 Ratings(5.0)</span>
          </div>
        </div>
      </Box>
      <div className="icon-text">
        <SaveAltRounded style={{ color: "purple" }}></SaveAltRounded>

        <span className="spantext">Save Quiz</span>
      </div>
      <div className="icon-text">
        <ShareRounded style={{ color: "purple" }}></ShareRounded>

        <span className="spantext">Challenge a Friend </span>
      </div>
      <p>
        The Javascript Proficiency Test is a comprehensive evaluation of an
        individual's knowledge and skills in using Javascript. The test covers a
        wide range of topics, including data manipulation, formatting,
        functions, and more. The questions are designed to assess an
        individual's understanding of the basic and advanced features of
        Javascript, including the use of formulas and functions, conditional
        formatting,DOM manipulation and responsive designs, and data management.
      </p>

      <Box sx={{ width: { xs: "100", md: "50%" } }}>
        <Stack spacing={1}>
          <h4>This Quiz Includes</h4>
          <div className="icon-text">
            <StickyNote2Outlined
              style={{ color: "purple" }}
            ></StickyNote2Outlined>
            <span className="spantext">50% passing percentage</span>
          </div>
          <div className="icon-text">
            <HelpOutlineOutlined style={{ color: "purple" }} />{" "}
            <span>5 Qustions</span>
          </div>
          <div className="icon-text">
            <WatchLaterOutlined style={{ color: "purple" }} />
            <span> 10 min</span>
            {/* 10 min */}
          </div>
          <div className="icon-text">
            <Book style={{ color: "purple" }}></Book>
            <span className="spantext">1 Attempt Daily</span>
          </div>
        </Stack>
      </Box>
      <div>
        <SimpleDialogDemo></SimpleDialogDemo>
        {/* <Button
          variant="contained"
          sx={{ borderRadius: 15, width: 200, bgcolor: "purple" }}
          onClick={handleClick}
        >
          <BorderColorRounded></BorderColorRounded>
          Take Quiz
        </Button> */}
      </div>
    </Box>
  );
};
export default Home;
