# ReduxWeatherApp

Redux weather app using Open Weather API and Google Maps to render a small map of the city that is searched. 

### TECH STACK
1. React
2. Redux

### MISC TECH
1. react-redux (module)
2. redux (module)
3. react-sparklines@1.6.0 (module) - cool package for drawing small graphs, very handy and reusable
4. axios (module)
5. lodash (module)
6. redux-promise (module)

### WHAT I LEARNED

1. The importance of keeping action types consistent. In practice, action types are usually in a seperate file that are exported as constants then imported to be used.
2. **Middleware:** functions that take an action and depending on actions type/payload or other factors, can choose to let the action pass through, log it, stop it, or manipulate it before it reaches the reducer.
3. Since Redux handles data, it is recommended to make API calls inside of Action Creators.
4. **redux-promise** is a NPM module that is a middleware that automatically detected a promise was returned from an Action Creator, stopped the action, waited for it to resolve, once it resolved it passed the data to the reducer.
5. Binding methods in the constructor:
  * "this" is the instance of the Class has a function call [function Name]
  * bind that function to "this" which is the Class
  * and replace [function Name] with this new bound instance of this function
6. In the code snippet below, the first value is null because connect takes two parameters. In this example we only used mapDispatchToProps and not mapStateToProps, therefore since mapDispatchToProps is the 2nd parameter we had to insert **null** for the 1st parameter since we didn't use it.

```javascript
export default connect(null, mapDispatchToProps)(SearchBar);
```

7. NEVER mutate state in a reducer or in general. Which means never call state and assign a value to it directly, or if using arrays never insert elements into state.
  * In the example below, we defaulted state to an empty array, so when returning state we used **concat** because concat creates a new array instead of mutating the original array (state).
  * "return state.push(action.payload.data)" is an example of mutating the original array, which is bad practice, and will cause problems down the line.

```javascript
export default function(state = [], action){

  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat([action.payload.data]);
      // return [ action.payload.data, ...state ]; destructing, by flattening then creating a new one
  }

  return state;
}
```

### NEED TO REVIEW
1. Defining middleware
2. How to setup Redux with create-react-app
3. mapDispatchToProps, mapStateToProps
4. bindActionCreators, connect, dispatch

### CODE SAMPLE

1. Below is an example of a reusable component that displays a small graph using react-sparklines. This component can be used in multiple projects.
  * data has to be an array of numbers

```javascript
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Chart = (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
    </div>
  );
};

export default Chart;
```



### Source: UDEMY course taught by Stephen Grider (https://github.com/StephenGrider/)