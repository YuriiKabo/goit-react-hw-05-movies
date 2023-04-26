import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export const Title = ({ content }) => {
  return (
    <Typography
      variant="h2"
      component="h1"
      gutterBottom
      style={{
        fontWeight: 700,
        marginTop: '1rem',
      }}
    >
      {content}
    </Typography>
  );
};

Title.propTypes = {
  content: PropTypes.string,
};
