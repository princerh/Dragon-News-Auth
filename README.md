# Resources 

### Tailwind Setup 

[Tailwind CSS](https://tailwindcss.com/docs/guides/vite)

put these in command prompt: 

```npm create vite@latest my-project -- --template react```

```cd my-project```

```npm install -D tailwindcss postcss autoprefixer```

```npx tailwindcss init -p```

To open vs code: 
```code .```

 - put this in tailwind.config.js file in the place of content: 

```javascript
 content: [
    "./index.html",
    "./src/**/*.{js,ts, jsx,tsx}",
  ],
  ```

- put this in index.css file: 

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Daisy UI setup 

[Daisy UI](https://daisyui.com/docs/install/)

write this in command prompt: 

```npm i -D daisyui@latest```

- put this in tailwind.config.js file instead of plugins: 
```javascript
plugins: [require("daisyui")],
``` 
- To remove the underline error of "requre", place this in .eslintrc.cjs file:

```javascript
env: { browser: true, node: true,  es2020: true },
``` 

### React-Router

[React-Router](https://reactrouter.com/en/main/start/tutorial) 

write these in command prompt: 

```npm install react-router-dom localforage match-sorter sort-by```

### Firebase 

[Firebase](https://console.firebase.google.com/u/0/)

write this in command prompt: 

```npm install firebase```

### To run website 
```npm run dev``` 

## More Resources 

### React 

[React Tutorial](https://react.dev/)


### Date Fixer 

[Moment.js](https://momentjs.com/)

To install this: 
```npm install moment --save```

to use this: 
```import moment from 'moment'```


### React Marquee 

[React Marquee](https://www.react-fast-marquee.com/) 

To install this: 
```npm install react-fast-marquee --save```

to use this: 
```import Marquee from "react-fast-marquee"```


### React Icons 

[React Icons](https://react-icons.github.io/react-icons/)

To install this: 
```npm install react-icons --save``` 

