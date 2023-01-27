## Tutorial
- https://www.youtube.com/watch?v=BCg4U1FzODs

## Notes
1. Create a new React app in TypeScript
```sh
npx create-react-app . --template typescript 
```

2. Create component example
```sh
export interface Props {
  title: string
  color?: string
}

const Header = (props: Props) => {
  return (
    <header>
      <h1 style={{color: props.color ? props.color : 'blue'}}>{props.title}</h1>
    </header>
  )
}

export default Header
```