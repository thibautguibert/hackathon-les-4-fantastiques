import React from "react";
import arrowLeft from '../Images/arrow-left.svg';
import arrowRight from '../Images/arrow-right.svg';
import arrowTop from '../Images/arrow-top.svg';
import arrowTopLeft from '../Images/arrow-top-left.svg';
import arrowTopRight from '../Images/arrow-top-right.svg';
const signs = {
    "- 98": "↶",
    "-8": "↶",
    "-7": arrowTopLeft,
    "-3": arrowLeft,
    "-2": arrowLeft,
    "-1": arrowTopLeft,
    "0": arrowTop,
    "1": arrowTopRight,
    "2": arrowRight,
    "3": arrowRight,
    "4": arrowTop,
    "5": arrowTop,
    "6": "↻",
    "7": arrowTopRight,
    "8": "↺"
};


class Instruction extends React.Component {
    constructor({ instruction, index }) {
        super({ instruction, index });
        this.state = {
            distance: instruction.distance
        };
        this.convertDistance = this.convertDistance.bind(this);
    }

    componentDidMount() {
        this.convertDistance();
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.convertDistance();
        }
    }

    convertDistance() {
        const { distance } = this.state;
        const { instruction } = this.props;
        if (instruction.distance <= 1000) {
            this.setState({ distance: `${Math.round(instruction.distance)}m` })
                ;
        } else this.setState({ distance: `${Math.round((instruction.distance / 1000) * 10) / 10}km` });
    }
    render() {
        const { distance } = this.state;
        const { instruction, index } = this.props;
        return (
            <div className="instruction-container" >
                <p className="number">{index + 1}.</p>
                <p>{instruction.sign == 0 ? `${instruction.text} sur ${distance}.` : `Dans ${distance}, ${instruction.text.toLowerCase()}.`}</p>
                <img src={signs[instruction.sign]} alt="arrow direction" />
            </div>
        )
    }
}

export default Instruction;