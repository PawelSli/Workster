import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';


export default function ExperienceItem({title, company, from, to, image}) {


    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/${image}`} variant="rounded"/>
            </ListItemAvatar>
            <ListItemText
                primary={<span contentEditable="true">{title.toString()}</span>}

                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            contentEditable="true"
                        >
                            {company}
                            <br/>
                        </Typography>
                        <span contentEditable="true">{from.toString() + " — " + to.toString()}</span>
                    </React.Fragment>
                }
            />
        </ListItem>
    )

}