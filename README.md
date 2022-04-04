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

<br>
<b>example</b>
<br>
<br>

```jsx
setshow(!show + document.querySelector(".container").classList.add("active"));
```
