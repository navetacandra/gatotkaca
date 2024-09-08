import Image from "next/image";
import styles from "./page.module.css";
import Brand from "@/components/Brand"

export default function Home() {
  return (
    <main className="center h-100">
      <Brand />
      <form className="searchbar" method="get" action="/search">
        <input type="text" name="q" />
        <button className="searchbutton" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </button>
      </form>
    </main>
  );
}
