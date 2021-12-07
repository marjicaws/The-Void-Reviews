# PROJECT ISSUE TICKET


## Unexpected Behavior
I'm having trouble adding my movie review form to my page and getting the form to show up on the Detail page.

## Expected Behavior

I expect to be able to show the submitted form response on the detail page after submitting it on the edit page.

## Reproduce the Error

> Describe the steps we can take to reproduce the error, i.e.:

```md
1. # PROJECT ISSUE TICKET

> ```json

import { useState } from "react";


export default function Review() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      name,
      review,
    };
    await newReview;
  };

  return (
    <div>
      <ul>
        <form onSubmit={handleSubmit}>
          <li>
            {" "}
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />{" "}
          </li>
          <li>
            {" "}
            <label>Review Here</label>
            <input
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />{" "}
          </li>

          <button type="submit">Submit to the Void</button>
        </form>
      </ul>
    </div>
  );
}

```


## Unexpected Behavior

> Nothing happens. Nothing shows in the review area. Nothing is showing from the review API but the Api is linked in the console.

## Expected Behavior

> For the review to show on the detail page once the form is submitted from the edit review page.

## Reproduce the Error

> Describe the steps we can take to reproduce the error, i.e.:

```md
1. Clone this repo.
2. Run `npm start`.
3. Navigate to the landing page.
4. Click on a movie image link.
5. Click the Leave a review button.
6. Attempt to leave a review.
7. Notice that nothing happens when you hit the submit button.
```

## Documentation

> Include the exact error message, and if helpful, any supplemental documentation, such as screen captures.

```md
There is no error message it just doesn't do anything.
```

## Attempted Resolution

> If you haven't already, **Google your error message now**. See if those error messages return an answer. Include at least 2 resources you've tried to consult such as walk-throughs, stack overflow articles, and other discussion threads related to your error.

```md
1. https://www.youtube.com/watch?v=sjAeLwuezxo&t=4s
2. https://www.youtube.com/watch?v=7Vo_VCcWupQ
```

2. Run `npm start`.
3. Navigate to the landing page.
4. 
5. Sc
6. See the subsequent error in the console.
```

## Documentation

> Include the exact error message, and if helpful, any supplemental documentation, such as screen captures.

```md
There is no error message.
```

## Attempted Resolution

> If you haven't already, **Google your error message now**. See if those error messages return an answer. Include at least 2 resources you've tried to consult such as walk-throughs, stack overflow articles, and other discussion threads related to your error.

```md
1. Link 1
2. Link 2
```
