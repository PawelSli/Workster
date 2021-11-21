import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from "@mui/material/Divider";


export default function ExperienceItem({title, company, from, to, image,index,size}) {

    if(to == null){
        to="Up to the present day"
    }

    return (
        <div>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/${image}`} variant="rounded"/>
                </ListItemAvatar>
                <ListItemText
                    primary={title}

                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {company}
                                <br/>
                            </Typography>
                            {from + " — " + to}
                        </React.Fragment>
                    }
                />
            </ListItem>
            {
                (index !== (size-1))?
                    <Divider variant="inset" component="li"/>
                    :<div/>
            }
        </div>
    )

}