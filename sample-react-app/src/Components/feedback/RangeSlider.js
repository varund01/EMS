import React from 'react'
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import "./feedback.css"
const useStyles = makeStyles((theme) => ({
    root: {
        
        marginTop:40,
        width: 500,
        marginLeft:300
    },
    margin: {
      height: theme.spacing(3),
    },
  }));

const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
        
        thumb:{
            color:  "#4EAF31",
        },
        track: {
            color:  "#4EAF31"
        },
        rail: {
            color: ' #4EAF31'
        },
        markLabel:{
            color:" #4EAF31"
        },
        valueLabel:{
            color:' #4EAF31'
        },
        markLabelActive:{
            color:' #4EAF31'
        },
    }
}
});


function RangeSlider(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ThemeProvider theme={muiTheme}>
                <Slider
                    defaultValue={0}
                    aria-labelledby="discrete-slider-always"
                    step={1}
                    marks={[{value:0,label:props.minLabel},{value:10,label:props.maxLabel}]}
                    min={0}
                    max={10}
                    onChange={props.onChange}
                    valueLabelDisplay="auto"  
                />
            </ThemeProvider>
        </div>
    )
}

export default RangeSlider
