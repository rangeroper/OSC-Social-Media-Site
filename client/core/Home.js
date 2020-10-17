import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import collaboratorsImg from './../assets/images/collaborators.jpg'
import Grid from '@material-ui/core/Grid'
import auth from './../auth/auth-helper'
import FindPeople from './../user/FindPeople'
import Newsfeed from './../post/Newsfeed'
import { Link, withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
   
  },
  title: {
    
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
      backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
        color: '#44344F'
    } 
  }

}))

export default function Home({history}){
  const classes = useStyles()
  const [defaultPage, setDefaultPage] = useState(false)

  useEffect(()=> {
    setDefaultPage(auth.isAuthenticated())
    const unlisten = history.listen (() => {
      setDefaultPage(auth.isAuthenticated())
    })
    return () => {
      unlisten()
    }
  }, [])

    return (
      <div className={classes.root}>
        { !defaultPage &&
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <Typography variant="h6" className={classes.title}>
                  Welcome to Open-Source-Collaborators!
                </Typography>
                    <CardMedia className={classes.media} image={collaboratorsImg} title="Collaborators" />
                        <Typography variant="body2" component="p" className={classes.credit} color="textSecondary">
                            <Link to="/signup">
                                Sign up{' '}   
                            </Link>
                                or{' '}
                            <Link to="/signin">
                                Sign in to get started now!
                            </Link>
                        </Typography>        
                        <CardContent style={{ backgroundColor: "#564D80"}}>
                            <Typography type="body1" component="p">
                                OSC is the open-source platform built for collaborators and entrepreneurs.  
                                Meet like-minded people and level-up your coding skills together.   
                        </Typography>
                    </CardContent>
              </Card>
            </Grid>
          </Grid>
        }
        {defaultPage &&
          <Grid container spacing={8}>
            <Grid item xs={8} sm={7}>
              <Newsfeed/>
            </Grid>
            <Grid item xs={6} sm={5}>
              <FindPeople/>
            </Grid>
          </Grid>
        }
      </div>
    )
}
