# Approach

1. I began from the data side by implementing a singleton api class and adding the api call to get the list of chargers. It takes in a location object and gives chargers within a hardcoded distance from that location. 

2. I implemented the View to display the chargers using cards to validate the api call implementation. 

3. I then moved on to the other api call which is sending a post to the ev energy backend. It doesn't seem to be a real api endpoint so it always errored out. I assume this is on purpose. 

4. I added the onpress to the card which triggers the post api call. I also added some functionality to handle the case of the api call not working. 

5. I followed up with using the expo location package to get the user's real location and pass it to the fetch api call. 

6. Lastly I refactored the Card component a bit and added some tests to it. 
