import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import ImageSearch from '@mui/icons-material/ImageSearch';


export default function CompanyItem({image,title, from}) {

    return (
        <ListItem alignItems="flex-start" secondaryAction={
            <div>
                <IconButton edge="end" aria-label="look">
                    <ImageSearch />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </div>
        }>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/${image}`} variant="rounded"/>
            </ListItemAvatar>
            <ListItemText
                primary={title.toString()}

                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            created: {from}
                            <br/>
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}