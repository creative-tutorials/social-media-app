# social-media-app
Basic Social Media App using reactJs

Things to look out for
<li>Using State Hook to switch between pages</li>
<li>Storing post in LocalStorage</li>
<li>Storing like count in LocalStorage</li>
<li>Using a free API to get random user name</li>
<li>Using a free API to get random images</li>

<h3>1 Using State Hook to switch between pages</h3>

I have imported the `useState` hook from react component which I believe you have now by installing the react app

Switch page with `useState hook`

To be able to switch page using the useState hook first you would need to set you hook to a specific task
<br>
<b>example</b>
<br>
```jsx
const [show, setshow] = useState() //* true = show, false = hide
```
<br>
Step2: Set a boolean of true to show the first page, and a boolean value of hide to hide the page
for me both will be true so I can Implement the classList function inside javascript
<br>
<b>example</b>
<br>
<br>

```jsx
const [show, setshow] = useState(true) //* true = show, false = hide
```

<br>
<br>

Step3: Implementing the switch page using classList and the `useState hook`
<b>example</b>
<br>
<br>

show the second page
```jsx
setshow(!show + document.querySelector(".container").classList.add("active"));
```

hide the first page
```jsx
sethide(!hide + document.querySelector(".wrapper").classList.add("active"));
```

<h3>Storing post in LocalStorage</h3>
all post that is being made are stored in localStorage

<h2>Using a free API to get random user name</h2>
I have used a free api to get random user name and also more dummy info about the user

To get started with this first you will need to fetch the `API` below I will show you how

```jsx
fetch('https://randomuser.me/api/') //* fetching data from randomuser.me
      .then(response => response.json()) //* parsing the data to json
      .then(json => console.log(json)) 
      //* logging the data to the console
      .catch(error => console.log(error)) //* logging the error to the console
```

<h2>Using a free API to get random images</h2>
As always we need cool random image so here I have fetch random images using `picsum API` here is an example below

```jsx
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
```

Now let me explain I called an array of object containing some id url and story_name these data contain all these items but only the url was implemented in this project I used picsum api to get a request of random image 

First i got the the url `picsum.photos` and then got the status response from the api which is `200` and then the initator which is `300` then randomlize them using Math.random

<br>
<br>
<br>
<br>
<br>

# This is all to Know about this project thanks for reading😉
