import React, {useContext,useState} from 'react'
import {ModalContext} from '../context/ModalContext.jsx';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { ModalConsumer } from '../context/ModalContext';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: 'scroll',
        height: '100%',
        maxHeight: 500,
        display: 'block'
    },
    header: {
        padding: '12px 0',
        borderBottom: '1px solid darkgrey'
    },
    content: {
        padding: "12px 0",
        overflow: 'scroll'
    }
}));

const Recipe = ({recipe}) => {

    const [ modalStyle ]= useState(getModalStyle);
    const [ open, setOpen ]= useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    

    const { setIdRecipe,setRecipe, recipe_info} = useContext(ModalContext);

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h3 className="card-header">
                    {recipe.strDrink}
                </h3>
                <img 
                    className="card-img-top"
                    src={recipe.strDrinkThumb}
                    alt={`${recipe.strDrink}`}
                />

                <div className="card-body">
                    <button
                        type='button'
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdRecipe(recipe.idDrink);
                            handleOpen();
                        }}
                    >
                        View recipe
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            setIdRecipe(null);
                            setRecipe({})
                            handleClose();
                        }}
                    >
                        <div 
                            style={modalStyle}
                            className={classes.paper}
                        >   
                            <h2>{recipe_info.strDrink}</h2>
                            <h3 className="mt-4">Instructions</h3>
                            <p>
                                {recipe_info.strInstructions}
                            </p>
                            <img 
                                className="img-fluid my-4"
                                src={recipe_info.strDrinkThumb}
                            />

                        </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Recipe;