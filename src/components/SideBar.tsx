import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface SidebarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  setSelectedGenre: (id: number) => void;
}
export function SideBar({
  genres,
  selectedGenreId,
  setSelectedGenre,
}: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => setSelectedGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
