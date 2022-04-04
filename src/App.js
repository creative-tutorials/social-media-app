import './App.css'; //* import the css file
import Post from './components/post'; //* import the post component
import { useState } from 'react'; //* useState is a hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //* import the fontawesome icon
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

function App() { //* create the App function
  const [warn, setwarn] = useState(true) //* true = warn, false = no warn
  const [show, setshow] = useState(true) //* true = show, false = hide
  const [hide, sethide] = useState(true) //* true = show, false = hide
  let count = 0; //* count for thumbs up
  console.log(`counter: ${count}`); //* loggin counter to the console

    let data = [ //* array of objects storing data
      {
        id: 1,
        url: `https://picsum.photos/200/300?random&${Math.random() * 100}`,
        story_name: 'story 1',
      },
      {
        id: 2,
        url: `https://picsum.photos/200/300?random&${Math.random() * 200}`,
        story_name: 'story 2',
      },
      {
        id: 3,
        url: `https://picsum.photos/200/300?random&${Math.random() * 300}`,
        story_name: 'story 3',
      },
      {
        id: 4,
        url: `https://picsum.photos/200/300?random&${Math.random() * 400}`,
        story_name: 'story 4',
      },
      {
        id: 5,
        url: `https://picsum.photos/200/300?random&${Math.random() * 500}`,
        story_name: 'story 5',
      },
    ]
    
  window.addEventListener('load', () => { //* add event listener to the window
    console.log('window loaded'); //* loggin to the console
    const counter = document.getElementById('count');
    const like = document.getElementById('like');
    var retrieveLocalData = localStorage.getItem("like_count");
    counter.innerHTML = `${retrieveLocalData}`; //* set the counter to the local storage



    if(localStorage.getItem("like_count") === null) { //* if the local storage is null
      localStorage.setItem("like_count", `${count}`); //* set the local storage to 0
      
    }
    
    if(localStorage.getItem("like_count") == 11) { //* if the local storage is 12
      setwarn(!warn + like.classList.add("active"));
    }


    const name1 = document.getElementById("name1");
    const name2 = document.getElementById("name2"); 
    const name3 = document.getElementById("name3"); 
    const name4 = document.getElementById("name4"); 

    fetch('https://randomuser.me/api/') //* fetching data from randomuser.me
      .then(response => response.json()) //* parsing the data to json
      .then(json => console.log(json, name1.innerHTML = json.results[0].name.last, name2.innerHTML = json.results[0].name.first, name3.innerHTML = json.results[0].name.first, name4.innerHTML = json.results[0].name.first)) 
      //* logging the data to the console
      .catch(error => console.log(error)) //* logging the error to the console
  });

  const handleLike = () => { //* function to handle the thumbs up
    const counter = document.getElementById('count');
    const like = document.getElementById('like');
    count++; //* incrementing the count

    localStorage.setItem("like_count", `${count}`) //* setting the local storage
    var retrieveLocalData = localStorage.getItem("like_count"); //* getting the local storage
    console.log(retrieveLocalData) //* logging the local storage to the console
    console.log(`counter: ${count}`); //* logging the counter to the console
    counter.innerHTML = `${retrieveLocalData}`; //* setting the counter to the local storage

    if(count > 10){ //* if the count is greater than 10
      console.warn("You've reached your like limit"); //* warn the user
      setwarn(!warn + like.classList.add("active")); //* set the warn to true
    }else{ //* if the count is less than 10
      console.log("You can like more") //* log the user can like more
      setwarn(!warn + like.classList.remove("active")); //* set the warn to false
    }
  }
  const proceedPost = () => {
    setshow(!show + document.querySelector(".container").classList.add("active"));
    sethide(!hide + document.querySelector(".wrapper").classList.add("active"));
  }
  return (
    <div className="App">
      <Post />
      <div className="wrapper">
        <div className="header">
          <div className="icon_left">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="tag">Socisy</div>
          <div className="icon_right" onClick={proceedPost}>
            <FontAwesomeIcon icon={faPencil} />
          </div>
        </div>
        <div className="content">
          <div className="stories">
            <div className="story_block">
              <div className="story">
                <div className="story_image">
                  <img src={data[0].url} alt="pc"/> 
                  {/* set the image to the first story */}
                </div>
                <div className="story_info">
                  <div className="story_name" id='name1'>{data[0].story_name}</div> 
                  {/* set the name of the first story */}
                </div>
              </div>
              {/*  */}
              <div className="story">
                <div className="story_image">
                <img src={data[1].url} alt="pc"/>
                {/* set the image to the second story */}
                </div>
                <div className="story_info">
                  <div className="story_name" id='name2'>{data[1].story_name}</div>
                  {/* set the name of the second story */}
                </div>
              </div>
              {/*  */}
              <div className="story">
                <div className="story_image">
                <img src={data[2].url} alt="pc"/>
                {/* set the image to the third story */}
                </div>
                <div className="story_info">
                  <div className="story_name" id='name3'>{data[2].story_name}</div>
                  {/* set the name of the third story */}
                </div>
              </div>
              {/*  */}
              <div className="story">
                <div className="story_image">
                <img src={data[3].url} alt="pc"/>
                {/* set the image to the fourth story */}
                </div>
                <div className="story_info">
                  <div className="story_name" id='name4'>{data[3].story_name}</div>
                  {/* set the name of the fourth story */}
                </div>
              </div>
              </div>
            </div>
              {/*  */}
              <div className="main">
                <div className="main_image">
                <img src={data[4].url} alt="post_img"/>
                {/* set the image to the post */}
                </div>
                <div className="header">Header</div>
                <p className="small">Sample Text</p>
                <div className="buttons">
                  <div className="btn">
                    <div className="btn_text" onClick={handleLike} id='like'><FontAwesomeIcon icon={faThumbsUp} /> Like <span id="count">{count}</span></div>
                    <div className="btn_text"><FontAwesomeIcon icon={faMessage} /> Comment</div>
                    <div className="btn_text"><FontAwesomeIcon icon={faShare} /> Share</div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default App;
