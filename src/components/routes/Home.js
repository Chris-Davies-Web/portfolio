import React from "react";
import { useSelector, useDispatch } from "react-redux";
import smile from "../../shared/assets/images/smile.svg"

export const Home = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);
    console.log('count', count)
    return (
        <div className='Home'>

            {/* <img src="homepage-responsive.jpg" /> */}
            <div className="homepage-animation">
                <span class="--index-1">C</span>
                <span class="--index-2">H</span>
                <span class="--index-3">R</span>
                <span class="--index-4">I</span>
                <span class="--index-5">S</span>
                <br />
                <span class="--index-6">D</span>
                <span class="--index-7">A</span>
                <span class="--index-8">V</span>
                <span class="--index-9">I</span>
                <span className="red --index-10">E</span>
                <span class="--index-11">S</span>
                <br />
                {/* <div className="smile">
                    <img src={smile} alt="smiley face" />
                </div> */}
                <span class="--index-12">W</span>
                <span class="--index-12">E</span>
                <span class="--index-12">B</span>
            </div>

        </div>
    )
}