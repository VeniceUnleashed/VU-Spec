import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Kill from '../components/Killfeed/Kill'

class Killfeed extends Component
{
    static propTypes = {
        killfeed: PropTypes.object,
        players: PropTypes.object
    };

    static defaultProps = {
        killfeed: { kills: [] },
        players: {}
    };

    shouldComponentUpdate(nextProps)
    {
        let props = this.props;

        if (props.killfeed.kills.length != nextProps.killfeed.kills.length)
            return true;

        for (let i = 0; i < props.killfeed.kills.length; ++i)
        {
            if (props.killfeed.kills[i].killer !== nextProps.killfeed.kills.killer ||
                props.killfeed.kills[i].killed !== nextProps.killfeed.kills.killed ||
                props.killfeed.kills[i].weapon !== nextProps.killfeed.kills.weapon)
                return true;
        }

        return false;
    }

    render()
    {
        const { killfeed, players } = this.props;

        let kills = [];

        let startingIndex = killfeed.kills.length - 5;

        if (startingIndex < 0)
            startingIndex = 0;

        for (let i = startingIndex; i < killfeed.kills.length; ++i)
        {
            let killer = killfeed.kills[i].killer != 0 ? players[killfeed.kills[i].killer] : null;
            let killed = players[killfeed.kills[i].killed];

            kills.push(<Kill key={i} killer={killer} killed={killed} weapon={killfeed.kills[i].weapon} />);
        }

        return (
            <div className="killfeed">
                {kills}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        killfeed: state.killfeed,
        players: state.player.players
    };
};

export default connect(
    mapStateToProps
)(Killfeed);