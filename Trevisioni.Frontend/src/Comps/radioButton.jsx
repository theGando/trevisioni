import * as React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function ControlledRadioButtonsGroup() {
    const [value, setValue] = React.useState(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Art Genre</FormLabel>
            <RadioGroup
                aria-label="Genre"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="music" control={<Radio />} label="Music" />
                <FormControlLabel value="theatre" control={<Radio />} label="Theatre" />
                <FormControlLabel value="lectures" control={<Radio />} label="Lectures" />
                <FormControlLabel value="visualArts" control={<Radio />} label="Visual Arts" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>
    );
}