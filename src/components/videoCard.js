import { makeStyles, Box, Avatar, Typography } from '@material-ui/core';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'next/router';

dayjs.extend(relativeTime);

const useStyles = makeStyles((theme) => ({
  caption: {
    fontWeight: 500,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    marginLeft: 12,
  },
  img: {
    width: '100%',
  },
  subcap: {
    marginLeft: 12,
  }
}));

function videoCard({ item }) {
  const classes = useStyles();
  const router = useRouter();
  

  return (
    <Box>
      <img alt={item.title} src={item.thumb} className={classes.img} onClick={() => router.push({
          pathname: '/video/[id]',
          query: {id: item.id},
      })} />
      <Box display="flex" mt="1">
        <Box>
          <Avatar alt={item.authorName} src={item.authorAvatar}></Avatar>
        </Box>
        <Box>
          <Typography
            className={classes.caption}
            gutterBottom
            variant="body1"
            color="textPrimary"
          >
            {item.title}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary" className={classes.subcap}>
            {item.authorName}
          </Typography>
          <Typography variant="body2" color="textSecondary" className={classes.subcap}>
            {`${item.views}  ${dayjs(item.updatedAt).fromNow()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default videoCard;
