import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function Header() {
  return (
    <header className="p-4 flex justify-between">
      <h1 className="font-bold text-xl">SCARC</h1>
      <Avatar>
        <AvatarImage src="https://github.com/ruangustavo.png" />
        <AvatarFallback>RG</AvatarFallback>
      </Avatar>
    </header>
  )
}
