'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Slide from '../components/slide';

import { useContext } from "react";
import { SlideContext } from "../components/slidecontext";

import './layout.css';

export default function Filmes() {

  const [movies, setMovies] = useState([]);
  const { activeSlideIndex } = useContext(SlideContext);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/discover/movie", {
        params: {
          api_key: "aea62eb03c90189d7761191127e74ccf",
          page: 1,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados dos filmes: ", error);
      });
  }, []);

  return (
    <>
      <Box sx={{ maxWidth: '50%', paddingLeft: '7em', paddingTop: '0.5em', color: 'white' }}>
        {movies.map((movie, index) => {
          if (index === activeSlideIndex) {
            return (
              <>
                <h1 style={{ fontSize: '5rem', marginBottom: '0.1em' }}>
                  {movie.title}
                </h1>
                <p>
                  <span style={{ color: '#000000', backgroundColor: '#F5C51C', fontWeight: 'bold', width: '3.5em', height: '1.8em', lineHeight: '1.8em', display: 'inline-block', borderRadius: '0.25em', marginRight: '0.5em', boxShadow: '0px 3px 6px #000000', textAlign: 'center' }}>
                    IMDB
                  </span>
                  8.2 ({movie.vote_average}) | 2021 | 1 hora e 55 minutos | Sci-fi
                </p>
                {/* Descrição do filme */}
                <p style={{ textAlign: 'justify', maxWidth: '75%', lineHeight: 1.7 }}>
                  {movie.overview}
                  <span style={{ color: '#F5C51C' }}  >See more</span>
                </p>
              </>
            );
          }
        })}
        <Box>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="outlined"
                style={{
                  borderRadius: '10px',
                  border: '1px solid white',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  width: '200px',
                  height: '50px',
                  color: 'white',
                }}
              >
                Watch trailer
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" startIcon={<PlayArrowIcon />}
                style={{
                  borderRadius: '10px',
                  backgroundColor: '#F5C61C',
                  color: 'black',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  width: '200px',
                  height: '50px',
                }}>
                Watch now
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box pt={6}>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="outlined" className='btn-slide'>
                <ChevronLeftIcon /> {/* Ícone de seta para a esquerda */}
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" className='btn-slide'>
                <ChevronRightIcon /> {/* Ícone de seta para a direita */}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Slide />
    </>
  );
}