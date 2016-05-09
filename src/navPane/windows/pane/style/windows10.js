export default {
  pane: {
    cursor: 'default',
    userSelect: 'none',
    display: 'flex',
    position: 'relative',
    flexGrow: '0',
    flexShrink: '0',
    flexDirection: 'column',
    overflow: 'hidden'
  },

  padding: {
    height: '48px'
  },

  buttonStyle: {
    position: 'absolute',
    padding: '8px 10px',
    top: '7px',
    left: '4px',
    width: '20px',
    height: '20px'
  },

  anchor: {
    display: 'flex',
    alignItems: 'center',
    height: '44px',

    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, .1)',
    },
    ':active': {
      backgroundColor: 'rgba(0, 0, 0, .2)',
    }
  },

  anchorDark: {
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, .1)',
    },
    ':active': {
      backgroundColor: 'rgba(255, 255, 255, .2)',
    }
  },

  span: {
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    letterSpacing: '0.4pt',
    padding: '0 16px',
    transition: 'transform .1s ease-in'
  },

  spanDark: {
    color: '#ffffff',
  },

  pushTransformHover: {
    transition: 'transform .1s ease-in'
  },

  pushTransformActive: {
    transform: 'scale(0.97)',
    transition: 'transform 0s ease-in'
  }
};