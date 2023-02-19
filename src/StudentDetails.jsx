import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export const StudentDetails = ({ data, deleteIcon, editIcon }) => {
  return (
    <div>
      <Card id="student-details">
        <CardHeader id="card-header" title={data.name} />
        <CardContent id="card-content">
          <p>Email : {data.email}</p>
          <p>Standard : {data.standard}</p>
          <p>Address : {data.address}</p>
        </CardContent>
        <CardActions className="edit-delete">
          {deleteIcon} {editIcon}
        </CardActions>
      </Card>
    </div>
  );
};
