'use client'

import { Box, Button } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        paddingTop: '7em',
      }}>

        <h1 style={{ paddingBottom: 0, marginBottom: 10 }}>Filmes, séries e muito mais, sem limites</h1>
        <p style={{ marginTop: 0 }}>Assista aonde quiser:</p>

        <Button 
        onClick={() => router.push('/dash')}
        sx={{ 
          backgroundImage: 'radial-gradient(circle, #ff0000, #d2000b, #a6000e, #7b030d, #520505);',
          color: 'white', 
          borderRadius: '12px', 
          fontWeight: 'bold', 
          width: '180px',    
          height: '40px',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            '& .text': {
              opacity: 0,
            },
            '& .icon': {
              opacity: 1,
              animation: 'moveRight 0.6s linear infinite',
            },
          },
          '& .icon': {
            opacity: 0,
            transition: 'opacity 0.3s',
          },
        }}>
          <span className="text">GET STARTED</span>
          <ArrowForwardIosIcon className="icon" sx={{ position: 'absolute', left: '50%', transition: 'left 0.3s' }} />
        </Button>

        <style jsx global>{`
          @keyframes moveRight {
            0% { left: 50%; }
            100% { left: 70%; }
          }
        `}</style>

      </Box>
    </>
  );
}