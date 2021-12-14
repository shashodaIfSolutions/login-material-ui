import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

import { TextField, Link, CssBaseline, Grid, Container, Button } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';


const theme = createMuiTheme({
     palette: {
          primary: {
               main: '#d5b800'
          }
     },
     overrides: {
          MuiCssBaseline: {
               '@global': {
                    body: {
                         background: 'linear-gradient(180deg, #70b7b7 30%, #354b85 90%)',
                         backgroundRepeat: "no-repeat",
                         backgroundAttachment: "fixed",
                    },
               },
          },
     },
})

const useStyles = makeStyles((theme) => ({
     paper: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
     },
     form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
     },
     submit: {
          margin: theme.spacing(3, 0, 2),
          color: 'white',
          borderRadius: '10px',
          letterSpacing: '3px',
          textShadow: '1px 1px #000',
          padding: '10px 0'
     },
     title: {
          color: 'white',
          fontWeight: '500',
          letterSpacing: '3px',
     },
     white: {
          color: 'white',
     },
     textField: {
          backgroundColor: 'white',
          borderRadius: '10px',
     },
     avatar: {
          width: '200px',
          objectFit: 'contain'
     },
     root: {
          '&:hover $notchedOutline': {
            borderColor: 'unset'
          }
        },
        focused: {
          border: 'unset'
        },
        notchedOutline: {
          borderColor: 'black',
          borderRadius: '10px'
        },
}));

export default function SignIn() {
     const classes = useStyles();

     return (
          <ThemeProvider theme={theme}>
               <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}
               >

                    <Container component="main" maxWidth="xs">
                         <CssBaseline />
                         <div className={classes.paper}>
                              <img alt="User" src="/img/user.png" className={classes.avatar} variant="square"/>
                              <Typography component="h1" variant="h3" className={classes.title}>
                                   Member login
                              </Typography>
                              <form className={classes.form} noValidate>
                                   <TextField className={classes.textField}
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        id="email"
                                        name="email"
                                        placeholder='email'
                                        autoComplete="email"
                                        autoFocus
                                        InputProps={{
                                             endAdornment: (
                                               <InputAdornment>
                                                 <IconButton>
                                                   <PersonIcon />
                                                 </IconButton>
                                               </InputAdornment>
                                             ),
                                             classes: {
                                                  root: classes.root,
                                                  focused: classes.focused,
                                                  notchedOutline: classes.notchedOutline
                                               }
                                           }}
                                   />
                                   <TextField className={classes.textField}
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        name="password"
                                        type="password"
                                        placeholder='password'
                                        id="password"
                                        autoComplete="current-password"
                                        InputProps={{
                                             endAdornment: (
                                               <InputAdornment>
                                                 <IconButton>
                                                   <LockIcon />
                                                 </IconButton>
                                               </InputAdornment>
                                             ),
                                             classes: {
                                                  root: classes.root,
                                                  focused: classes.focused,
                                                  notchedOutline: classes.notchedOutline
                                               }
                                           }}
                                   />
                                   <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                   >
                                        Sign In
                                   </Button>
                                   <Grid container>
                                        <Grid item xs className={classes.white}>
                                             Forgot password?&ensp;
                                             <Link href="#" variant="body2" className={classes.white}>
                                                  {"Click here"}
                                             </Link>
                                        </Grid>
                                   </Grid>
                              </form>
                         </div>
                    </Container>

               </Grid>

          </ThemeProvider>
     );
}