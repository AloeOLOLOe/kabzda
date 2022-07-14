import React, {useState} from "react";

type RatingPropsType = {}

export function UncRating(props: RatingPropsType) {
    let [value, setValue] = useState(0)
    let onClickHandlerOneStar = () => {
        setValue(1)
    }
    let onClickHandlerTwoStar = () => {
        setValue(2)
    }
    let onClickHandlerThreeStar = () => {
        setValue(3)
    }
    let onClickHandlerFourStar = () => {
        setValue(4)
    }
    let onClickHandlerFiveStar = () => {
        setValue(5)
    }
    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={onClickHandlerOneStar}>1</button>
            <Star selected={value > 1}/>
            <button onClick={onClickHandlerTwoStar}>2</button>
            <Star selected={value > 2}/>
            <button onClick={onClickHandlerThreeStar}>3</button>
            <Star selected={value > 3}/>
            <button onClick={onClickHandlerFourStar}>4</button>
            <Star selected={value > 4}/>
            <button onClick={onClickHandlerFiveStar}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b> star </b></span>
    } else {
        return <span> star </span>
    }
}