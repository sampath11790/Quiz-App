import * as React from "react";

import { Box, Button, Dialog, Stack } from "@mui/material";
import {
  BorderColorRounded,
  HelpOutlineOutlined,
  StickyNote2Outlined,
  WatchLaterOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function SimpleDialog(props) {
  let navigate = useNavigate();
  function handleClick() {
    // alert("some");

    navigate("/test");

    return;
  }
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  //   const handleListItemClick = (value) => {
  //     onClose(value);
  //   };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth="md"
      PaperProps={{
        sx: {
          maxWidth: "100%",
          overflow: "hidden",
          borderRadius: 6,
          mb: -17,
          bgcolor: "lightyellow",
        },
      }}
      BackdropProps={{
        sx: { backgroundColor: "transparent" },
      }}
    >
      {/* <DialogTitle>Set backup account</DialogTitle> */}
      <Box sx={{ p: 3 }}>
        <Stack spacing={2}>
          <h3> Quiz Rules</h3>
          <div className="icon-text">
            <StickyNote2Outlined
              style={{ color: "green" }}
            ></StickyNote2Outlined>
            <span className="spantext">50% passing percentage</span>
            <br></br>
            <span>All the best! see you on the other side </span>
          </div>
          <div className="icon-text">
            <HelpOutlineOutlined style={{ color: "green" }} />{" "}
            <span>5 Qustions</span>
            <br />
            <span>we believe that you will ace it </span>
          </div>
          <div className="icon-text">
            <WatchLaterOutlined style={{ color: "green" }} />
            <span> 5 min</span>
            <br />
            <span>Keep in mind that it's a time-bound quiz</span>
            {/* 10 min */}
          </div>
        </Stack>
        <div className="start-button">
          <Button
            variant="contained"
            sx={{ borderRadius: 15, width: 100, bgcolor: "purple" }}
            onClick={handleClick}
          >
            start
          </Button>
        </div>
      </Box>
    </Dialog>
  );
}

export default function SimpleDialogBox() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <br />
      <Button
        variant="contained"
        sx={{ borderRadius: 15, width: 200, bgcolor: "purple", mb: 5 }}
        onClick={handleClickOpen}
      >
        <BorderColorRounded></BorderColorRounded>
        Take Quiz
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
