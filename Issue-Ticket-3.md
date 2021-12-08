# PROJECT ISSUE TICKET


## Unexpected Behavior
I'm having an issue with creating a grid with my images on my homepage. I also realized I don't ahve six components.
I've tried moving the mapped image links to a home.jsx file I have but once I move everything into that file nothing 
shows on the home page.

## Expected Behavior

I want to be able to see all of my images in a grid style. I also want to put my image link mapping section into my home component.

## Reproduce the Error

> Describe the steps we can take to reproduce the error, i.e.:

```md
1. # PROJECT ISSUE TICKET

> ```json
.image-grid {
  --gap: 16px;
  --num-cols: 4;
  --row-height: 300px;
  width: 25%;
  height: 50%;
  box-sizing: border-box;
  padding: var(--gap);
  display: grid;
  grid-template-columns: repeat(var(--num-cols), 1fr);
  grid-auto-rows: var(--row-height);
  gap: var(--gap);
  
  .image-grid > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 1024px) {
  .image-grid{
    --num-cols: 2;
    --row-height: 200px;
  }
  
}

}

```


## Unexpected Behavior

> The home page images only display in a single row.

## Expected Behavior

> For the images to display as a grid gallery. Mosaic style. 

## Reproduce the Error

> Describe the steps we can take to reproduce the error, i.e.:

```md
1. Follow grid display youtube instructions.
2. Page looks the same.

```

## Documentation

> Include the exact error message, and if helpful, any supplemental documentation, such as screen captures.

```md
no error message
```

## Attempted Resolution

> If you haven't already, **Google your error message now**. See if those error messages return an answer. Include at least 2 resources you've tried to consult such as walk-throughs, stack overflow articles, and other discussion threads related to your error.

```md
no error message


```

## Documentation

> Include the exact error message, and if helpful, any supplemental documentation, such as screen captures.

```md
no error message
```

## Attempted Resolution

> If you haven't already, **Google your error message now**. See if those error messages return an answer. Include at least 2 resources you've tried to consult such as walk-throughs, stack overflow articles, and other discussion threads related to your error.

```md
1. https://www.youtube.com/watch?v=rnhoY5Cdmy0

```
