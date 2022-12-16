import {
    Container,
    Card,
    CardContent,
    Typography,
    CardMedia,
    Box,
  } from "@mui/material";
  const CardUsuarios = ({ usuarios }) => {
    return (
        <>
            
            <Box>
                <Card
                    sx={{
                    display: "flex",
                    height: 250,
                    marginBottom: '10px',
                    backgroundColor: "rgba(55, 195, 181, 0.747)",
                    }}>
                    <CardContent>
                    <Box>
                        <Typography className="titulo">{usuarios.name}</Typography><br></br>
                        <Typography className="autor">{usuarios.apellido}</Typography>
                        <Typography className="parrafo">{usuarios.email}</Typography>
                        <Typography className="parrafo">{usuarios.telefono}</Typography>
                    </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
      
    );
  };
  
  export default CardUsuarios;