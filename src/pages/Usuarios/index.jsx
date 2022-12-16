import { get } from "../../services";
import { useState, useEffect } from "react";
import { Typography, Container, Grid } from "@mui/material";
import { CardUsuarios } from "../../components";

const Usuarios = () => {
  const [usuarios, setUsuario] = useState([]);

  const getUsuario = async () => {
    const result = await get("/");
    setUsuario(result.data);
  };
  console.log(usuarios);
  useEffect(() => {
    getUsuario();
  }, []);
  return (
    <div>
      <div className='navbar'>
        <center><span className='navbar__title'>USUARIOS</span></center>
      </div>
      <Container maxWidth="xl" sx={{ padding: 4 }}>
        <Grid container spacing={3}>
          {usuarios.length > 0 &&
            usuarios.map((usuarios, index) => (
              <Grid xs={12} item sm={4} sx={{ padding: 2 }}>
                <CardUsuarios usuarios={usuarios} key={index} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Usuarios;