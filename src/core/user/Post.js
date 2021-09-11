import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';

export default function Post(props) {
    const {post}=props
    console.log(post)
    const dateToFormat = post.createdAt;
    return (
        <Card style={{width:'70%',margin:'20px auto 0'}}>
        <CardHeader
          avatar={
            <Avatar alt={post.ownerName} aria-label="recipe" src={post.ownerPic} />
          }
          title={post.title}
          subheader={post.ownerName}/>
        <CardMedia
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
    <Moment toNow>{dateToFormat}</Moment>
            {/* <FavoriteIcon /> */}
          </IconButton>
          {/* <IconButton aria-label="share"> */}
            {/* <ShareIcon /> */}
          {/* </IconButton> */}
          {/* <IconButton> */}
            {/* <ExpandMoreIcon /> */}
          {/* </IconButton> */}
        </CardActions>
      </Card>
    )
}
