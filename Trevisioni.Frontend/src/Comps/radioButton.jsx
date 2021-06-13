import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class RadioButtonsGroup extends React.Component {
    state = {
        value: null,
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                        aria-label="Art Genre"
                        name="artGenre"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="music" control={<Radio />} label="Musica" />
                        <FormControlLabel value="poetry" control={<Radio />} label="Poesia" />
                        <FormControlLabel value="theatre" control={<Radio />} label="Teatro" />
                        <FormControlLabel value="expo" control={<Radio />} label="Mostra" />
                        <FormControlLabel value="stand" control={<Radio />} label="Stand" />
                        <FormControlLabel value="other" control={<Radio />} label="Altro" />
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}
RadioButtonsGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);