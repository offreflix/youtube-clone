import { Toolbar, Typography, Box, Grid } from '@material-ui/core';
import videos from '../api/api';

function VideosComponents({ classes }) {
  return (
    <Box p={8}>
      <Toolbar />
      <Typography
        variant="h5"
        color="textPrimary"
        style={{ fontWeight: 800, fontSize: 14 }}
      >
        Recomendados
      </Typography>

      <Grid container spacing={2} className={classes.videoContainer}>
        {videos.map((item, index) => (
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Box>
              <img
                style={{ width: '100%' }}
                alt={item.title}
                src={item.thumb}
              />
              <Box>
                <Box display="flex" style={{ gap: '0.7rem' }}>
                  <img
                    style={{
                      width: '2.3rem',
                      height: '2.3rem',
                      borderRadius: '100%',
                    }}
                    alt={item.title}
                    src={item.avatar}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body2"
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      display="block"
                      color="textSecondary"
                      style={{ fontSize: '.75rem' }}
                    >
                      {item.channel}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      style={{ fontSize: '.75rem' }}
                    >
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default VideosComponents;
