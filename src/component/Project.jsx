import React from 'react'
import "./project.css"

function Project() {
    return (
        <div id='project'>
            <h1 >Projects</h1>
            <div className="projectList">
                <div className="proCard">
                    <div class="card">
                        <img src="./image/imgGen.png" alt="" />
                        <div class="card__content">
                            <p class="card__title">Image Generator </p>
                            <p class="card__description"><a href="https://github.com/AniketRModak/ImageGenratorWithUI"><button>Know More</button></a></p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="./image/VA.png" alt="" />
                        <div class="card__content">
                            <p class="card__title">Virtual Assistant</p>
                            <p class="card__description"><a href="https://github.com/AniketRModak/TyBscItLastProject/tree/master/virtualAssistance"><button>Know More</button></a></p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="./image/let.png" alt="" />
                        <div class="card__content">
                            <p class="card__title">ChatBot</p>
                            <p class="card__description"><a href="https://github.com/AniketRModak/TyBscItLastProject/tree/master/LetChat"><button>Know More</button></a></p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="./image/Trans.png" alt="" />
                        <div class="card__content">
                            <p class="card__title">Translator</p>
                            <p class="card__description"><a href="https://github.com/AniketRModak/TyBscItLastProject/tree/master/translator"><button>Know More</button></a></p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="./image/agg.png" alt="" />
                        <div class="card__content">
                            <p class="card__title">Agriculture </p>
                            <p class="card__description"><a href="#"><button>Know More</button></a></p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="./image/shoe.png" alt="" />
                        <div class="card__content">
                            <p class="card__title">Shoe Shop</p>
                            <p class="card__description"><a href="https://github.com/AniketRModak/Bshoe"><button>Know More</button></a></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project