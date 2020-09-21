import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class SortButtons extends React.Component {
    constructor(props) {
        super(props);
        this.changeFilter = this.changeFilter.bind(this);
    }

    changeFilter(e) { this.props.changePageParent(e); }

    render() {
        return (
            <Grid container direction="column" alignItems="center" >
                <Grid item xs={8}>
                    <Button onClick={() => this.changeFilter(0)} variant="contained" color="primary">
                        Show All
                    </Button>
                    <Button onClick={() => this.changeFilter(1)} variant="contained" color="primary">
                        By Most Location
                    </Button>
                    <Button onClick={() => this.changeFilter(2)} variant="contained" color="primary">
                        By Oldest
                    </Button>
                </Grid>
            </Grid >
        );
    }

}

export default SortButtons;

