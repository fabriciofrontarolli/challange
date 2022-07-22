The Autocomplete is using an API that loads all users at once
The app is using an API that does not support searching/filtering.
Thus, the filtering/lookup is being implemented locally.
Debounce is used in order to simulate asyncronous request/filter

In case of having an API that supports filter/search, the responsbility of calling the API, getting the updated items would be on the parent, and the Autocomplete would receive the updated list of items, so it will be transparent to the Autcomplete the asyncronous fetching part.

So the final implementation of this component would depend on the final usage of it, and how the pages would interact with it.

# Running the App

The app was created with create-react-app, run **npm install** and **npm start** to run the app.
