import './post.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //* import the fontawesome icon
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
function Post () {
    const [warn, setwarn] = useState(true) //* true = warn, false = no warn
    const [value, setvalue] = useState()
    const [goback, setgoback] = useState() //* true = show, false = hide
    let count = 0;

    let data = [ //* array of objects storing data
      {
        id: 5,
        url: `https://picsum.photos/200/300?random&${Math.random() * 500}`,
        story_name: 'story 5',
      },
    ]


    const sendPost = () => {
        const eInput = document.getElementById('header_input');
        const txa = document.getElementById('field_post');
        const main = document.querySelector('.main');
        setvalue(!value + console.log(eInput.value));
        setvalue(!value + console.log(txa.value));

        if(!eInput.value || !txa.value) {
            alert('Please fill out the form');
            return;
        }
        
        let NewPost = document.createElement('div');
        main.appendChild(NewPost);

        // console.log(data[4].url);
        NewPost.innerHTML = `<div class="postdiv">
        <div class="post_image">
        <img src=${data[0].url} alt="post_img"/>
        </div>
        <div class="bigText">${eInput.value}</div>
        <p class="small_text">${txa.value}</p>
        <div class="buttons2">
          <div class="btns">
            <div class="btn_texts" id='like2'><i class="fa-solid fa-thumbs-up"></i> Like <span id="newcount">${count}</span></div>
            <div class="btn_texts"><i class="fa-solid fa-message"></i> Comment</div>
            <div class="btn_texts"><i class="fa-solid fa-share"></i> Share</div>
          </div>
        </div>
      </div>`

      localStorage.setItem("store_feed", `${NewPost.innerHTML}`); //* set the local storage to the new post
      let retrieveFeed = localStorage.getItem("store_feed");
      console.log(retrieveFeed);

      const like2 = document.getElementById('like2');
      const counter = document.getElementById('newcount');


      like2.addEventListener("click", function() {
          console.log("clicked");
          const like2 = document.getElementById('like2');

          count++; //* incrementing the count

    localStorage.setItem("like_count2", `${count}`) //* setting the local storage
    var retrieveLocalData2 = localStorage.getItem("like_count2"); //* getting the local storage
    console.log(retrieveLocalData2) //* logging the local storage to the console
    console.log(`counter: ${count}`); //* logging the counter to the console
    counter.innerHTML = `${retrieveLocalData2}`; //* setting the counter to the local storage

    if(count > 10){ //* if the count is greater than 10
      console.warn("You've reached your like limit"); //* warn the user
      setwarn(!warn + like2.classList.add("active")); //* set the warn to true
    }else{ //* if the count is less than 10
      console.log("You can like more") //* log the user can like more
      setwarn(!warn + like2.classList.remove("active")); //* set the warn to false
    }
    }); // end of like2 event listener
        var retrieveLocalData2 = localStorage.getItem("like_count2");
        counter.innerHTML = `${retrieveLocalData2}`; //* set the counter to the local storage
    
    
    
        if(localStorage.getItem("like_count2") === null) { //* if the local storage is null
          localStorage.setItem("like_count2", `${count}`); //* set the local storage to 0
        }
        
        if(localStorage.getItem("like_count2") == 11) { //* if the local storage is 12
          setwarn(!warn + like2.classList.add("active"));
        }
    }
    // end of sendPost function

    const back = () => {
        setgoback(!back + document.querySelector(".container").classList.remove("active"));
        setgoback(!back + document.querySelector(".wrapper").classList.remove("active"));
    }
    
    return(
        <>
        <div className="container">
            <div className="return_btn" onClick={back}>
                <FontAwesomeIcon className='retrun' icon={faChevronCircleLeft} />
            </div>
            <div className="content">
                <div className="postd">
                    <div className="posty">
                        <div className="eInput">
                            <input type="text" placeholder="Header Text" id="header_input"/>
                        </div>
                        <div className="input">
                            <textarea name="" id="field_post" cols="30" rows="10" placeholder="What's on your mind?"></textarea>
                        </div>
                        <div className="button">
                            <button onClick={sendPost}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Post;