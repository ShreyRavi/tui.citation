import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
      width: 500,
      float: 'left',
      top: "50%",
      left: "50%",
      transform: 'translate(40%, 50%)',
      backgroundColor: 'white',
      padding: '50px',
      border: 'solid 1px black',
    },
    tableHeader: {
      fontWeight: "bold"
    },
    title: {
        backgroundColor: 'white',
        paddingBottom: '5px',
    },
    select: {
        width: '100%',
        backgroundColor: 'white',
        paddingTop: '5px',
        paddingBottom: '5px',
    }
  });

const CiteModal = ({open, handleClose, citations, insertedCitations, setInsertedCitations}) => {
    const classes = useStyles();
    const [selectedCitationId, setSelectedCitationId] = useState('');
    const handleSelectCitation = (e) => {
        setSelectedCitationId(e.target.value);
    }
    const handleSubmit = () => {
        if (selectedCitationId !== '') {
            setInsertedCitations([...insertedCitations, selectedCitationId]);
        }
        setSelectedCitationId('');
        handleClose();
    };
    if (!citations) {
        return <></>;
    }
    return(
        <Modal
            open={open}
            onClose={handleClose}
        >
            <div className={classes.table}>
                <Typography className={classes.title} variant="h5">Insert Citation</Typography>
                <TableContainer component={Paper}>
                    <Table size="small">
                    <TableHead className={classes.tableHeader}>
                        <TableRow>
                        <TableCell>Author</TableCell>
                        <TableCell align="right">Year</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {citations.map((row) => (
                        <TableRow key={row.author}>
                            <TableCell component="th" scope="row">
                            {row.author}
                            </TableCell>
                            <TableCell align="right">{row.year}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                <Select
                    className={classes.select}
                    value={selectedCitationId}
                    onChange={handleSelectCitation}
                    >
                    <MenuItem value="">
                        <em>None Selected</em>
                    </MenuItem>
                    {
                        citations.map((citation) => {
                            return(
                                <MenuItem value={citation.id}>{citation.author} - {citation.year}</MenuItem>
                            );
                        })
                    }
                </Select>
                <Button onClick={handleSubmit} variant="contained" color="primary">Insert</Button>
            </div>
        </Modal>
    );
};

export default CiteModal;