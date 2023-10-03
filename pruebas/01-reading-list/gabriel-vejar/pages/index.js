import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Book from '../components/Book';
import Grid from '@mui/material/Grid';
import { library } from "../public/books.json"
import { useState } from 'react';

export default function Home() {
  const [availableBooks, setAvailableBooks] = useState(library)
  const [readingList, setReadingList] = useState([])

  const handleAddBookToReadingList = (bookIndex) => {
    console.log("add book", bookIndex);
    setReadingList((prevState) => [...prevState, availableBooks.at(bookIndex)])
    setAvailableBooks((prevState) => {
      prevState.splice(bookIndex, 1)
      return prevState
    })
  }

  const handleRemoveBookFromReadingList = (bookIndex) => {
    console.log("remove book", bookIndex);
    setAvailableBooks((prevState) => [...prevState, readingList.at(bookIndex)])
    setReadingList((prevState) => {
      prevState.splice(bookIndex, 1)
      return prevState
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Libros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container spacing={2} direction='row'>
          <Grid item xs={8}>
            <h1 className={styles.title}>
              {availableBooks.length} libros disponibles
            </h1>
            <Grid container spacing={2}>
              {availableBooks.map(({ book }, bookIndex) => (
                <Grid item xs>
                  <Book {...book} available={true} handleClickActionButton={() => handleAddBookToReadingList(bookIndex)} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <h1 className={styles.title}>
              Lista de lectura
            </h1>
            <Grid container spacing={2} style={{ background: "lightgrey" }}>
              {readingList.map(({ book }, bookIndex) => (
                <Grid item xs>
                  <Book {...book} available={false} handleClickActionButton={() => handleRemoveBookFromReadingList(bookIndex)} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </main>

      {/* <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  );
}
